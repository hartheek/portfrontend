'use client'; 
import { Typewriter } from "react-simple-typewriter";
import { Poppins } from "next/font/google";
import Styles from './intro.module.css';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
});

const Intro = () => {
  const router = useRouter();
  return (
    <div className={poppins.className}>
        <div className={Styles.full}>
      <div className={Styles.name}>
        <p>Hello there! My name is Hartheek Reddy Katta.</p>
      </div>

      <div className={Styles.iam}>
        <h1>
          I am a {" "} <span className={Styles.typee}>
          <Typewriter
            words={[
              'Web Developer',
              'Passionate Educator',
              'Curious Learner',
              'Creative Problem Solver'
            ]}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
        </h1>
      </div>

      <div>
        <button  className={Styles.btn} onClick={() => router.push('/dashboard/projects')}>My Work</button>&nbsp;
        <button className={Styles.btn} onClick={() => router.push('/dashboard/contact')}>Lets Chat</button>
      </div>
      </div>
    </div>
  );
};

export default Intro;
