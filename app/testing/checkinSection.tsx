"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Html5Qrcode } from "html5-qrcode";

function App() {
  const [codigoBackend] = useState("ABC123XYZ789");
  const [qrImage, setQrImage] = useState("");
  const [resultado, setResultado] = useState("");

  const scannerRef = useRef<Html5Qrcode | null>(null);

  // Generar QR a partir del código recibido del backend
  const generarQR = async () => {
    try {
      const qr = await QRCode.toDataURL(codigoBackend);
      setQrImage(qr);
    } catch (error) {
      console.error("Error generando QR:", error);
    }
  };

  // Iniciar escáner
  const iniciarEscaner = async () => {
    try {
      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode("reader");
      }

      await scannerRef.current.start(
        { facingMode: "environment" }, // cámara trasera en móviles
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          setResultado(decodedText);

          // Detener escaneo después de leer un QR
          scannerRef.current?.stop();
        },
        (errorMessage) => {
          // Ignorar errores de lectura mientras busca el QR
          console.log(errorMessage);
        },
      );
    } catch (error) {
      console.error("Error iniciando cámara:", error);
    }
  };

  useEffect(() => {
    return () => {
      scannerRef.current?.stop().catch(() => {});
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Generador y Lector de QR</h1>

      {/* Botón Generar QR */}
      <button onClick={generarQR}>Generar QR</button>

      {qrImage && (
        <div style={{ marginTop: "20px" }}>
          <img src={qrImage} alt="QR generado" />
        </div>
      )}

      <hr />

      {/* Botón Escanear QR */}
      <button onClick={iniciarEscaner}>Escanear QR</button>

      <div
        id="reader"
        style={{
          width: "400px",
          marginTop: "20px",
        }}
      />

      {resultado && (
        <div style={{ marginTop: "20px" }}>
          <strong>Contenido leído:</strong>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default App;
