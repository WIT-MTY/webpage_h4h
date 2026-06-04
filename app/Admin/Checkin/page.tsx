"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function ScanCheckInPage() {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [horaLlegada, setHoraLlegada] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [scannerActivo, setScannerActivo] = useState(false);
  const [errorCamara, setErrorCamara] = useState("");
  const [errorEnvio, setErrorEnvio] = useState("");
  const [procesandoCodigo, setProcesandoCodigo] = useState(false);

  const aplicarEstilosCamara = () => {
    const reader = document.getElementById("reader");
    if (!reader) return;

    reader.style.width = "100%";
    reader.style.height = "100%";
    reader.style.overflow = "hidden";
    reader.style.display = "flex";
    reader.style.alignItems = "center";
    reader.style.justifyContent = "center";

    const video = reader.querySelector("video");
    if (video instanceof HTMLVideoElement) {
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      video.style.objectPosition = "center";
    }

    const canvas = reader.querySelector("canvas");
    if (canvas instanceof HTMLCanvasElement) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.objectFit = "cover";
      canvas.style.objectPosition = "center";
    }
  };

  useEffect(() => {
    return () => {
      scannerRef.current?.stop().catch(() => {});
    };
  }, []);

  useEffect(() => {
    if (!scannerActivo) return;

    let cancelled = false;

    const iniciarScanner = async () => {
      try {
        setErrorCamara("");

        if (!scannerRef.current) {
          scannerRef.current = new Html5Qrcode("reader");
        }

        await scannerRef.current.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: 300,
          },
          async (decodedText) => {
            if (procesandoCodigo) return;

            setProcesandoCodigo(true);
            await scannerRef.current?.stop();
            setScannerActivo(false);

            try {
              const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("token="))
                ?.split("=")[1];

              const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/checkin/${decodedText}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                },
              );

              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                  errorData.error || "No se pudo registrar el check-in.",
                );
              }

              const data = await response.json();
              const fechaLlegada = new Date(data.hora_llegada);

              setNombre(data.nombre ?? "");
              setApellido(data.apellido ?? "");
              setHoraLlegada(
                Number.isNaN(fechaLlegada.getTime())
                  ? ""
                  : fechaLlegada.toLocaleTimeString("es-MX", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }),
              );

              setErrorEnvio("");
              setMostrarModal(true);
            } catch (error) {
              console.error(error);
              setErrorEnvio(
                error instanceof Error
                  ? error.message
                  : "No se pudo registrar el check-in.",
              );
              setScannerActivo(true);
            } finally {
              setProcesandoCodigo(false);
            }
          },
          () => {},
        );

        requestAnimationFrame(() => {
          aplicarEstilosCamara();
        });
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setErrorCamara(
            "No se pudo abrir la cámara. Revisa permisos o intenta otra vez.",
          );
          setScannerActivo(false);
        }
      }
    };

    iniciarScanner();

    return () => {
      cancelled = true;
    };
  }, [scannerActivo]);

  const abrirScanner = () => {
    setMostrarModal(false);
    setNombre("");
    setApellido("");
    setHoraLlegada("");
    setErrorCamara("");
    setErrorEnvio("");
    setScannerActivo(true);

    requestAnimationFrame(() => {
      aplicarEstilosCamara();
    });
  };

  const cerrarModal = async () => {
    setMostrarModal(false);
    setNombre("");
    setApellido("");
    setHoraLlegada("");
    setErrorCamara("");
    setErrorEnvio("");
  };

  return (
    <div className="p-8">
      <div className="space-y-6">
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32]">Check-in</h1>

        <div className="bg-[#C4649F]/60 rounded-lg p-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white text-2xl font-semibold mb-3">
              Escáner de asistencia
            </h2>

            <p className="text-white/80 mb-8 max-w-xl">
              Escanea el código QR de cada participante para registrar su
              asistencia al evento.
            </p>

            <div className="flex flex-col items-center">
              {!scannerActivo && (
                <>
                  <button
                    onClick={abrirScanner}
                    className="px-6 py-3 rounded-lg bg-[#4A0C32] text-white font-semibold hover:opacity-90 transition"
                  >
                    Iniciar escáner
                  </button>
                </>
              )}

              <div
                className={`mt-8 w-full max-w-md transition-all duration-100 ${
                  scannerActivo
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none h-0 overflow-hidden"
                }`}
              >
                <div className="rounded-3xl border-2 border-dashed border-white/80 bg-white/10 p-4 shadow-lg">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
                    <div id="reader" className="h-full w-full" />
                  </div>
                </div>
              </div>

              {errorCamara && (
                <p className="mt-4 max-w-md text-sm text-white/90">
                  {errorCamara}
                </p>
              )}

              {errorEnvio && (
                <p className="mt-4 max-w-md text-sm text-white/90">
                  {errorEnvio}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="relative bg-[#C4649F] rounded-xl p-8 max-w-md w-full shadow-xl">
            <button
              onClick={() => {
                cerrarModal();
                setScannerActivo(false);
              }}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Cerrar tarjeta de asistencia"
            >
              ×
            </button>

            <h2 className="text-white text-2xl font-bold mb-6 text-center">
              Asistencia registrada
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm">Nombre</p>

                <p className="text-white font-semibold break-all">{nombre}</p>
              </div>

              <div>
                <p className="text-white/60 text-sm">Apellido</p>

                <p className="text-white font-semibold break-all">{apellido}</p>
              </div>

              <div>
                <p className="text-white/60 text-sm">Hora de llegada</p>

                <p className="text-white font-semibold">{horaLlegada}</p>
              </div>
            </div>

            <button
              onClick={() => {
                cerrarModal();
                setScannerActivo(true);
              }}
              className="mt-8 w-full py-3 rounded-lg bg-[#4A0C32] text-white font-semibold hover:opacity-90 transition"
            >
              Continuar escaneando
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
