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
//     <div className="course-card">
//     <div>
//       <img src={props.imgsrc} alt="image" style={{width:"100%", height:"400px"}}/>

//       {/* <img className="logo" src={props.college} alt="image" style={{width:"50px", height:"50px"}}/>
//       <img className="logo" src={props.company} alt="image" style={{width:"50px", height:"50px"}}/> */}
//       <h1>{props.name}</h1>
//       <h4>{props.college}, {props.company}</h4>
//       {/* <h2 className="course-title">{props.title}</h2> */}
//       {/* <p>{props.text}</p> */}
//     </div>  

    
//     <div className="crs-details">
//         <div className="crs-btns">
//             {/* <NavLink to={props.view} className="btn">View</NavLink>  */}
//             <button  className="btn">View More</button>
//             {/* <NavLink to={props.syllabus} className="btn">Syllabus</NavLink> */}
//             {props.syllabus}
//         </div>
//     </div>
//     { show &&
//       <ShowDetail setShowDetail={setShowDetail} detail={props}/>
//       }
// </div>
    <div class="card">
        <div class="cover-photo">
            <img src={props.imgsrc} class="profile"/>
        </div>
        <h3 class="profile-name">{props.name}</h3>
        <p class="about">{props.college} <br/> {props.company}</p>
        <button class="btn" onClick={()=>setShowDetail(!show)}>View </button>
        {props.syllabus}
        <div class="icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
        { show &&
      <ShowDetail setShowDetail={setShowDetail} detail={props}/>
      }
    </div>
  )
}


export default WorkCard