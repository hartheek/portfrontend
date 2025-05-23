"use client"
import React, { useState } from "react";
import Styles from "./navbar.module.css";
import {motion} from "framer-motion";

const Navbar =()=>{

    const[burgerMenuActive, setBurgerMenuActive] = useState(false);

    const toggleBurgerMenu = ()=>{
        setBurgerMenuActive(!burgerMenuActive)
    }

    const motionvariants ={
        open:{
            opacity:1,
            transition:{
                staggerChildren :0.1,
                ease:"easeout",
                type: "spring",
            },
        },
        closed:{
            opacity:0,
            transition:{
                staggerChildren:0,
                duration:0,
            },
        },
    };

    const listitemVariants ={
        open:{
            y:0,
            opacity:1,
            transition:{
                duration: 0.35,
                ease: "easeOut",
            },
        },
        closed:{
            y:100,
            opacity:0,
            transition:{
                duration:0,
            },
        },
    };
    return (
        <div className={`${Styles.navbar} ${burgerMenuActive ? Styles.active :""}`}>
            <div className={Styles.navigation}>
                <button className={Styles.button}> learn more</button>
                <div className={Styles.burgerMenuContainer} onClick={()=> toggleBurgerMenu()}>
                    <div className={Styles.burgerMenuTrigger}></div>
                    <div className={Styles.burgerMenu}></div>
                </div>
            </div> 
            <div className={Styles.content}>
                <motion.ul animate={burgerMenuActive ? "open" : "closed"} variants={motionvariants}>
                    <motion.li variants={listitemVariants}>
                        <a href="/dashboard">home</a>
                    </motion.li>
                    <motion.li variants={listitemVariants}>
                        <a href="/dashboard/about">About</a>
                    </motion.li>
                    <motion.li variants={listitemVariants}>
                        <a href="/dashboard/projects">Projects</a>
                    </motion.li>
                    <motion.li variants={listitemVariants}>
                        <a href="/dashboard/experience">Experience</a>
                    </motion.li>
                    <motion.li variants={listitemVariants}>
                        <a href="/dashboard/login"> Login</a>
                    </motion.li>
                </motion.ul>
            </div>
            
        </div>
    )
};
export default Navbar;