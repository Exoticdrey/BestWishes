import SlideUp from "../../ui/SlideUp";
import React, { useState, useEffect } from "react";

function ScheduleCard2({
  register,
  errors,
  onNext,
  setValue,
  formData,
  onBack,
}) {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [chunks, setChunks] = useState([]);

  // If formData.voiceNote comes from parent (for preview), generate object URL when it changes
  useEffect(() => {
    if (formData?.voiceNote instanceof Blob) {
      const url = URL.createObjectURL(formData.voiceNote);
      setAudioURL(url);

      // Cleanup to avoid memory leaks
      return () => URL.revokeObjectURL(url);
    }
  }, [formData?.voiceNote]);

  const handleStartRecording = async () => {
    setChunks([]);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) setChunks((prev) => [...prev, e.data]);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioURL(URL.createObjectURL(blob));
        setValue("voiceNote", blob); // Save to form
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (err) {
      alert("Microphone access denied or not available.");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <SlideUp delay={0.2}>
      <div className="schedule-card-section">
        <div className="schedule-container">
          <div className="schedule-card">
            {/* Header */}
            <div
              onClick={onBack}
              className="schedule-card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                marginBottom: "3rem",
                gap: "0.5rem",
              }}
            >
              <span className="back-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <h4>Media</h4>
            </div>

            <form className="schedule-form">
              <div className="row" style={{ gap: "2rem" }}>
                {/* Font Selection */}
                <div className="col">
                  <label htmlFor="font">Fonts</label>
                  <select id="font" {...register("font")}>
                    <option value="arial">Arial</option>
                    <option value="times">Times New Roman</option>
                    <option value="courier">Courier New</option>
                    <option value="verdana">Verdana</option>
                  </select>
                </div>

                {/* Font Size */}
                <div className="col">
                  <label htmlFor="fontSize">Font Size</label>
                  <select id="fontSize" {...register("fontSize")}>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                  </select>
                </div>
              </div>
              {/* Effect */}
              <div className="form-group">
                <label htmlFor="effect">Effect</label>
                <select id="effect" {...register("effect")}>
                  <option value="none">None</option>
                  <option value="fade">Fade In/Out</option>
                  <option value="slide">Slide In</option>
                  <option value="zoom">Zoom In</option>
                </select>
              </div>

              {/* Color Scheme */}
              <div className="form-group">
                <label>Color Scheme</label>
                <div className="color-options">
                  {[
                    "#F34DBD",
                    "#7B61FF",
                    "#FC5555",
                    "#29CC6A",
                    "#0099FF",
                    "#222222",
                  ].map((color) => (
                    <input
                      key={color}
                      type="radio"
                      value={color}
                      {...register("color")}
                      style={{
                        appearance: "none",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: color,
                        border: "2px solid #fff",
                        boxShadow: "0 0 0 2px #ddd",
                        cursor: "pointer",
                        margin: "0 5px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Heartfelt Message */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <label style={{ textAlign: "left", fontWeight: "500" }}>
                  Your heartfelt Message
                </label>
                <textarea
                  {...register("recipient", {
                    required: "Message is required",
                  })}
                  placeholder="Enter Your heartfelt Message"
                  style={{
                    background: "none",
                    border: "1px solid #cccccc",
                    borderRadius: "8px",
                    height: "6rem",
                    padding: "1rem",
                  }}
                ></textarea>
              </div>

              {/* Music URL */}
              <div className="form-group">
                <label>Attach music</label>
                <input
                  type="text"
                  placeholder="Paste Spotify URL"
                  className="input-field"
                  {...register("musicUrl")}
                />
                {errors?.musicUrl && (
                  <div className="error">{errors.musicUrl.message}</div>
                )}
              </div>

              {/* Voice Note Section */}
              <div className="form-group voice-section">
                <label>Voicenote</label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                    border: "1px solid #cccccc",
                    padding: "0.2rem 1rem",
                    borderRadius: "8px",
                  }}
                >
                  <button
                    type="button"
                    className="record-btn"
                    onClick={
                      recording ? handleStopRecording : handleStartRecording
                    }
                    style={{
                      backgroundColor: "#eee",
                      color: "#d600a3",
                      border: "none",
                      borderRadius: "50%",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    {recording ? (
                      "Stop"
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        />
                      </svg>
                    )}
                  </button>
                  <div>
                    <small>Add a personal voice note</small>
                    <br />
                    <small>Max 2 mins</small>
                  </div>
                </div>
                <div>
                  {audioURL && (
                    <audio
                      controls
                      src={audioURL}
                      style={{ marginLeft: "1rem" }}
                    />
                  )}

                  {errors?.voiceNote && (
                    <div className="error">{errors.voiceNote.message}</div>
                  )}
                </div>
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
        </div>
      </div>
    </SlideUp>
  );
}

export default ScheduleCard2;
