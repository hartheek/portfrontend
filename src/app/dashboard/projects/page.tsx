"use client"
import { useEffect, useState } from "react";
import Styles from "./projects.module.css"
import { ArrowDown } from "lucide-react";
import dynamic from 'next/dynamic';

const MyWork = dynamic(() => import('@/app/components/projects/myWork'), { ssr: false });
import Section from '../../components/props/section';

const Projects =()=>{
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
      <div className={Styles.projects}>
        <div className={Styles.one}><Section name="Projects..."/></div>
        <div className={Styles.two}><Section name="Projects..." /></div>
        <div className={Styles.one}><Section name="Projects..."/></div>
      </div>
      <div className={`${Styles.scroll} ${fadeScroll ? Styles.fadeOut : ""}`}>
        <h1>Scroll Down</h1>
        <ArrowDown className={Styles.arrow} />
      </div>
      <div className={Styles.work}>
        <MyWork/>
      </div>
    
    </div>
  );
};

export default Projects;
