"use client"
import { useEffect, useState } from "react";
import Styles from "./about.module.css";
import { ArrowDown } from "lucide-react";
import Personal from "@/app/components/aboutME/personal";
import Section from '../../components/props/section';


const About = () => {
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
      <div className={Styles.aboutme}>
        <div className={Styles.one}><Section name="AboutMe..."/></div>
        <div className={Styles.two}><Section name="AboutMe..."/></div>
        <div className={Styles.one}><Section name="AboutMe..."/></div>
      </div>
      <div className={`${Styles.scroll} ${fadeScroll ? Styles.fadeOut : ""}`}>
        <h1>Scroll Down</h1>
        <ArrowDown className={Styles.arrow} />
      </div>
      <div>
        <Personal/>
      </div>
    </div>
  );
};

export default About;
