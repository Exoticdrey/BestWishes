

import { useState } from "react";
import SlideUp from "../../ui/SlideUp";
import "./CardStep1.css";


function CardStep1({ register, errors, onNext, onBack, watch, setValue }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSendYourself, setIsSendYourself] = useState(false);
  const [showAnonWarning, setShowAnonWarning] = useState(false);
      const [showOptionAlert, setShowOptionAlert] = useState(false);

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

  const handleAnonymousToggle = () => {
    if (!isAnonymous) {
      setShowAnonWarning(true);
    } else {
      setIsAnonymous(false);
    }
  };

  const handleAnonConfirm = () => {
    setShowAnonWarning(false);
    setIsAnonymous(true);
    setIsSendYourself(false);
    setValue("senderName", "");
    setValue("senderEmail", "");
  };

  const handleAnonCancel = () => {
    setShowAnonWarning(false);
    setIsAnonymous(false);
  };

  const handleSendYourselfToggle = () => {
    const nextState = !isSendYourself;
    setIsSendYourself(nextState);
    if (nextState) {
      setIsAnonymous(false);
    }
  };

  return (
    <SlideUp delay={0.6}>
      <div className="schedule-container">
        <div className="form-container">
          {/* Send Anonymously */}
          <div
            className="toggle-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Send Anonymously</h3>
            <label className="toggle-label">
              <div className="toggle-container">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={handleAnonymousToggle}
                  className="toggle-input"
                />
                <div className="toggle-bg"></div>
                <div className="toggle-dot"></div>
              </div>
            </label>
          </div>

          {/* Send Yourself */}
          <div
            className="toggle-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3>Send Yourself</h3>
            <label className="toggle-label">
              <div className="toggle-container">
                <input
                  type="checkbox"
                  checked={isSendYourself}
                  onChange={handleSendYourselfToggle}
                  className="toggle-input"
                />
                <div className="toggle-bg"></div>
                <div className="toggle-dot"></div>
              </div>
            </label>
          </div>

          {/* Recipient */}
          <div className="form-group">
            <label>To (Recipient name)</label>
            <input
              type="text"
              placeholder="Enter recipient name"
              {...register("recipient", {
                required: "Recipient name is required",
              })}
              className={errors?.recipient ? "error" : ""}
            />
            {errors?.recipient && (
              <span className="error-message">{errors.recipient.message}</span>
            )}
          </div>

          {/* Recipient Email */}
          <div className="form-group">
            <label>Recipient Email</label>
            <input
              type="email"
              placeholder="Enter recipient email"
              {...register("recipientEmail", {
                required: "Recipient email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className={errors?.recipientEmail ? "error" : ""}
            />
            {errors?.recipientEmail && (
              <span className="error-message">
                {errors.recipientEmail.message}
              </span>
            )}
          </div>

          {/* Sender */}
          {!isAnonymous && isSendYourself && (
            <>
              <div className="form-group">
                <label>From (Sender name)</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("senderName", {
                    required: "Sender name is required",
                  })}
                  className={errors?.senderName ? "error" : ""}
                />
                {errors?.senderName && (
                  <span className="error-message">
                    {errors.senderName.message}
                  </span>
                )}
              </div>

              {/* Sender Email */}
              <div className="form-group">
                <label>Sender Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("senderEmail", {
                    required: "Sender email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className={errors?.senderEmail ? "error" : ""}
                />
                {errors?.senderEmail && (
                  <span className="error-message">
                    {errors.senderEmail.message}
                  </span>
                )}
              </div>
            </>
          )}

          {/* Fonts */}
          <div className="form-group">
            <label>Fonts</label>
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
                ].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Effect */}
          <div className="form-group">
            <label>Effect</label>
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

          {/* Text Color */}
          <div className="form-group">
            <label>Text Color</label>
            <div className="color-options">
              {[
                "#f02c2c",
                "#000000",
                "#f649cd",
                "#17a53b",
                "#27a9f5",
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

          {/* Message */}
          {/* <div className="form-group">
            <label>Your heartfelt Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Enter your heartfelt message"
              style={{
                background: "none",
                border: "1px solid #cccccc",
                borderRadius: "8px",
                height: "6rem",
                padding: "1rem",
                fontFamily: selectedFont || "inherit",
                fontSize: selectedFontSize || "16px",
                color: watch("textColor") || "#000",
              }}
            ></textarea>
            {errors?.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div> */}


          {/* Message */}
<div className="form-group">
  <label>Your heartfelt Message</label>
  <textarea
    {...register("message", {
      required: "Message is required",
      validate: (value) => {
        const words = value.trim().split(/\s+/).filter(Boolean);
        if (words.length < 25) return "Your message must be at least 25 words.";
        if (words.length > 60) return "Your message cannot exceed 60 words.";
        return true;
      },
    })}
    onInput={(e) => {
      const words = e.target.value.trim().split(/\s+/).filter(Boolean);
      if (words.length > 60) {
        e.target.value = words.slice(0, 60).join(" ");
      }
    }}
    placeholder="Enter your heartfelt message"
    style={{
      background: "none",
      border: "1px solid #cccccc",
      borderRadius: "8px",
      height: "6rem",
      padding: "1rem",
      fontFamily: selectedFont || "inherit",
      fontSize: selectedFontSize || "16px",
      color: watch("textColor") || "#000",
    }}
  ></textarea>
  <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
    {watch("message")
      ? `${watch("message").trim().split(/\s+/).filter(Boolean).length} / 60 words`
      : "0 / 60 words"}
  </p>
  {errors?.message && (
    <span className="error-message">{errors.message.message}</span>
  )}
</div>


          {/* Next */}
          {/* <div style={{ textAlign: "right" }}>
            <button type="button" onClick={onNext} className="next-btn">
              Next
            </button>
          </div> */}

                <div style={{ textAlign: "right" }}>
  <button
    type="button"
    onClick={() => {
      if (!isAnonymous && !isSendYourself) {
        setShowOptionAlert(true);
        return;
      }
      onNext();
    }}
    className="next-btn"
  >
    Next
  </button>
</div>

        </div>
      </div>

      {/* Anonymous warning modal */}
      {/* {showAnonWarning && (
        <div className="anon-popup">
          <div className="anon-popup-content">
            <h3>⚠️ Send Anonymously?</h3>
            <p>
              If you send anonymously, your name and email will not appear
              anywhere on the card. The recipient won’t know who sent it.
            </p>
            <div className="popup-buttons">
              <button onClick={handleAnonCancel} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleAnonConfirm} className="ok-btn">
                OK
              </button>
            </div>
          </div>
        </div>
      )} */}

{showAnonWarning && (
        <div className="anon-popup">
          <div className="anon-popup-content">
            <h3>⚠️ Send Anonymously?</h3>
            <p>
              If you send anonymously, your name and email will not appear
              anywhere on the card. The recipient won’t know who sent it.
            </p>
            <div className="popup-buttons">
              <button onClick={handleAnonCancel} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleAnonConfirm} className="ok-btn">
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Choose Option Warning Modal */}
{showOptionAlert && (
  <div className="anon-popup">
    <div className="anon-popup-content">
      <h3>⚠️ Choose a Sending Option</h3>
      <p>You must either send this card anonymously or send it yourself before continuing.</p>
      <div className="popup-buttons">
        <button onClick={() => setShowOptionAlert(false)} className="ok-btn">
          OK
        </button>
      </div>
    </div>
  </div>
)}



    </SlideUp>
  );
}

export default CardStep1;
