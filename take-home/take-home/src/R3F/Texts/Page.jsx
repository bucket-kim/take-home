import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import "./Page.css";
import { useInView } from "react-intersection-observer";
import { useThree } from "@react-three/fiber";

const Page = ({ h1, h2, x, y, width, size, p }) => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  const pRef = useRef(null);

  useEffect(() => {
    if (!pRef.current) return;

    w <= 5
      ? (pRef.current.style.fontSize = "14px")
      : (pRef.current.style.fontSize = "32px");
  }, [w]);

  const [ref, inView] = useInView();

  const textStyle = {
    transform: `translate(${x}em, ${y}%)`,
    width: `${width}%`,
    opacity: inView ? 1 : 0,
    fontSize: `${size}rem`,
    transition: "opacity 0.5s ease-in-out",
    transitionDelay: "500ms",
  };
  return (
    <Fragment>
      <div ref={ref} className="page" style={textStyle}>
        <h1>{h1}</h1>
        <h1>{h2}</h1>
        <div className="explanation">
          <p ref={pRef}>{p}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Page);
