// import React, { useRef, useState, useCallback } from "react";
// import "./CardStep2.css";

// function CardStep2({ register, errors, setValue, watch, formData = {}, onNext, onBack }) {
//   const fileInputRef = useRef(null);
//   const [previewName, setPreviewName] = useState(formData.image?.name || "");
//   const [previewUrl, setPreviewUrl] = useState(formData.imageUrl || "");
//   const [dragActive, setDragActive] = useState(false);

//   // 🎙️ Voice Recording States
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioUrl, setAudioUrl] = useState(formData.voiceUrl || null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   // ✅ Watch values
//   const selectedFont = watch?.("fontFamily");
//   const selectedFontSize = watch?.("fontSize");
//   const musicUrl = watch?.("musicUrl") || "";
//   const recipient = watch?.("recipient") || formData.recipient || "";
//   const quote = watch?.("quote") || formData.quote || "";

//   // 🖼️ Handle image uploads
//   const handleFiles = useCallback(
//     (files) => {
//       if (!files || files.length === 0) return;
//       const file = files[0];
//       if (typeof setValue === "function") {
//         setValue("image", file, { shouldDirty: true, shouldTouch: true });
//         const fileUrl = URL.createObjectURL(file);
//         setValue("imageUrl", fileUrl, { shouldDirty: true });
//         setPreviewUrl(fileUrl);
//       }
//       setPreviewName(file.name);
//     },
//     [setValue]
//   );

//   const onDrop = (e) => {
//     e.preventDefault();
//     setDragActive(false);
//     handleFiles(e.dataTransfer.files);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//     setDragActive(true);
//   };

//   const onDragLeave = (e) => {
//     e.preventDefault();
//     setDragActive(false);
//   };

//   const onFileChange = (e) => {
//     handleFiles(e.target.files);
//   };

//   // 🎵 Spotify embed
//   const getSpotifyEmbedUrl = (url) => {
//     if (!url) return null;
//     if (url.includes("open.spotify.com/track/")) {
//       return url.replace("open.spotify.com/track/", "open.spotify.com/embed/track/");
//     }
//     return null;
//   };

//   // 🎙️ Voice note recording
//   const handleRecord = async () => {
//     if (isRecording) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     } else {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         const mediaRecorder = new MediaRecorder(stream);
//         mediaRecorderRef.current = mediaRecorder;
//         audioChunksRef.current = [];

//         mediaRecorder.ondataavailable = (event) => {
//           audioChunksRef.current.push(event.data);
//         };

//         mediaRecorder.onstop = () => {
//           const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//           const audioURL = URL.createObjectURL(audioBlob);
//           setAudioUrl(audioURL);
//           setValue("voiceUrl", audioURL, { shouldDirty: true });
//           setValue("voiceNote", audioBlob, { shouldDirty: true });
//         };

//         mediaRecorder.start();
//         setIsRecording(true);
//       } catch (error) {
//         alert("Microphone access denied or unavailable.");
//         console.error(error);
//       }
//     }
//   };

//   const imageReg = register ? register("image") : {};

//   return (
//     <div className="media-step">
//       {/* 🔙 Back Button */}
//       <button
//         type="button"
//         className="back-btns"
//         onClick={onBack}
//         aria-label="Back"
//         style={{ display: "flex", alignItems: "center" }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="icon"
//           style={{ width: "2rem" }}
//         >
//           <path
//             fillRule="evenodd"
//             d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <strong className="step-title">Details</strong>
//       </button>

//       {/* 🎵 Music */}
//       <div className="form-group">
//         <label>Attach music</label>
//         <input
//           type="text"
//           placeholder="Paste Spotify URL"
//           className="input-field"
//           value={musicUrl}
//           onChange={(e) => setValue("musicUrl", e.target.value)}
//         />
//         {errors?.musicUrl && <div className="error">{errors.musicUrl.message}</div>}
//         {getSpotifyEmbedUrl(musicUrl) && (
//           <div className="spotify-preview" style={{ marginTop: "10px" }}>
//             <iframe
//               src={getSpotifyEmbedUrl(musicUrl)}
//               width="100%"
//               height="80"
//               frameBorder="0"
//               allow="encrypted-media"
//               title="Spotify Preview"
//             ></iframe>
//           </div>
//         )}
//       </div>

//       {/* 🎙️ Voice Note */}
//       <div className="form-group voice-section">
//         <label>Voicenote</label>
//         <div className="voice-container">
//           <div className="voice-left">
//             <div className="voice-icon" aria-hidden>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 style={{ width: "2rem" }}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
//                 />
//               </svg>
//             </div>
//             <div className="voice-text">
//               <div className="bold">Add a personal voice note</div>
//               <div className="muted">Max 2mins</div>
//             </div>
//           </div>

//           {isRecording && (
//             <div className="recording-visualizer">
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <span className="recording-text">Recording...</span>
//             </div>
//           )}

//           <button
//             type="button"
//             className={`record-btn ${isRecording ? "recording" : ""}`}
//             onClick={handleRecord}
//           >
//             {isRecording ? "Stop" : "Record"}
//           </button>
//         </div>
//         {audioUrl && (
//           <div className="audio-preview" style={{ marginTop: "10px" }}>
//             <audio controls src={audioUrl}></audio>
//           </div>
//         )}
//       </div>

//       {/* 🖼️ Image */}
//       <div className="form-group">
//         <label>Add Image</label>
//         <div
//           className={`image-dropzone ${dragActive ? "drag-active" : ""}`}
//           onDragOver={onDragOver}
//           onDragLeave={onDragLeave}
//           onDrop={onDrop}
//           onClick={() => fileInputRef.current?.click()}
//           role="button"
//           tabIndex={0}
//         >
//           <div className="image-icon" aria-hidden>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               style={{ width: "2rem" }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 
//                  1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 
//                  2.909m-18 3.75h16.5a1.5 1.5 0 0 0 
//                  1.5-1.5V6a1.5 1.5 0 0 0-1.5-
//                  1.5H3.75A1.5 1.5 0 0 0 
//                  2.25 6v12a1.5 1.5 0 0 0 
//                  1.5 1.5Z"
//               />
//             </svg>
//           </div>
//           <p className="image-text">
//             Drag and drop your image here
//             <br />
//             <span className="muted">Support JPEG, PNG, GIF Max (5MB)</span>
//           </p>
//           <button
//             type="button"
//             className="browse-btn"
//             onClick={(e) => {
//               e.stopPropagation();
//               fileInputRef.current?.click();
//             }}
//           >
//             Browse Files
//           </button>
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden-file-input"
//             {...imageReg}
//             ref={(e) => {
//               if (imageReg?.ref) imageReg.ref(e);
//               fileInputRef.current = e;
//             }}
//             onChange={(e) => {
//               imageReg?.onChange?.(e);
//               onFileChange(e);
//             }}
//           />
//           {previewUrl && (
//             <div className="image-preview">
//               <img
//                 src={previewUrl}
//                 alt="Preview"
//                 style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
//               />
//             </div>
//           )}
//         </div>
//         {errors?.image && <div className="error">{errors.image.message}</div>}
//       </div>

//       {/* ✍️ Recipient */}
//       <div className="form-group">
//         <label>Recipient Name</label>
//         <input
//           type="text"
//           placeholder="Enter recipient name"
//           className="input-field"
//           value={recipient}
//           onChange={(e) => setValue("recipient", e.target.value)}
//           style={{
//             fontFamily: selectedFont || "inherit",
//             fontSize: selectedFontSize || "16px",
//           }}
//         />
//       </div>

//       {/* ✍️ Quote */}
//       <div className="form-group">
//         <label>Add Favorite Quote</label>
//         <input
//           type="text"
//           placeholder="Enter quote"
//           className="input-field"
//           value={quote}
//           onChange={(e) => setValue("quote", e.target.value)}
//           style={{
//             fontFamily: selectedFont || "inherit",
//             fontSize: selectedFontSize || "16px",
//           }}
//         />
//       </div>

//       {/* Actions */}
//       <div className="form-actios" style={{ textAlign: "right" }}>
//         <button type="button" className="next-btn" onClick={onNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CardStep2;


import React, { useRef, useState, useCallback, useEffect } from "react";
import "./CardStep2.css";

function CardStep2({ register, errors, setValue, watch, formData = {}, onNext, onBack }) {
  const fileInputRef = useRef(null);
  const [previewName, setPreviewName] = useState(formData.image?.name || "");
  const [previewUrl, setPreviewUrl] = useState(formData.imageUrl || "");
  const [dragActive, setDragActive] = useState(false);

  // 🎙️ Voice Recording States
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(formData.voiceUrl || null);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recordIntervalRef = useRef(null);

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

  // 🎵 Spotify embed
  const getSpotifyEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("open.spotify.com/track/")) {
      return url.replace("open.spotify.com/track/", "open.spotify.com/embed/track/");
    }
    return null;
  };

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

  const imageReg = register ? register("image") : {};

  return (
    <div className="media-step">
      {/* 🔙 Back Button */}
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
            fillRule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        <strong className="step-title">Details</strong>
      </button>

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

      {/* 🖼️ Image */}
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

      {/* ✍️ Recipient */}
      <div className="form-group">
        <label>Recipient Name</label>
        <input
          type="text"
          placeholder="Enter recipient name"
          className="input-field"
          value={recipient}
          onChange={(e) => setValue("recipient", e.target.value)}
          style={{
            fontFamily: selectedFont || "inherit",
            fontSize: selectedFontSize || "16px",
          }}
        />
      </div>

      {/* ✍️ nickname */}
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
