"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function CheckInPage() {
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    const generarQR = async () => {
      try {
        // TODO: Reemplazar con el código obtenido desde backend
        const codigoCheckIn = "USER-12345-CHECKIN";

        const qr = await QRCode.toDataURL(codigoCheckIn);
        setQrImage(qr);
      } catch (error) {
        console.error("Error generando QR:", error);
      }
    };

    generarQR();
  }, []);

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

            <div className="bg-white rounded-xl p-6 shadow-lg">
              {qrImage ? (
                <img src={qrImage} alt="QR de Check-in" className="w-72 h-72" />
              ) : (
                <div className="w-72 h-72 flex items-center justify-center">
                  <p className="text-gray-500">Generando QR...</p>
                </div>
              )}
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
