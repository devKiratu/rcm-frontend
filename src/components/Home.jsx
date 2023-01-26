import React from "react";

function About() {
  const handleClick = async () => {
    try {
      console.log("sending...");
      const response = await fetch(
        "https://rcm-pyly.onrender.com/api/airtime/send"
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="hero">
      <div className="text1">
        {" "}
        Want to send airtime to your employees?<br></br>
        <br></br>
        Here's the place to go by only one click<br></br>
        <br></br>
        <button type="button" className="button" onClick={handleClick}>
          Send Airtime
        </button>
      </div>
    </div>
  );
}
export default About;
