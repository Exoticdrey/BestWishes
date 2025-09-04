import { useState } from "react";
import SlideUp from "../../ui/SlideUp";
import "./ScheduleCard1.css";
function ScheduleStep1({ register, onNext }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSendYourself, setIsSendYourself] = useState(false);

  const handleAnonymousChange = () => setIsAnonymous(!isAnonymous);
  const handleSendYourselfChange = () => setIsSendYourself(!isSendYourself);

  return (
    <SlideUp delay={0.06}>
      <div className="schedule-card-section">
        <div className="schedule-container">
          <div className="schedule-card">
            {/* Toggle */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.3rem",
              }}
            >
              <h3>Send anonymously</h3>

              <label className="toggle-label">
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={handleAnonymousChange}
                    className="toggle-input"
                  />
                  <div className="toggle-bg"></div>
                  <div className="toggle-dot"></div>
                </div>
              </label>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "3rem",
                }}
              >
                <h3>Send Yourself</h3>
                <label className="toggle-label">
                  <div className="toggle-container">
                    <input
                      type="checkbox"
                      checked={isSendYourself}
                      onChange={handleSendYourselfChange}
                      className="toggle-input"
                    />
                    <div className="toggle-bg"></div>
                    <div className="toggle-dot"> </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Header */}
            <div
              className="schedule-card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                marginBottom: "1rem",
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
              <h4>Basic Information</h4>
            </div>

            {/* Form-like content (no actual <form> to avoid nesting) */}
            <form className="schedule-form">
              <div className="schedule-flex-col">
                <label>To (Recipient Name)</label>
                <input
                  type="email"
                  placeholder="Recipient name"
                  {...register("recipientName", {
                    required: "Recipient name  is required",
                  })}
                />
              </div>

              {/* Sender Name */}
              <div className="schedule-flex-col">
                <label>From (Sender name)</label>
                <input
                  type="text"
                  {...register("senderName", {
                    required: "Sender name is required",
                  })}
                  placeholder="Adebayo Israel"
                />
              </div>

              <div className="schedule-flex-col">
                <label>Time Zone</label>
                <select
                  {...register("timezone", {
                    required: "Timezone is required",
                  })}
                >
                  <option value="">Select a Timezone</option>
                  <option value="Africa/Lagos">(UTC+01:00) Africa/Lagos</option>
                  <option value="UTC">(UTC+00:00) UTC</option>
                  <option value="America/New_York">(UTC−05:00) New York</option>
                  <option value="Europe/London">(UTC+00:00) London</option>
                </select>
              </div>

              {/* Schedule for */}
              <div className="schedule-flex-col">
                <label>Schedule for ?</label>
                <input
                  type="text"
                  placeholder="1-200 people"
                  {...register("audience", { required: "Required" })}
                />
              </div>

              {/* Date & Time */}
              <div className="row">
                <div className="col">
                  <label>Date</label>
                  <input
                    type="date"
                    {...register("scheduleDate", {
                      required: "Date is required",
                    })}
                  />
                </div>
                <div className="col">
                  <label>Time</label>
                  <input
                    type="time"
                    {...register("scheduleTime", {
                      required: "Time is required",
                    })}
                  />
                </div>
              </div>

              <div className="schedule-flex-col">
                <label>To (Recipient Email)</label>
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  {...register("recipientEmail", {
                    required: "Email is required",
                  })}
                  style={{ padding: "2rem 1rem" }}
                />
              </div>

              {/* Button */}
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

export default ScheduleStep1;
