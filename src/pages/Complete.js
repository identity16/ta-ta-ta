import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Complete.scss";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Complete({ className }) {
    let query = useQuery();
    const number = query.get("number");
    const unit = query.get("unit");

    return (
        <section className={`Complete ${className}`}>
            <h1 className="Complete__title">타타타</h1>

            <section className="Complete__content">
                <img
                    src="/img/complete-img.png"
                    alt="Man is checking on checklist beside timer"
                />
            </section>

            <section className="Complete__button-container">
                {number !== null && unit !== null ? (
                    <Link
                        to={`/timer/${unit}/${number}`}
                        className="Complete__button Complete__button-restart"
                    >
                        한 번 더 시작
                    </Link>
                ) : null}
                <Link
                    to={`/`}
                    className="Complete__button Complete__button-reset"
                >
                    시간 재설정
                </Link>
            </section>
        </section>
    );
}
