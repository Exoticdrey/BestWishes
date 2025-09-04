import React, { useRef, useState, useCallback } from "react";
import "./CardStep2.css";
function CardStep2({
  register,
  errors,
  setValue, // <- must be passed from parent useForm
  // watch,
  formData = {},
  onNext,
  onBack,
}) {
  const fileInputRef = useRef(null);
  const [previewName, setPreviewName] = useState(formData.image?.name || "");
  const [dragActive, setDragActive] = useState(false);

  // helper to handle FileList
  const handleFiles = useCallback(
    (files) => {
      if (!files || files.length === 0) return;
      const file = files[0];

      // update react-hook-form value
      if (typeof setValue === "function") {
        setValue("image", file, { shouldDirty: true, shouldTouch: true });
      }

      // keep a small preview text (filename)
      setPreviewName(file.name);
    },
    [setValue]
  );

  const onDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const onFileChange = (e) => {
    handleFiles(e.target.files);
  };

  // get register object for image so we can merge callbacks
  const imageReg = register ? register("image") : {};

  return (
    <div className="media-step">
      <button
        type="button"
        className="back-btns"
        onClick={onBack}
        aria-label="Back"
        style={{ display: "flex", alignItems: "center" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="icon"
          style={{ width: "2rem" }}
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>{" "}
        <strong className="step-title">Media</strong>
      </button>

      {/* Attach Music */}
      <div className="form-group">
        <label>Attach music</label>
        <input
          type="text"
          placeholder="Paste spotify URL"
          className="input-field"
          {...(register ? register("musicUrl") : {})}
        />
        {errors?.musicUrl && (
          <div className="error">{errors.musicUrl.message}</div>
        )}
      </div>

      {/* Voice note */}
      <div className="form-group voice-section">
        <label>Voicenote</label>
        <div className="voice-container">
          <div className="voice-left">
            <div className="voice-icon" aria-hidden>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
                style={{ width: "2rem" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </div>
            <div className="voice-text">
              <div className="bold">Add a personal voice note</div>
              <div className="muted">Max 2mins</div>
            </div>
          </div>
          <button type="button" className="record-btn">
            Record
          </button>
        </div>
      </div>

      {/* Add Image — drag & drop + browse */}
      <div className="form-group">
        <label>Add Image</label>

        <div
          className={`image-dropzone ${dragActive ? "drag-active" : ""}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              fileInputRef.current?.click();
            }
          }}
        >
          <div className="image-icon" aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="img-icon"
              style={{ width: "2rem" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>

          <p className="image-text">
            Drag and drop your image here
            <br />
            <span className="muted">Support JPEG, PNG, GIF Max (5MB)</span>
          </p>

          <button
            type="button"
            className="browse-btn"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            Browse Files
          </button>

          {/* Hidden file input — registered with react-hook-form */}
          <input
            type="file"
            accept="image/*"
            className="hidden-file-input"
            {...imageReg}
            ref={(e) => {
              // bind RHF's ref and keep local ref
              if (imageReg && typeof imageReg.ref === "function")
                imageReg.ref(e);
              fileInputRef.current = e;
            }}
            onChange={(e) => {
              // call RHF's onChange (if present) so RHF knows about the file input change
              if (imageReg && typeof imageReg.onChange === "function")
                imageReg.onChange(e);
              onFileChange(e);
            }}
          />

          {/* show selected filename */}
          {previewName && <div className="file-name">{previewName}</div>}
        </div>

        {errors?.image && <div className="error">{errors.image.message}</div>}
      </div>

      {/* Quote */}
      <div className="form-group">
        <label>Add Favorite Quote</label>
        <input
          type="text"
          placeholder="Enter quote"
          className="input-field"
          {...(register ? register("quote") : {})}
        />
      </div>

      {/* Actions */}
      <div className="form-actios" style={{ textAlign: "right" }}>
        <button type="button" className="next-btn" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CardStep2;
