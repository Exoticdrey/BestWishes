import { useState } from "react";
import SlideUp from "../../ui/SlideUp";

function CardStep1({ register, errors, onNext, onBack }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSendYourself, setIsSendYourself] = useState(false);

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

          {/* Event type */}
          <div className="form-group">
            <label>Event Type</label>
            <select
              {...register("eventType", {
                required: "Please select an event type",
              })}
              className={errors.eventType ? "error" : ""}
            >
              <option value="">Select an event</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
              <option value="others">Others</option>
            </select>
            {errors.eventType && (
              <span className="error-message">{errors.eventType.message}</span>
            )}
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
                {[
                  "Roboto",
                  "Open Sans",
                  "Lato",
                  "Montserrat",
                  "Oswald",
                  "Raleway",
                ].map((font, index) => (
                  <option key={index} value={font}>
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

          <div className="form-group">
            <label>Effect</label>
            <input type="text" {...register("effect")} />
          </div>

          {/* Color scheme */}
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
