//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const hours = new Date().getHours();
console.log(hours);

if (hours >= 0 && hours < 12) {
  var greet = "Good morning";

  var style = {
    color: "red"
  };
} else if (hours >= 12 && hours < 18) {
  var greet = "Good Afternoon";

  var style = {
    color: "green"
  };
} else {
  var greet = "Good evening";

  var style = {
    color: "blue"
  };
}

ReactDOM.render(
  <h1 className="heading" style={style}>
    {greet}
  </h1>,
  document.getElementById("root")
);
