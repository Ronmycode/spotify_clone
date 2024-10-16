import SsoLinks from "../Components/SsoLinks.jsx";
import "../Components/SsoLinks.css";
import SignUpEmailAddress from "../Components/SignUpEmailAddress.jsx";
import "../Components/SignUpEmailAddress.css";
function Signup() {
  return (
    <div>
      <SignUpEmailAddress />
      <SsoLinks />
    </div>
  );
}

export default Signup;
