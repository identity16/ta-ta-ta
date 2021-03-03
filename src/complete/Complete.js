import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";

import "./Complete.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Complete() {
  let query = useQuery();
  const number = query.get("number");
  const unit = query.get("unit");

  return (
    <section className="Complete">
      <section className="Complete__message-container">
        <Logo />
        <p>타이머 종료!</p>
      </section>

      <section className="Complete__button-container">
        <Link
          to={`/timer/${unit}/${number}`}
          className="Complete__button restart-button"
        >
          한 번 더 시작
        </Link>
        <Link to={`/main`} className="Complete__button reset-button">
          시간 재설정
        </Link>
      </section>
    </section>
  );
}
