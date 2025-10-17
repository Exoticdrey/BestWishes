import { useState } from "react";
import SlideUp from "../../ui/SlideUp";

function CardStep1({ register, errors, onNext, onBack, watch }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSendYourself, setIsSendYourself] = useState(false);

  // Watch current font selections so preview updates live
  const selectedFont = watch("fontFamily");
  const selectedFontSize = watch("fontSize");

  // Font options with live font previews
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

  return (
    <SlideUp delay={0.6}>
      <div className="schedule-container">
        <div className="form-container">
          {/* Anonymous toggle */}
          <div
            className="toggle-ro"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Send anonymously</h3>
            <label className="toggle-label">
              <div className="toggle-container">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="toggle-input"
                />
                <div className="toggle-bg"></div>
                <div className="toggle-dot"></div>
              </div>
            </label>
          </div>

          {/* Send to yourself toggle */}
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
                  onChange={() => setIsSendYourself(!isSendYourself)}
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

          {/* Sender */}
          <div className="form-group">
            <label>From (Sender name)</label>
            <input
              type="text"
              placeholder="Enter your names"
              {...register("senderName", {
                required: "Sender names are required",
              })}
              className={errors?.senderNames ? "error" : ""}
            />
            {errors?.senderNames && (
              <span className="error-message">
                {errors.senderNames.message}
              </span>
            )}
          </div>

          {/* Fonts */}
          <div className="form-group">
            <label>Fonts</label>
            <div className="fonts-inputs">
              <select {...register("fontFamily")}>
                <option value="">Select font</option>
                {fonts.map((font, index) => (
                  <option
                    key={index}
                    value={font}
                    style={{
                      fontFamily: font,
                    }}
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
                  "24px",
                  "28px",
                  "32px",
                ].map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Effect */}
          <div className="form-group">
            <label>Effect</label>
            <select {...register("effect", { required: "Please select an effect" })}>
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

          {/* Color scheme */}
          <div className="form-group">
            <label>Color Scheme</label>
            <div className="color-options">
              {[
                "#C5C5F7",
                "#9AF7F7",
                "#EEA3DD",
                "#DDF9E4",
                "#DDEBF3",
                "#FFD8C2",
              ].map((color) => (
                <input
                  key={color}
                  type="radio"
                  value={color}
                  {...register("backgroundColor")}
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
          <div className="form-group">
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
              }}
            ></textarea>
            {errors?.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div>

          {/* Next button */}
          <div style={{ textAlign: "right" }}>
            <button type="button" onClick={onNext} className="next-btn">
              Next
            </button>
          </div>
        </div>
      </div>
    </SlideUp>
  );
}

export default CardStep1;
