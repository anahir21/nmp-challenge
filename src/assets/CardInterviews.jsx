import React from "react";

const CardInterviews = ({ interviewfalse, date, time, recruiter, zoom }) => {
  return (
    <div>
      <p>
        {interviewfalse}
        {date} <br />
        {time} <br />
        {recruiter} <br />
        {zoom} <br />
      </p>
    </div>
  );
};

export default CardInterviews;
