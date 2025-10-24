import { useState } from "react";
import SlideUp from "../../ui/SlideUp";
import "./ScheduleCard1.css";




function ScheduleStep1({  register, errors, onNext, onBack, watch, setValue }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSendYourself, setIsSendYourself] = useState(false);
    const [showAnonWarning, setShowAnonWarning] = useState(false);
    const [showOptionAlert, setShowOptionAlert] = useState(false);


  // const handleAnonymousChange = () => setIsAnonymous(!isAnonymous);
  // const handleSendYourselfChange = () => setIsSendYourself(!isSendYourself);


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
                    onChange={handleAnonymousToggle}
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
                      onChange={handleSendYourselfToggle}
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
                  type="text"
                  placeholder="Recipient name"
                  {...register("recipientName", {
                    required: "Recipient name  is required",
                  })}
                  className={errors?.recipientName ? "error" : ""}
                />
                {errors?.recipient && (
              <span className="error-message">{errors.recipientName.message}</span>
            )}
              </div>

              <div className="schedule-flex-col">
                <label>To (Recipient Email)</label>
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  {...register("recipientEmail", {
                    required: "Email is required",
                     pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  style={{ padding: "1rem 1rem" }}
                  className={errors?.recipientEmail ? "error" : ""}
                />
                {errors?.recipientEmail && (
                  <span className="error-message">
                    {errors.recipientEmail.message}
                  </span>
                )}
              </div>

              {/* Sender Name */}
              {!isAnonymous && isSendYourself && (
                <>
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
              {/* <div className="schedule-flex-col">
                <label>Schedule for ?</label>
                <input
                  type="text"
                  placeholder="1-200 people"
                  {...register("audience", { required: "Required" })}
                />
              </div> */}

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

                    

              

              {/* Button */}
              {/* <div className="schedule-form-btn">
                <button
                  type="button"
                  onClick={onNext}
                  className="schedule-next-btn"
                >
                  Next
                </button>
              </div> */}

              <div className="schedule-form-btn">
  <button
    type="button"
    onClick={() => {
      if (!isAnonymous && !isSendYourself) {
        setShowOptionAlert(true);
        return;
      }
      onNext();
    }}
    className="schedule-next-btn"
  >
    Next
  </button>
</div>

            </form>
          </div>
        </div>
      </div>

      {/* Anonymous warning modal */}
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


      {/* {showAnonWarning && (
  <div className="anon-popup">
    <div className="anon-popup-content">
      {!isAnonymous && !isSendYourself ? (
        <>
          <h3>⚠️ Choose a Sending Option</h3>
          <p>You must either send this card anonymously or send it yourself before continuing.</p>
          <div className="popup-buttons">
            <button onClick={() => setShowAnonWarning(false)} className="ok-btn">
              OK
            </button>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  </div>
)} */}

    </SlideUp>
  );
}

export default ScheduleStep1;
