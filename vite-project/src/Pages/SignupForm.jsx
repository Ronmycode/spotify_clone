import SsoLinks from "../Components/SsoLinks.jsx";
import "../Components/SsoLinks.css";
import "../Components/SignUpEmailAddress.css";
import "../Components/SsoLInks.css";
import "./SignupForm.css";
import React, { useState } from "react";

/* 1st form */
function Form1({ onComplete }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onComplete(); // Move to the next form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <div className="SignUpBanner">
        <p>
          Sign up to
          <br />
          start listening
        </p>
      </div>
      <p>Email Address</p>
      <input
        type="email"
        value={inputValue}
        name="Email Address"
        id="Email"
        placeholder="name@domain.com"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="submit" className="btn">
        Next
      </button>

      <SsoLinks />
    </form>
  );
}

/* 2nd Form */
function Form2({ onComplete }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onComplete(); // Move to the next form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <p>Password</p>
      <input
        type="password"
        value={inputValue}
        name="Password"
        id="Password"
        placeholder=""
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <div>
        <p>Your password must contain at least</p>
      </div>
      <button type="submit" className="btn">
        Next
      </button>
    </form>
  );
}

/* 3rd Form */
function Form3({ onComplete }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onComplete(); // Complete the form submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <p>Name</p>
      <span>This Name will appear on your profile</span>
      <input
        type="text"
        value={inputValue}
        name="text"
        id="Name"
        placeholder=""
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <div className="">
        <p>Date of birth</p>
        <span>Why do we need you date of birth?</span>
        <a href="http://">Learn more</a>
        <div className="DOB">
          {/* days */}
          <input
            className="days"
            type="text"
            value={inputValue}
            name="text"
            id="day"
            placeholder="dd"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>

          {/* Months */}
          <input
            className="monts"
            type="text"
            value={inputValue}
            name="text"
            id="month"
            placeholder="Month"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>

          {/* Years */}
          <input
            className="years"
            type="text"
            value={inputValue}
            name="text"
            id="year"
            placeholder="yyyy"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>

        {/* Gender */}
        <p>Gender</p>
        <span>
          We use your gender to help personalize our content recommendations and
          ads for you.
        </span>
        {/* male */}
        <div className="Gender_top">
          <div className="Gender">
            <input
              className="gender"
              type="radio"
              value={inputValue}
              name="Man"
              id="Man"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <label htmlFor="Man">Man</label>
          </div>
          {/* Woman */}
          <div className="Gender">
            <input
              className="gender"
              type="radio"
              value={inputValue}
              name="Woman"
              id="Woman"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <label htmlFor="Woman">Woman</label>
          </div>
          {/* Non-binary */}
          <div className="Gender">
            <input
              className="gender"
              type="radio"
              value={inputValue}
              name="Non-binary"
              id="Non-binary"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <label htmlFor="Non-binary">Non-binary</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn">
        Next
      </button>
    </form>
  );
}
// ###########Progress bar function
/* function ProgressBar({ currentForm, totalForms }) {
  const progressPercentage = (currentForm / totalForms) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
} */

function SignupForm() {
  const [currentForm, setCurrentForm] = useState(1);
  //const totalForms = 3; //Total number of form stages

  const goToNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  return (
    <div className="App">
      <img
        className="SignUpBanner"
        src="https://res.cloudinary.com/dymsokiwr/image/upload/v1728534949/spotify-white-icon_wlcipw.svg"
        alt="Logo"
      ></img>

      {/* #####Progress Bar call###########
      <ProgressBar currentForm={currentForm} totalForms={totalForms} />
      #####################*/}
      {currentForm === 1 && <Form1 onComplete={goToNextForm} />}
      {currentForm === 2 && <Form2 onComplete={goToNextForm} />}
      {currentForm === 3 && (
        <Form3 onComplete={() => alert("Form submission complete!")} />
      )}

      <footer className="policy">
        <p>
          {"This site is protected by reCAPTCHA and the Google "}
          <br></br>
          <a href="#">{"Privacy Policy "}</a>
          <a href="https://policies.google.com/terms">{"Terms of Service "}</a>
          apply
        </p>
      </footer>
    </div>
  );
}

/* function SignupForm() {
  return (
    <div>
      <SignUpEmailAddress />
      <SsoLinks />
    </div>
  );
}
 */
export default SignupForm;
