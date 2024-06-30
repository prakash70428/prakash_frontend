import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="course-card">
    <div>
      <img src={props.imgsrc} alt="image" style={{width:"100%", height:"400px"}}/>
      <h2 className="course-title">{props.title}</h2>
      <p>{props.text}</p>
    </div>  

    
    <div className="crs-details">
        <div className="crs-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
            {/* <NavLink to={props.syllabus} className="btn">Syllabus</NavLink> */}
            { props.syllabus }
        </div>
    </div>
</div>
  )
}

export default WorkCard