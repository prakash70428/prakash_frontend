import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import ShowDetail from "./ShowDetail"
import { useState } from "react"

// const WorkCard = (props) => {
//   return (
//     <div className="course-card">
//     <div>
//       <img src={props.imgsrc} alt="image" style={{width:"100%", height:"400px"}}/>
//       <h2 className="course-title">{props.title}</h2>
//       <p>{props.text}</p>
//     </div>  

    
//     <div className="crs-details">
//         <div className="crs-btns">
//             <NavLink to={props.view} className="btn">View</NavLink>
//             {/* <NavLink to={props.syllabus} className="btn">Syllabus</NavLink> */}
//             { props.syllabus }
//         </div>
//     </div>
// </div>
//   )
// }

const WorkCard = (props) => {
const [show, setShowDetail] = useState(false);

  return (
    <div className="course-card">
    <div>
      <img src={props.imgsrc} alt="image" style={{width:"100%", height:"400px"}}/>
      <h2 className="course-title">{props.title}</h2>
      {/* <p>{props.text}</p> */}
    </div>  

    
    <div className="crs-details">
        <div className="crs-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
            <button onClick={()=>setShowDetail(!show)} className="btn">ReadMore</button>
            {/* <NavLink to={props.syllabus} className="btn">Syllabus</NavLink> */}
            {props.syllabus}
        </div>
    </div>
    { show &&
      <ShowDetail setShowDetail={setShowDetail} detail={props}/>
      }
</div>
  )
}


export default WorkCard