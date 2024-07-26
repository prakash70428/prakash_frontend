import React,{useRef, useEffect} from 'react'
import './WorkCardStyles.css'
import WorkCard from './WorkCard';
import { NavLink } from 'react-router-dom';
const ShowDetail = ({setShowDetail,...detail}) => {
    const {ind,imgsrc,title,text,view,syllabus }= detail.detail;
   
    const refDetail = useRef();

    useEffect(()=>{
        const stopClickEventInsideJobDetail=(event)=>{

            event.stopPropagation();
        }

        refDetail.current.childNodes[0].addEventListener("click",stopClickEventInsideJobDetail);

        return ()=>{
            window.removeEventListener("click",stopClickEventInsideJobDetail);
        }

    },[])
    useEffect(() => {
        const handleClickOutside = (event) => {
           
            if (!event.target.matches(".card-detail") ) {
                    setShowDetail(false);
            
            }
        };
    
        refDetail.current.addEventListener('click', handleClickOutside);
    
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

  return (
    <div className='card-detail-container' ref={refDetail}>
        <div className='card-detail' >
        
            <div className='card-detail-body'>
                <img src={imgsrc} alt="image" style={{width:"300px", height:"300px"}}/>
                <div>
                    <h2 className="course-title">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>  

    
            <div className="crs-details">
                <div className="crs-btns">
                    <NavLink to={view} className="btn">Watch</NavLink> 
                    {/* <button onClick={()=>setShowDetail(!show)} className="btn">View More</button> */}
                    {/* <NavLink to={props.syllabus} className="btn">Syllabus</NavLink> */}
                    {syllabus}
                </div>
            </div>
         
       
        </div>
    </div>
  )
}

export default ShowDetail