import SlideUp from "../ui/SlideUp";
import "./GetStarted.css";

function GetStarted() {
  return (
    <SlideUp delay={0.06}>
      {" "}
      <div className="get-started-container">
        <div className="get-started">
          <h1 className="title">Let’s Get You Started</h1>
          <p className="subtitle">
            Please select the option that best describes you to continue...
          </p>

          <div className="options">
            {/* Gifter */}
            <div className="card card-gifter">
              <div className="icon gifter-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <h2 className="card-title">Gifter</h2>
              <p className="card-text">
                Find unique gifts for the people you care about
              </p>
              <div className="links">
                <a href="#">Browse Gifts</a>
                <a href="#">Easy Checkouts</a>
              </div>
              <button className="btn ">Sign up as a Gifter</button>
            </div>

            {/* Vendor */}
            <div className="card card-vendor">
              <div className="icon">🛍️</div>
              <h2 className="card-title">Vendor</h2>
              <p className="card-text">
                Sell your products and service to customers looking for the
                Perfect Gift
              </p>
              <div className="links">
                <a href="#">Track Orders</a>
                <a href="#">Grow Business</a>
              </div>
              <button className="btn">Sign up as a vendor</button>
            </div>
          </div>

          <p className="signin">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>{" "}
    </SlideUp>
  );
}

export default GetStarted;
