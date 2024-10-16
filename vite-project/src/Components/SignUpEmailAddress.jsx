function SignUpEmailAddres() {
  return (
    <div className="Email">
      <div className="SignUpBanner">
        <img
          src="https://res.cloudinary.com/dymsokiwr/image/upload/v1728534949/spotify-white-icon_wlcipw.svg"
          alt="Logo"
        />
        <p>
          Sign up to
          <br />
          start listening
        </p>
      </div>
      <p>Email Address</p>
      <textarea
        name="Email Address"
        id=""
        placeholder="name@domain.com"
      ></textarea>
      <button className="btn">Next</button>
    </div>
  );
}

export default SignUpEmailAddres;
