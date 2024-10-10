import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./Components/TrackBar.css";
import TrackBar from "./Components/TrackBar.jsx";
import NabBar from "./Components/NabBar.jsx";
import "./Components/NabBar.css";
import BannerAdd from "./Components/BannerAdd.jsx";
import "./Components/BannerAdd.css";
BannerAdd;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <NabBar />
    <BannerAdd />
    <TrackBar />
  </StrictMode>
);
