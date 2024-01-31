import React from "react";
import { LOGO_URL } from "../../../utils/constants";
const Logo = () => {
  return (
    <div className="logo_container">
      <img src={LOGO_URL} alt="logo" className="w-28 mix-blend-multiply" />
    </div>
  );
};

export default Logo;
