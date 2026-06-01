"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function ScanCheckInPage() {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const [resultado, setResultado] = useState("");
  const [horaRegistro, setHoraRegistro] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [scannerActivo, setScannerActivo] = useState(false);

  useEffect(() => {
    return () => {
      scannerRef.current?.stop().catch(() => {});
    };
  }, []);

  const iniciarScanner = async () => {
    try {
      setScannerActivo(true);

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
          await scannerRef.current?.stop();

          setResultado(decodedText);

          setHoraRegistro(
            new Date().toLocaleTimeString("es-MX", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          );

          setMostrarModal(true);
          setScannerActivo(false);
        },
        () => {},
      );
    } catch (error) {
      console.error(error);
      setScannerActivo(false);
    }
  };

  const cerrarModal = async () => {
    setMostrarModal(false);
    setResultado("");
    await iniciarScanner();
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
                    onClick={iniciarScanner}
                    className="px-6 py-3 rounded-lg bg-[#4A0C32] text-white font-semibold hover:opacity-90 transition"
                  >
                    Iniciar escáner
                  </button>
                </>
              )}

              <div
                id="reader"
                className={`mt-6 w-full max-w-md overflow-hidden rounded-xl bg-white ${
                  !scannerActivo ? "hidden" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[#C4649F] rounded-xl p-8 max-w-md w-full shadow-xl">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">
              Asistencia registrada
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm">Código detectado</p>

                <p className="text-white font-semibold break-all">
                  {resultado}
                </p>
              </div>

              <div>
                <p className="text-white/60 text-sm">Hora</p>

                <p className="text-white font-semibold">{horaRegistro}</p>
              </div>
            </div>

            <button
              onClick={cerrarModal}
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
