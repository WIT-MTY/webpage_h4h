"use client";

import { useEffect, useState } from "react";
// @ts-expect-error - qrcode ships without bundled TypeScript types in this project.
import QRCode from "qrcode";
import { useRouter } from "next/navigation";
import { useFetchProtegido } from "@/app/hooks/utils/useFetchProtegido";

export default function CheckInPage() {
  const [qrImage, setQrImage] = useState("");
  const router = useRouter();
  const { fetchProtegido } = useFetchProtegido();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerUUID = async () => {
      const usuarioBaseId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("usuarioBaseId="))
        ?.split("=")[1];

      if (!usuarioBaseId) {
        setLoading(false);
        router.push("/registro/iniciosesion");
        return;
      }

      try {
        const data = await fetchProtegido(
          // `${process.env.NEXT_PUBLIC_API_URL}/participantes/${usuarioBaseId}`,
          `http://localhost:8000/checkin/codigo`,
        );

        if (!data || data == null) {
          setError(true);
          return "";
        }

        return String(
          data.uuid ?? data.id ?? data.usuarioBaseId ?? usuarioBaseId,
        );
      } catch (error) {
        console.error("Error al obtener uuid:", error);
        setError(true);
        return "";
      }
    };

    const generarQR = async () => {
      try {
        const codigoCheckIn = await obtenerUUID();

        if (!codigoCheckIn) {
          return;
        }

        const qr = await QRCode.toDataURL(codigoCheckIn);
        setQrImage(qr);
      } catch (error) {
        console.error("Error generando QR:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generarQR();
  }, []);

  if (loading || error) {
    return (
      <div
        className="p-8 justify-center items-center flex min-h-screen"
        style={{ background: "#F0CEE3" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#4A0C32]/20 border-t-[#4A0C32]" />
          <p className="text-[#4A0C32]">Cargando tu código de acceso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="space-y-6">
        <h1 className="font-high-cruiser text-6xl text-[#4A0C32]">Check-in</h1>

        <div className="bg-[#C4649F]/60 rounded-lg p-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white text-2xl font-semibold mb-4">
              Tu código de acceso
            </h2>

            <p className="text-white/80 max-w-xl mb-8">
              Ve con el staff para realizar tu registro el primer día del
              evento. Presenta este código QR para validar tu participación y
              obtener acceso al hackathon.
            </p>

            <div className="bg-white rounded-xl p-4 shadow-lg w-[min(80vw,18rem)]  h-[min(80vw,18rem)]">
              <img
                src={qrImage}
                alt="QR de Check-in"
                className="h-full w-full object-contain"
              />
            </div>

            <p className="text-white/60 text-sm mt-6">
              Este código es único para tu registro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
