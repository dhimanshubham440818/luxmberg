import frame from '../assets/images/jr-frame.jpg'
import jr_one_old from '../assets/images/jr_one_old.png'
import jr_one from '../assets/images/jr_one.png'
import jr__three from '../assets/images/jr__three.png'
import jr__five from '../assets/images/jr_five.png'
import jr__four from '../assets/images/jr_four.png'

import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import {MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

function TimeLine(){
   
   return (
        <>
        <div className='position-relative'>
        <div className='l1'>
             
       
           <img className='' src={jr_one_old} style={{width:"100%" , height:'100%' , }} />

            
        </div>
        <div className='l2'>
          <img className='' src={jr_one} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className='l3'>
         <img className='' src={jr__three} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className='l4'>
          <img className='' src={jr__five} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className='l5'>
          <img className='' src={jr__four} style={{width:"100%" , height:'100%'}} />
        </div>
        <div className=''>
          <img src={frame} style={{width:"100vw" , height:'100vh'}}/>
        </div>
        </div>
        </>
      )
}
export default TimeLine;
