import { Link } from "react-router-dom";
import shamrockLogo from "../assets/shamrock-logo.png";

export default function HeaderLogo() {
  return (
    <Link
      to="/"
      className="block shrink-0"
      aria-label="The Shamrock Social homepage"
    >
      <img
        src={shamrockLogo}
        alt="The Shamrock Social"
        className="h-auto w-[120px] sm:w-[155px] md:w-[190px] object-contain mix-blend-multiply"
      />
    </Link>
  );
}
