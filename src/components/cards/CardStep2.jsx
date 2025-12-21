


// import React, { useRef, useState, useCallback, useEffect } from "react";
// import "./CardStep2.css";

// function CardStep2({ register, errors, setValue, watch, formData = {}, onNext, onBack }) {
//   const fileInputRef = useRef(null);
//   const [previewName, setPreviewName] = useState(formData.image?.name || "");
//   const [previewUrl, setPreviewUrl] = useState(formData.imageUrl || "");
//   const [dragActive, setDragActive] = useState(false);

//   // 🎙️ Voice Recording States
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioUrl, setAudioUrl] = useState(formData.voiceUrl || null);
//   const [recordSeconds, setRecordSeconds] = useState(0);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);
//   const recordIntervalRef = useRef(null);

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
//       clearInterval(recordIntervalRef.current);
//       recordIntervalRef.current = null;
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
//           stream.getTracks().forEach((track) => track.stop());
//         };

//         mediaRecorder.start();
//         setIsRecording(true);
//         setRecordSeconds(0);

//         recordIntervalRef.current = setInterval(() => {
//           setRecordSeconds((prev) => {
//             if (prev + 1 >= 120) {
//               mediaRecorder.stop();
//               clearInterval(recordIntervalRef.current);
//               recordIntervalRef.current = null;
//               setIsRecording(false);
//               return 120;
//             }
//             return prev + 1;
//           });
//         }, 1000);
//       } catch (error) {
//         alert("Microphone access denied or unavailable.");
//         console.error(error);
//       }
//     }
//   };

//   // 🧹 Cleanup timer when unmounting
//   useEffect(() => {
//     return () => {
//       if (recordIntervalRef.current) {
//         clearInterval(recordIntervalRef.current);
//       }
//     };
//   }, []);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//       .toString()
//       .padStart(2, "0");
//     const secs = (seconds % 60).toString().padStart(2, "0");
//     return `${mins}:${secs}`;
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
//                   d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 
//                   6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 
//                   0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 
//                   3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
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
//               <span className="recording-text">{formatTime(recordSeconds)}</span>
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
//                 d="m2.25 15.75 5.159-5.159a2.25 
//                 2.25 0 0 1 3.182 0l5.159 
//                 5.159m-1.5-1.5 1.409-1.409a2.25 
//                 2.25 0 0 1 3.182 0l2.909 
//                 2.909m-18 3.75h16.5a1.5 1.5 
//                 0 0 0 1.5-1.5V6a1.5 1.5 
//                 0 0 0-1.5-1.5H3.75A1.5 
//                 1.5 0 0 0 2.25 6v12a1.5 
//                 1.5 0 0 0 1.5 1.5Z"
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

//       {/* ✍️ nickname */}
//       <div className="form-group">
//         <label>Add Sweet Nickname</label>
//         <input
//           type="text"
//           placeholder="Enter nickname"
//           className="input-field"
//           value={quote}
//           onChange={(e) => setValue("quote", e.target.value)}
//           style={{
//             fontFamily: selectedFont || "inherit",
//             fontSize: selectedFontSize || "16px",
//             color: watch("textColor") || "#000",
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
import Cropper from "react-easy-crop";
import "./CardStep2.css";

