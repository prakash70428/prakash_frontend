import React,{useRef, useEffect} from 'react'
import './WorkCardStyles.css'
import WorkCard from './WorkCard';
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
           <WorkCard 
            key={ind}
            imgsrc={imgsrc}
            title={title}
            text={text}
            view={view}
            syllabus={syllabus}
           />
       </div>
    </div>
  )
}

export default ShowDetail