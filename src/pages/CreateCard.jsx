import Navbar from "../components/Navbar";
import SlideUp from "../ui/SlideUp";
import "./CreateCard.css";

function CreateCard() {
  return (
    <>
      <Navbar />
      <SlideUp delay={0.06}>
        <div className="create-card">
          <div className="schedule-headline">
            <h2>Schedule your Card</h2>
            <p>
              Express your emotions through personalized cards with images,
              music and a lot more features to create a special experience
            </p>
          </div>

          <div className="schedule-container">
            <div className="schedule-card">
              {/* Header */}
              <div className="card-header">
                <span className="back-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <h3>Schedule a Card</h3>
              </div>

              {/* Form */}
              <form className="form">
                {/* Timezone */}
                <label>Time Zone</label>
                <select>
                  <option>Select a Timezone</option>
                </select>

                {/* Date & Time */}
                <div className="row">
                  <div className="col">
                    <label>Date</label>
                    <input type="date" />
                  </div>
                  <div className="col">
                    <label>Time</label>
                    <input type="time" />
                  </div>
                </div>

                <div>
                  {" "}
                  <label>To (Recipient Email)</label>
                  <input type="email" defaultValue="Marypaul21@gmail.com" />
                </div>

                {/* Sender Name */}
                <div>
                  <label>From (Sender name)</label>
                  <input type="text" defaultValue="Mary Paul" />
                </div>

                {/* Schedule for */}
                <div>
                  {" "}
                  <label>Schedule for ?</label>
                  <select>
                    <option>1-200 people</option>
                  </select>
                </div>

                {/* Button */}
                <div className="form-btn">
                  <button type="submit" className="create-card-btn">
                    Proceed to Checkout
                  </button>
                </div>
              </form>

              {/* Info Box */}
              <div className="info-box">
                <strong>Schedule Info</strong>
                <p>
                  After payment, your card will be delivered at your chosen date
                  and time using the timezone selected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </>
  );
}

export default CreateCard;
