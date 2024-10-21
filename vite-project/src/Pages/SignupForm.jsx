import SsoLinks from "../Components/SsoLinks.jsx";
import "../Components/SsoLinks.css";
import "../Components/SignUpEmailAddress.css";
import "../Components/SsoLInks.css";
import "./SignupForm.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* 1st form */
function Form1({ onComplete }) {
  const {
    register, // To register inputs for tracking
    handleSubmit, // To handle form submission
    formState: { errors }, // To track validation errors
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onComplete(); // Move to the next form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
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
        placeholder="name@domain.com"
        id="Email"
        // Use the register function to register this input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="error">
          <i class="fa-solid fa-circle-exclamation"></i>
          {errors.email.message}
        </p>
      )}{" "}
      {/* Display error message if any */}
      <button type="submit" className="btn">
        Next
      </button>
      <SsoLinks />
    </form>
  );
}

/* 2nd Form */
function Form2({ onComplete, currentForm, totalForms, formName }) {
  const {
    register, // To register inputs for tracking
    handleSubmit, // To handle form submission
    formState: { errors }, // To track validation errors
  } = useForm();

  const Form2_indication = "Create a password"; //This is the indication that shows under the progress bar for user

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onComplete(); // Move to the next form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
      <ProgressBar
        currentForm={currentForm}
        totalForms={totalForms}
        formName={Form2_indication}
      />
      <p>Password</p>
      <input
        name="Password"
        id="Password"
        placeholder="Enter your password"
        type="password"
        {...register("Password", {
          required: "Password is required",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*[0-9\W]).{10,}$/,
            message:
              "Password must contain at least 1 letter 1 number or special character, and be at least 10 characters long",
          },
        })}
      />
      {errors.Password && (
        <div className="error">
          <p>
            <i class="fa-solid fa-circle-exclamation"></i>
            {errors.Password.message}
          </p>
        </div>
      )}
      <button type="submit" className="btn">
        Next
      </button>
    </form>
  );
}

/* 3rd Form */
function Form3({ onComplete, currentForm, totalForms, formName }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Form3_indication = "Tell us about yourself"; //direction to user

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    onComplete(); // Complete the form submission
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
      <ProgressBar
        currentForm={currentForm}
        totalForms={totalForms}
        formName={Form3_indication}
      />
      <p className="Form-title">
        Name <br />
        <span className="Form-subtitle">
          This Name will appear on your profile
        </span>
      </p>

      <input
        className="name"
        //value={inputValue}
        type="text"
        {...register("name", { required: "Name is required" })}
        id="Name"
        placeholder="Enter your name"
      />
      {errors.name && (
        <span className="error">
          <i className="fa-solid fa-circle-exclamation"></i>
          {errors.name.message}
        </span>
      )}

      <div className="Gender-section">
        <p className="Form-title">
          Date of birth <br />
          <span className="Form-subtitle">
            Why do we need you date of birth? <a href="http://">Learn more</a>
          </span>
        </p>
        {/* days */}
        <div className="DOB">
          <input
            className="days"
            type="number"
            {...register("day", {
              required: "Day is required",
              min: { value: 1, message: "Day must be at least 1" },
              max: { value: 31, message: "Day cannot be more than 31" },
            })}
            placeholder="dd"
          ></input>

          {/* Months */}
          <select
            className="months"
            {...register("month", { required: " Month is required" })}
            id="month"
          >
            <option value="" disabled>
              Select month
            </option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <div />

          {/* Years */}
          <input
            className="years"
            type="number"
            {...register("year", {
              required: "Year is required",
              min: { value: 1950, message: "Year must be at least 1950" },
              max: { value: 2024, message: "Year cannot be more than 2024" },
            })}
            placeholder="yyyy"
          />
        </div>

        {/* Error Container */}
        {/* Day */}
        <div className="ErrorsContainer">
          {errors.day && (
            <span className="error form3">
              <i className="fa-solid fa-circle-exclamation"></i>
              {errors.day.message}
            </span>
          )}

          {/* Month */}

          {errors.month && (
            <span className="error">
              <i className="fa-solid fa-circle-exclamation"></i>
              {errors.month.message}
            </span>
          )}

          {/* Years */}

          {errors.year && (
            <span className="error">
              <i className="fa-solid fa-circle-exclamation"></i>
              {errors.year.message}
            </span>
          )}
        </div>

        <p className="Form-title">
          Gender <br />
          <span className="Form-subtitle">
            We use your gender to help personalize our content recommendations
            and ads for you.
          </span>
        </p>

        {/* // male */}
        <div className="Gender_top">
          <div className="Gender">
            <input
              className="Gender-radio"
              type="radio"
              /* value={inputValue} */
              name="gender"
              id="Man"
              /* onChange={(e) => setInputValue(e.target.value)} */
            ></input>
            <label className="Gender-label" htmlFor="Man">
              Man
            </label>
          </div>
          {/* // Woman */}
          <div className="Gender">
            <input
              className="gender"
              type="radio"
              /* value={inputValue} */
              name="gender"
              id="Woman"
              /* onChange={(e) => setInputValue(e.target.value)} */
            ></input>
            <label htmlFor="Woman">Woman</label>
          </div>
          {/* // Non-binary */}
          <div className="Gender">
            <input
              className="gender"
              type="radio"
              /* value={inputValue} */
              name="gender"
              id="Non-binary"
              /* onChange={(e) => setInputValue(e.target.value)} */
            ></input>
            <label htmlFor="Non-binary">Non-binary</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn">
        Sign Up
      </button>
    </form>
  );
}

// 4th Form
function Form4() {
  return (
    <div className="confirmation-wrapper">
      <h1 className="confirmation">Welcome to Spotify</h1>
    </div>
  );
}

// ###########Progress bar function
function ProgressBar({ currentForm, totalForms, formName }) {
  const progressPercentage = (currentForm / totalForms) * 100;

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="progress-disp">
        <i className="fa-solid fa-angle-left"></i>
        <div>
          <p>
            <span>{`Step ${currentForm} of ${totalForms}`}</span>
            <br />
            {formName}
          </p>
        </div>
      </div>
    </div>
  );
}

function SignupForm() {
  const [currentForm, setCurrentForm] = useState(1);
  const totalForms = 3; //Total number of form stages

  const goToNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };
  /* back button */
  /*   const goToPrevForm = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  }; */

  return (
    <div className="App">
      <img
        className="SignUpBanner"
        src="https://res.cloudinary.com/dymsokiwr/image/upload/v1728534949/spotify-white-icon_wlcipw.svg"
        alt="Logo"
      ></img>

      {currentForm === 1 && <Form1 onComplete={goToNextForm} />}
      {currentForm === 2 && (
        <Form2
          onComplete={goToNextForm}
          currentForm={currentForm}
          totalForms={totalForms}
        />
      )}
      {currentForm === 3 && (
        <Form3
          onComplete={goToNextForm}
          currentForm={currentForm}
          totalForms={totalForms}
        />
      )}
      {currentForm === 4 && (
        <Form4 onComplete={() => alert("Form submission complete!")} />
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
