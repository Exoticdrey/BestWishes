import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropUtils";
import "./ImageCropper.css";

function ImageCropper({ imageSrc, onCancel, onSave }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleSave = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    onSave(croppedImage);
  };

  return (
    <div className="cropper-container">
      <div className="cropper-wrapper">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={1} // square crop
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          cropShape="rect"
          showGrid={false}
        />
      </div>

      <div className="cropper-controls">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          onChange={(e) => setZoom(e.target.value)}
        />
        <div className="cropper-buttons">
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
          <button onClick={handleSave} className="save-btn">Save Crop</button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropper;
