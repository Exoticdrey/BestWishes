import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Referral from "../components/referral";
import Footer from "../components/Footer/Footer";
import "./ReferralPage.css"

const referrals = () => {
  return (
    <>
    <Referral/>
      <Navbar />
      <div style={{ height: "180px" }}></div>
      <div className="affiliate">
        <div className="affiliate-bar">
        <h2>Refer and Earn</h2>
      </div>

      <div className="affiliate-subtext">
        <p>If spreading love is your style, why not earn some cash while you’re at it? Join our Best Wishes program and turn every smile into some extra cash. <br /><br />

</p>
 <h4>What do you get?</h4>
        <p>1.   Earn ₦xxxx monthly every time someone sends a BestWishes Card using your unique link.</p><br />
 <p className="before">It's super easy! Share your special link with friends, family, and followers, and you'll get rewarded for every joy you help create.
Ready to join the fun and start earning? Let's make the world a better one step at a time, with BestWishes!</p>
<a href="https://app.youform.com/forms/5kjffotj" className="apply-btn">Start Now</a>
      </div>
      </div>
      
      <Footer />
    </>
  );
};

export default referrals;
