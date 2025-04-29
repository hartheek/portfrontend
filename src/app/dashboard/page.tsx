"use client"

import Intro from "../components/UIhome/introname/intro";
import Styles from "./dashboard.module.css";
import Image from "next/image";

const Dashboard=()=>{
    return (
        <div>
            <div className={Styles.hero}>
                <Intro/>
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
            <div>

            </div>
        </div>
    );
};
export default Dashboard;