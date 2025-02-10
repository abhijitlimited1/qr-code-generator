import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          QR Code Generator
        </h1>

        {/* Ad Placement - Top */}
        {/* <div className="mb-4 w-full flex justify-center">
          <div className="bg-gray-300 w-full h-10 flex items-center justify-center rounded">
            Ad Banner
          </div>
        </div> */}

        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        {text && (
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full cursor-pointer mb-4"
          />
        )}
        {text && (
          <div ref={qrRef} className="bg-gray-200 p-4 rounded-lg inline-block">
            <QRCodeCanvas value={text} size={200} fgColor={color} />
          </div>
        )}
        {text && (
          <button
            onClick={downloadQRCode}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
          >
            Download QR Code
          </button>
        )}

        {/* Ad Placement - Bottom */}
        {/* <div className="mt-4 w-full flex justify-center">
          <div className="bg-gray-300 w-full h-10 flex items-center justify-center rounded">
            Ad Banner
          </div>
        </div> */}
      </div>
    </div>
  );
}
