import React, { useRef, useState, useCallback } from "react";
import SlideUp from "../../ui/SlideUp";
import "./ScheduleCard3.css";
function ScheduleCard3({
  scheduleFormData,
  errors,
  setValue,
  register,
  onBack,
  onNext,
}) {
  const fileInputRef = useRef(null);
  const [previewName, setPreviewName] = useState(
    scheduleFormData.image?.name || ""
  );
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
                fill-rule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
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

            {errors?.image && (
              <div className="error">{errors.image.message}</div>
            )}
          </div>

          <div className="form-group">
            <label>Add Favorite Quote</label>
            <input
              className="input-field"
              type="text"
              placeholder="Enter quote"
              {...register("quote")}
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
