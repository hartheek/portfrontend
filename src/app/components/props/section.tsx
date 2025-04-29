import { Limelight} from 'next/font/google'

const limelight = Limelight({
    weight: "400",
    subsets: ["latin"],
  });

const Section =(props:{name:string})=>{
    return (
        <div className={limelight.className}>
            <h1>{props.name}</h1>
        </div>
    )
};
export default Section;