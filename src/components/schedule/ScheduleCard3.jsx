import React, { useRef, useState, useCallback } from "react";
import SlideUp from "../../ui/SlideUp";
import "./ScheduleCard3.css";
function ScheduleCard3({
  formData = {},
  errors,
  setValue,
  register,
  onBack,
  watch,
  onNext,
}) {
  const fileInputRef = useRef(null);
  const [previewName, setPreviewName] = useState(formData.image?.name || "");
  const [previewUrl, setPreviewUrl] = useState(formData.imageUrl || "");
  const [dragActive, setDragActive] = useState(false);


    // ✅ Watch values
  const selectedFont = watch?.("fontFamily");
  const selectedFontSize = watch?.("fontSize");
  const musicUrl = watch?.("musicUrl") || "";
  const recipient = watch?.("recipient") || formData.recipient || "";
  const quote = watch?.("quote") || formData.quote || "";


  // 🖼️ Handle image uploads
  const handleFiles = useCallback(
    (files) => {
      if (!files || files.length === 0) return;
      const file = files[0];
      if (typeof setValue === "function") {
        setValue("image", file, { shouldDirty: true, shouldTouch: true });
        const fileUrl = URL.createObjectURL(file);
        setValue("imageUrl", fileUrl, { shouldDirty: true });
        setPreviewUrl(fileUrl);
      }
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
    <SlideUp delay={0.1}>
      <div className="schedule-card3">
        <form>
          <h5
            className="schedule-title"
            onClick={onBack}
            style={{
              cursor: "pointer",
              textAlign: "left",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className=""
              style={{ width: "2rem" }}
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Media</span>{" "}
          </h5>

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
        >
          <div className="image-icon" aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ width: "2rem" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 
                2.25 0 0 1 3.182 0l5.159 
                5.159m-1.5-1.5 1.409-1.409a2.25 
                2.25 0 0 1 3.182 0l2.909 
                2.909m-18 3.75h16.5a1.5 1.5 
                0 0 0 1.5-1.5V6a1.5 1.5 
                0 0 0-1.5-1.5H3.75A1.5 
                1.5 0 0 0 2.25 6v12a1.5 
                1.5 0 0 0 1.5 1.5Z"
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
          <input
            type="file"
            accept="image/*"
            className="hidden-file-input"
            {...imageReg}
            ref={(e) => {
              if (imageReg?.ref) imageReg.ref(e);
              fileInputRef.current = e;
            }}
            onChange={(e) => {
              imageReg?.onChange?.(e);
              onFileChange(e);
            }}
          />
          {previewUrl && (
            <div className="image-preview">
              <img
                src={previewUrl}
                alt="Preview"
                style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
              />
            </div>
          )}
        </div>
        {errors?.image && <div className="error">{errors.image.message}</div>}
      </div>

          <div className="form-group">
            <label>Add Sweet Nickname</label>
            <input
          type="text"
          placeholder="Enter nickname"
          className="input-field"
          value={quote}
          onChange={(e) => setValue("quote", e.target.value)}
          style={{
            fontFamily: selectedFont || "inherit",
            fontSize: selectedFontSize || "16px",
            color: watch("textColor") || "#000",
          }}
        />
          </div>

          <div className="schedule-form-btn">
            <button
              type="button"
              onClick={onNext}
              className="schedule-next-btn"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </SlideUp>
  );
}

export default ScheduleCard3;
