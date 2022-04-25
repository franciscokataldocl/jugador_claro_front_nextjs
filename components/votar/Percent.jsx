import React from 'react';
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";


const Percent = ({porcentaje}) => {

    const props = {
      percent: porcentaje, // is require
      colorSlice: "var(--red)",
      colorCircle: "#EEEEEE",
      fontColor: "var(--black)",
      fontSize: "1.3rem",
      fontWeight: 400,
      size: 100,
      stroke: 10,
      strokeBottom: 10,
      speed: 40,
      cut: 1,
      rotation: -90,
      opacity: 10,
      fill: "#fff",
      unit: "%",
      textPosition: "0.35em",
      animationOff: false,
      strokeDasharray: "10,1",
      inverse: false,
      round: true,
      number: true,
    };


    return (

      <CircularProgressBar {...props} />
    );
}

export default Percent