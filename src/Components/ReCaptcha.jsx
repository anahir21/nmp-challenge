import React, { useState } from "react";
import Recaptcha from "react-recaptcha";

const ReCaptchaComponent = () => {
  const [isVerified, setIsVerified] = useState(false);

  const recaptchaLoaded = () => {
    console.log("capcha successfully loaded");
  };

  const handleSubscribe = () => {
    if (isVerified) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  };

  const verifyCallback = (response) => {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  };

  return (
    <div>
      <Recaptcha
        sitekey="6LfIW8gZAAAAAAgBswhFHkciGTkVgrRcCPXjLQOv"
        render="explicit"
        onloadCallback={recaptchaLoaded}
        verifyCallback={verifyCallback}
      />
    </div>
  );
};

export default ReCaptchaComponent;
