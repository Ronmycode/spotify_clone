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

      <Link className="btn" to="/signUpForm">
        <button className="btn"> Sign Up</button>
      </Link>
    </div>
  );
}

export default BannerAdd;
