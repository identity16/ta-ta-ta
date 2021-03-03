import React from "react";

export default function Logo({ withText = false, dir = "vertical" }) {
  let logoSrc = "/logo192.png";
  if (withText) {
    logoSrc = "/img/logo-with-title";

    if (dir === "vertical") {
      logoSrc += "_vertical";
    }

    logoSrc += ".png";
  }
  return <img className="Logo" src={logoSrc} alt="Logo" />;
}
