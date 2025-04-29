"use client"

import Section from '../../components/props/section';
import Styles from './experience.module.css'
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import TimeLine from '@/app/components/experience/timeline';


const Experience=()=>{

    const [fadeScroll, setFadeScroll] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setFadeScroll(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <div>
            <div className={Styles.exp}>
                    <div className={Styles.one}><Section name="Experience"/></div>
                    <div className={Styles.two}><Section name="Experience"/></div>
                    <div className={Styles.one}><Section name="Experience"/></div>
                  </div>
                  <div className={`${Styles.scroll} ${fadeScroll ? Styles.fadeOut : ""}`}>
                    <h1>Scroll Down</h1>
                    <ArrowDown className={Styles.arrow} />
                  </div>

                  <div>
                    <TimeLine/>
                  </div>
        </div>
    )
}

export default Experience;