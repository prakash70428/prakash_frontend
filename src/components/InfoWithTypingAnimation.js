import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';

const InfoWithTypingIndicator = () => {

    // const [str, setStr] = useState(" ");

    // const arr = ["Welcome to Coding Star","We are a team of Enthusiastic Developers"];

    // useEffect(() => {
    //     // const arrStr = arr[0];
    //     // for(let i=0; i<arrStr.length; i++) {
    //     //     setTimeout(() => {
    //     //         let char = arrStr.charAt(i);
    //     //         // let newStr = str+char;
    //     //         setStr((str) => str + char);
    //     //     }, i*150);
    //     // }

    //     let time = 0;
    //     for(let i=0; i<arr.length; i++) {
    //         const arrStr = arr[i];
    //         for(let j=0; j<arrStr.length; j++) {
    //             setTimeout(() => {
    //                 let char = arrStr.charAt(j);
    //                 // let newStr = str+char;
    //                 setStr((str) => str + char);
    //             }, time);
    //             time += 150;
    //         }
    //         setTimeout(() => {
    //             setStr(" ");
    //             time += 150;
    //         },time)
    //     }
    // }, [])

    
        const el = useRef(null);

        useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ["Welcome to Coding Star", "We are a team of Enthusiastic Developers"],
            typeSpeed: 100,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|"
          });
          return () => {
            typed.destroy();
          };
        }, []);
        return (
          <div>
            <h1>
              {" "}
              <span ref={el} />{" "}
            </h1>
          </div>
        );
    

    // return (
    //     <p>{str}</p>
    // )
}

export default InfoWithTypingIndicator