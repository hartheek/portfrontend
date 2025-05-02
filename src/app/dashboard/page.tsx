"use client"

import Intro from "../components/UIhome/introname/intro";
import SkillsMarquee from "../components/UIhome/introname/marqueeskills";
import Styles from "./dashboard.module.css";
import Image from "next/image";

const Dashboard=()=>{
    return (
        <div>
            <div className={Styles.hero}>
                <div style={{ flex: 1, minWidth: "300px" }}>
                    <Intro />
                </div>
                <div style={{ maxWidth: "500px", width: "100%" }}>
                    <Image
                    src="/hartheek.png"
                    alt="Picture"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                    />
                </div>
            </div>
            <div style={{ marginTop: "3rem" }}>
                <SkillsMarquee />
            </div>
        </div>
    );
};
export default Dashboard;