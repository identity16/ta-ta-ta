import React, { useMemo } from "react";
import { getViewportSize, isMobile } from "../_common/util";
import "./AdContainer.scss";

export default function AdContainer({ direction = "left", children }) {
  const disableAd = useMemo(() => isMobile(getViewportSize().width), []);

  return (
    <aside className={`AdContainer ${direction}`}>
      {disableAd ? null : children}
    </aside>
  );
}