/**
 * IMPORTANT:
 * - This keeps your original component completely intact and only injects cropping modal logic.
 * - No external helper files required (getCroppedImg is implemented here).
 */

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

  // Cropper states (injected)
  const [cropMode, setCropMode] = useState(false); // show/hide crop modal
  const [rawImage, setRawImage] = useState(null); // raw image URL from file input (for cropper)
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // 🖼️ Handle image uploads (keeps your original handleFiles logic but opens cropper)
  const handleFiles = useCallback(
    (files) => {
      if (!files || files.length === 0) return;
      const file = files[0];

      // store the name for later File creation
      setPreviewName(file.name || previewName);

      // create URL for cropper and open crop modal
      const fileUrl = URL.createObjectURL(file);
      setRawImage(fileUrl);
      setCropMode(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // your existing drop/drag handlers
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

  // original onFileChange wrapper
  const onFileChange = (e) => {
    handleFiles(e.target.files);
  };

  // 🎵 Spotify embed (unchanged)
  const getSpotifyEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("open.spotify.com/track/")) {
      return url.replace("open.spotify.com/track/", "open.spotify.com/embed/track/");
    }
    return null;
  };

  // 🎙️ Voice note recording (kept as-is, only minor lint safety)
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

        // mediaRecorder.onstop = () => {
        //   const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp4" });
        //   const audioURL = URL.createObjectURL(audioBlob);
        //   setAudioUrl(audioURL);
        //   if (typeof setValue === "function") {
        //     setValue("voiceUrl", audioURL, { shouldDirty: true });
        //     setValue("voiceNote", audioBlob, { shouldDirty: true });
        //   }
        //   stream.getTracks().forEach((track) => track.stop());
        // };


        mediaRecorder.onstop = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const blobType = isIOS ? "audio/mp4" : "audio/webm";

  const audioBlob = new Blob(audioChunksRef.current, { type: blobType });
  const audioURL = URL.createObjectURL(audioBlob);

  setAudioUrl(audioURL);
  if (typeof setValue === "function") {
    setValue("voiceUrl", audioURL, { shouldDirty: true });
    setValue("voiceNote", audioBlob, { shouldDirty: true });
  }

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

  // cleanup
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

  // -----------------------
  // Cropping helper (inside the file so nothing else needed)
  // -----------------------
  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = url;
    });

  const getCroppedImg = async (imageSrc, pixelCrop) => {
    if (!pixelCrop || !imageSrc) return null;
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(pixelCrop.width);
    canvas.height = Math.round(pixelCrop.height);
    const ctx = canvas.getContext("2d");

    // draw the cropped image onto the canvas
    ctx.drawImage(
      image,
      Math.round(pixelCrop.x),
      Math.round(pixelCrop.y),
      Math.round(pixelCrop.width),
      Math.round(pixelCrop.height),
      0,
      0,
      Math.round(pixelCrop.width),
      Math.round(pixelCrop.height)
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        // create file-like object to keep parity with your original flow
        const file = new File([blob], previewName || "cropped.jpeg", { type: blob.type });
        const url = URL.createObjectURL(blob);
        resolve({ file, url });
      }, "image/jpeg", 0.92);
    });
  };

  // called by Cropper on complete
  const onCropComplete = useCallback((croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  // Save crop: produce file and set values exactly like original handleFiles would
  const handleCropSave = useCallback(async () => {
    try {
      if (!croppedAreaPixels) {
        // if user hasn't moved/zoomed, just accept rawImage as is
        // convert rawImage URL into a file using fetch -> blob
        const res = await fetch(rawImage);
        const blob = await res.blob();
        const file = new File([blob], previewName || "image.jpeg", { type: blob.type });
        if (typeof setValue === "function") {
          setValue("image", file, { shouldDirty: true, shouldTouch: true });
          setValue("imageUrl", rawImage, { shouldDirty: true });
        }
        setPreviewUrl(rawImage);
        setRawImage(null);
        setCropMode(false);
        return;
      }

      const { file, url } = await getCroppedImg(rawImage, croppedAreaPixels);

      // set the preview and set form values exactly like your original handleFiles did
      setPreviewUrl(url);
      if (typeof setValue === "function") {
        setValue("image", file, { shouldDirty: true, shouldTouch: true });
        setValue("imageUrl", url, { shouldDirty: true });
      }

      // cleanup
      setRawImage(null);
      setCropMode(false);
    } catch (err) {
      console.error("Failed to crop image", err);
      alert("Failed to crop image. Try another image.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawImage, croppedAreaPixels, previewName, setValue]);

  // Cancel crop: close modal, revoke raw url
  const handleCropCancel = useCallback(() => {
    if (rawImage) {
      // revoke URL to avoid memory leak
      try {
        URL.revokeObjectURL(rawImage);
      } catch (e) {}
    }
    setRawImage(null);
    setCropMode(false);
  }, [rawImage]);

  // If the user already has a previewUrl from formData initially, keep it
  useEffect(() => {
    if (formData.imageUrl && !previewUrl) {
      setPreviewUrl(formData.imageUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --------------------------------
  // Render (kept your exact structure; only added crop modal block)
  // --------------------------------
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
            <audio controls src={audioUrl} preload="metadata"></audio>
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

      {/* Crop modal (keeps your styling; you can style .crop-modal in your CSS) */}
      {cropMode && (
        <div className="crop-modal">
          <div className="crop-container">
            <div className="crop-area" style={{ position: "relative", width: "100%", height: 360 }}>
              <Cropper
                image={rawImage}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                showGrid={false}
              />
            </div>

            <div className="crop-controls" style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 12 }}>
              <input
                type="range"
                min={1}
                max={3}
                step={0.05}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                aria-label="Zoom"
              />
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button type="button" className="cancel-btn" onClick={handleCropCancel}>
                  Cancel
                </button>
                <button type="button" className="save-btn" onClick={handleCropSave}>
                  Save Crop
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
