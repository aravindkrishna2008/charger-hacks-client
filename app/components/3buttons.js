"use client";
import { useRef } from "react";
import Image from "next/image";
const ThreeButtons = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCameraButtonClick = () => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");
    inputElement.setAttribute("accept", "image/*");
    inputElement.setAttribute("capture", "camera");
    inputElement.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        // You can do something with the captured image file here, such as display it or save it.
        console.log("Image captured:", file);

        // Here you can submit the image for saving or further processing using a form.
        // For example, you can create a FormData object and send it to a server.
        const formData = new FormData();
        formData.append("image", file);
        // Example: Send the formData to a server using fetch or other HTTP libraries.
      }
    });

    // Trigger the file input element to open the camera on iOS devices
    inputElement.click();
  };

  return (
    <div className="flex flex-row justify-between mt-2">
      <div>
        <button
          className="flex flex-col items-center h-[77px] p-1 w-[28vw] bg-[#28CDBE] text-[#FFFFFFCC] rounded-lg text-[14px]   justify-center"
          onClick={handleCameraButtonClick}
        >
          <Image
            src="/icon/docscan.png"
            width={50}
            height={50}
            alt="camera"
            className="w-[8vw] h-[8vw] mb-1"
          />
          Scan Receipt
        </button>
      </div>
      <div>
        <button
          className="flex flex-col items-center h-[77px] p-1 w-[28vw] bg-[#8880DB] text-[#FFFFFFCC] rounded-lg text-[14px]   justify-center"
          onClick={handleCameraButtonClick}
        >
          <Image
            src="/icon/search.png"
            width={50}
            height={50}
            alt="camera"
            className="w-[8vw] h-[8vw] mb-1"
          />
          Scan Barcode
        </button>
      </div>
      <div>
        <button
          className="flex flex-col items-center h-[77px] p-1 w-[28vw] bg-[#DE4CEA] text-[#FFFFFFCC] rounded-lg text-[14px]   justify-center"
          onClick={handleCameraButtonClick}
        >
          <Image
            src="/icon/barscan.png"
            width={50}
            height={50}
            alt="camera"
            className="w-[9vw] h-[8vw] mb-1"
          />
          Scan Barcode
        </button>
      </div>
    </div>
  );
};

export default ThreeButtons;
