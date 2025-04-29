"use client"
import Image from "next/image"
import Styles from "./personal.module.css"
const Personal =()=>{
    return(
        <div className={Styles.personalContainer}> 
            <div className={Styles.textContent}>
                <h1 className={Styles.bioHeading}>PERSONAL BIOGRAPHY</h1>
                <p className={Styles.bioText}>
                Hey, I &apos;m Hartheek — a curious mind fueled by creativity, problem-solving, and the drive to make a difference through technology. My journey into the world of development wasn&apos;t just about writing code; it was about creating solutions that matter and continuously learning along the way.
                </p>
                <p className={Styles.bioText}>
                What keeps me going is the thrill of building things from scratch, understanding how systems work, and turning ideas into real-world impact. Whether I&apos;m teaching kids how to code, working on projects that challenge me, or simply geeking out over design and architecture, I&apos;m always exploring.
                </p>
                <p className={Styles.bioText}>
                Outside of tech, you&apos;ll find me collecting Hot Wheels, thinking about how to blend tradition with modern tech, and diving into anything that sparks inspiration. I believe in working with heart, staying curious, and lifting others as I grow.
                </p>
                <p className={Styles.bioText}>
                If you share that energy — let&apos;s connect.
                </p>

            </div>
            <div className={Styles.imageWrapper}>
                <Image src="/hartheek.jpeg" alt="Pcture"  width={500}
                                    height={500}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ width: "100%", height: "auto", maxWidth: "500px" }}></Image>
            </div>
        </div>

    )
}
export default Personal