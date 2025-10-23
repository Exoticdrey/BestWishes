import SlideUp from "../../ui/SlideUp";
import React, { useState, useEffect, useRef,useCallback } from "react";

function ScheduleCard2({
  register,
  errors,
  onNext,
  setValue,
  formData = {},
  watch,
  onBack,
}) {

  const fileInputRef = useRef(null);
    const [previewName, setPreviewName] = useState(formData.image?.name || "");
    const [previewUrl, setPreviewUrl] = useState(formData.imageUrl || "");
    const [dragActive, setDragActive] = useState(false);

  // const [recording, setRecording] = useState(false);
  // const [mediaRecorder, setMediaRecorder] = useState(null);
  // const [audioURL, setAudioURL] = useState(null);
  // const [chunks, setChunks] = useState([]);

    const selectedFont = watch("fontFamily");
  const selectedFontSize = watch("fontSize");

  const fonts = [
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Oswald",
    "Raleway",
    "Dancing Script",
    "Playfair Display",
    "Poppins",
    "Pacifico",
  ];

    // 🎙️ Voice Recording States
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(formData.voiceUrl || null);
    const [recordSeconds, setRecordSeconds] = useState(0);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const recordIntervalRef = useRef(null);

      // ✅ Watch values
  const musicUrl = watch?.("musicUrl") || "";
  const recipient = watch?.("recipient") || formData.recipient || "";
  const quote = watch?.("quote") || formData.quote || "";

    // 🎵 Spotify embed
  const getSpotifyEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("open.spotify.com/track/")) {
      return url.replace("open.spotify.com/track/", "open.spotify.com/embed/track/");
    }
    return null;
  };

  // If formData.voiceNote comes from parent (for preview), generate object URL when it changes


  // useEffect(() => {
  //   if (formData?.voiceNote instanceof Blob) {
  //     const url = URL.createObjectURL(formData.voiceNote);
  //     setAudioURL(url);

      // Cleanup to avoid memory leaks

  //     return () => URL.revokeObjectURL(url);
  //   }
  // }, [formData?.voiceNote]);

  // const handleStartRecording = async () => {
  //   setChunks([]);
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //     const recorder = new MediaRecorder(stream);

  //     recorder.ondataavailable = (e) => {
  //       if (e.data.size > 0) setChunks((prev) => [...prev, e.data]);
  //     };

  //     recorder.onstop = () => {
  //       const blob = new Blob(chunks, { type: "audio/webm" });
  //       setAudioURL(URL.createObjectURL(blob));
  //       setValue("voiceNote", blob); // Save to form
  //     };

  //     recorder.start();
  //     setMediaRecorder(recorder);
  //     setRecording(true);
  //   } catch (err) {
  //     alert("Microphone access denied or not available.");
  //   }
  // };

  // const handleStopRecording = () => {
  //   if (mediaRecorder) {
  //     mediaRecorder.stop();
  //     setRecording(false);
  //   }
  // };


  // 🎙️ Voice note recording
    const handleRecord = async () => {
      if (isRecording) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        clearInterval(recordIntervalRef.current);
        recordIntervalRef.current = null;
      } else {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
          audioChunksRef.current = [];
  
          mediaRecorder.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
          };
  
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
            const audioURL = URL.createObjectURL(audioBlob);
            setAudioUrl(audioURL);
            setValue("voiceUrl", audioURL, { shouldDirty: true });
            setValue("voiceNote", audioBlob, { shouldDirty: true });
            stream.getTracks().forEach((track) => track.stop());
          };
  
          mediaRecorder.start();
          setIsRecording(true);
          setRecordSeconds(0);
  
          recordIntervalRef.current = setInterval(() => {
            setRecordSeconds((prev) => {
              if (prev + 1 >= 120) {
                mediaRecorder.stop();
                clearInterval(recordIntervalRef.current);
                recordIntervalRef.current = null;
                setIsRecording(false);
                return 120;
              }
              return prev + 1;
            });
          }, 1000);
        } catch (error) {
          alert("Microphone access denied or unavailable.");
          console.error(error);
        }
      }
    };
  
    // 🧹 Cleanup timer when unmounting
    useEffect(() => {
      return () => {
        if (recordIntervalRef.current) {
          clearInterval(recordIntervalRef.current);
        }
      };
    }, []);
  
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      return `${mins}:${secs}`;
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
                  {/* <select id="font" {...register("font")}>
                    <option value="arial">Arial</option>
                    <option value="times">Times New Roman</option>
                    <option value="courier">Courier New</option>
                    <option value="verdana">Verdana</option>
                  </select> */}


                  <div className="fonts-inputs">
              <select
                {...register("fontFamily")}
                style={{ fontFamily: selectedFont || "inherit" }}
              >
                <option value="">Select font</option>
                {fonts.map((font) => (
                  <option
                    key={font}
                    value={font}
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </option>
                ))}
              </select>
              <select {...register("fontSize")}>
                <option value="">Size</option>
                {[
                  "12px",
                  "14px",
                  "16px",
                  "18px",
                  "20px",
                ].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
                </div>

                {/* Font Size */}
                {/* <div className="col">
                  <label htmlFor="fontSize">Font Size</label>
                  <select id="fontSize" {...register("fontSize")}>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                  </select>
                </div> */}
              </div>


              {/* Effect */}
              <div className="form-group">
                <label htmlFor="effect">Effect</label>
                <select
              {...register("effect", { required: "Please select an effect" })}
            >
              <option value="">Select an effect</option>
              <option value="confetti">🎉 Confetti</option>
              <option value="balloons">🎈 Balloons</option>
              <option value="fireworks">💥 Fireworks</option>
              <option value="petals">🌸 Petals</option>
              <option value="snow">❄️ Snow</option>
            </select>
                  {errors?.effect && (
              <span className="error-message">{errors.effect.message}</span>
            )}

              </div>

              {/* Text Color Scheme */}
              <div className="form-group">
                <label>Text Color</label>
                <div className="color-options">
                  {[
                    "#f02c2c",
                "#000000",
                "#f649cd",
                "#81fca0",
                "#55b8f1",
                "#f35b04",
                  ].map((color) => (
                    <input
                      key={color}
                      type="radio"
                      value={color}
                      {...register("textColor")}
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
                  {...register("message", {
                    required: "Message is required",
                  })}
                  placeholder="Enter Your heartfelt Message"
                  style={{
                    background: "none",
                    border: "1px solid #cccccc",
                    borderRadius: "8px",
                    height: "6rem",
                    padding: "1rem", fontFamily: selectedFont || "inherit",
                fontSize: selectedFontSize || "16px",
                color: watch("textColor") || "#000",
                  }}
                ></textarea>
                {errors?.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
              </div>

              {/* 🎵 Music */}
      <div className="form-group">
        <label>Attach music</label>
        <input
          type="text"
          placeholder="Paste Spotify URL"
          className="input-field"
          value={musicUrl}
          onChange={(e) => setValue("musicUrl", e.target.value)}
        />
        {errors?.musicUrl && <div className="error">{errors.musicUrl.message}</div>}
        {getSpotifyEmbedUrl(musicUrl) && (
          <div className="spotify-preview" style={{ marginTop: "10px" }}>
            <iframe
              src={getSpotifyEmbedUrl(musicUrl)}
              width="100%"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
              title="Spotify Preview"
            ></iframe>
          </div>
        )}
      </div>

{/* 🎙️ Voice Note */}
      <div className="form-group voice-section">
        <label>Voicenote</label>
        <div className="voice-container">
          <div className="voice-left">
            <div className="voice-icon" aria-hidden>
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
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 
                  6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 
                  0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 
                  3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </div>
            <div className="voice-text">
              <div className="bold">Add a personal voice note</div>
              <div className="muted">Max 2mins</div>
            </div>
          </div>

          {isRecording && (
            <div className="recording-visualizer">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <span className="recording-text">{formatTime(recordSeconds)}</span>
            </div>
          )}

          <button
            type="button"
            className={`record-btn ${isRecording ? "recording" : ""}`}
            onClick={handleRecord}
          >
            {isRecording ? "Stop" : "Record"}
          </button>
        </div>
        {audioUrl && (
          <div className="audio-preview" style={{ marginTop: "10px" }}>
            <audio controls src={audioUrl}></audio>
          </div>
        )}
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
