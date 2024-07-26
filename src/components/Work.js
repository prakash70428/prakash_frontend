import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="course-heading">COURSES</h1>
        <div className="course-container">
          {WorkCardData.map((val,ind) => {
            return(
                <WorkCard
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                  syllabus={val.syllabus}
                  college={val.college}
                  company = {val.company}
                  name={val.name}
                />
            )
          })}
        </div>
    </div>
  )
}

export default Work