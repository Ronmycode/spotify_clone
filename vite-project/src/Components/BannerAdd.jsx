import { Link } from "react-router-dom";

function BannerAdd() {
  return (
    <div className="BannerAdd">
      <div className="CloseIcon">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <h1 className="title">Get Premium</h1>
      <p className="description">
        Take control of your listening with ad-free music. Cancel anytime.
      </p>
      <button className="btn">
        <Link className="btn" to="/signUpForm">
          Sign Up
        </Link>
      </button>
    </div>
  );
}

export default BannerAdd;
