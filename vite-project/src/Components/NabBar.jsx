function NabBar() {
  return (
    <nav className="NavBar">
      <img
        src="https://res.cloudinary.com/dymsokiwr/image/upload/v1728534949/spotify-white-icon_wlcipw.svg"
        alt="Logo"
      />
      <span className="nav-items">
        <i className="fa-solid fa-magnifying-glass"></i>
        <button className="btn">Open App</button>
        <i className="fa-solid fa-bars"></i>
      </span>
    </nav>
  );
}

export default NabBar;
