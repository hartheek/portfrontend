import {motion} from 'framer-motion'
import React,{useState} from 'react';
import { SwiperSlide , Swiper} from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import WorkSliderBtns from './sliderbtn';
import 'swiper/css';
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import  Link  from 'next/link'

const projects= [
    {
        num :"01",
        category: "CMO’s Healthcare Access",
        title: "project 1",
        description: "I developed a full-stack healthcare analytics web application aimed at helping CMOs and healthcare administrators analyze population health trends and provider performance across California. Built using Next.js for the frontend, NestJS for the backend, and Recharts for data visualizations, the app offers an interactive dashboard that allows users to filter and explore key healthcare metrics such as total patient encounters, healthcare coverage, medical expenses, and average encounter time. The application features dynamic charts including bar graphs, line charts, pie charts, and maps that visualize trends across encounter types, cities, and years. Users can drill down into specific metrics like top diagnoses, payer coverage vs. claim costs, and patient volumes by location. Data from the Synthea dataset is processed and served through secure APIs, enabling fast and customizable exploration through filters like encounter class, payer name, city, and date range. The platform also includes intuitive navigation, reset filters, and detailed tooltips, all designed to make data-driven decisions easier for non-technical users in the healthcare domain.",
        stack:[{name: "NestJs"}, {name: "NextJs"}, {name:"PostgreSql"}],
        image:'/cmo.png',
        live:'',
        github:'',
    },
    {
        num :"02",
        category: "ThoughtMatch Web Application",
        title: "project 2",
        description: "  ThoughtMatch is a smart web app I built to make grading more fair and meaningful. The idea is simple: students don’t always write answers the same way, even if they understand the material. So instead of checking for exact words, this app compares what the student meant with what the teacher expected. I used NestJS to build a fast and secure backend and Next.js to create a smooth and responsive user interface. I integrated the OpenAI API to analyze and compare the meaning of student and teacher answers, even when they’re written differently. I also made sure real-time feedback and error handling worked smoothly, so the experience feels clean and reliable. Overall, ThoughtMatch helps teachers grade more accurately and helps students get credit for what they actually know—not just how they word it.",
        stack:[{name: "NestJS"}, {name: "NextJS"}, {name: "OpenAI"}, {name:"Python"}],
        image:'/hartheek.jpeg',
        live:'',
        github:'',
    },
    {
        num :"03",
        category: "ClassPresence Web Application",
        title: "project 3",
        description: "ClassPresence is a web app I built to simplify and secure in-class attendance tracking. The goal was to make it easy for students to mark attendance while preventing fake or multiple submissions. Using Node.js for the backend and React.js for the frontend, I built features like IP address checks, location tracking, and unique device fingerprinting to make sure every submission was valid and one-of-a-kind. I designed a clean, user-friendly interface so students could mark their attendance quickly, and teachers could easily view who’s present. For storing attendance data safely, I used PostgreSQL, and I also focused on improving performance—scaling the app to handle more users and boosting speed by 60%. It turned into a reliable and secure solution for classroom attendance",
        stack:[{name: "NodeJS"}, {name: "ReactJS"}, {name: "MYSQL"}, {name:"Networking"}],
        image:'/hartheek.jpeg',
        live:'',
        github:'',
    },

    {
        num :"04",
        category: "ClassPresence Web Application",
        title: "project 4",
        description: "CareerAlign is a web platform I created to make the recruitment process smoother for both students and employers. The idea was to help students build detailed profiles with their education, skills, and experience, and allow employers to easily find the right candidates using smart search and filters. I built the backend using Express.js and PostgreSQL to manage data reliably, and used GraphQL to make the API interactions fast and efficient. I also focused on designing a scalable system so it could handle a large number of users without slowing down. By tuning the database and refining performance, the app stayed stable even with high traffic.Overall, CareerAlign helped bridge the gap between students and recruiters by making the hiring process more organized and accessible.",
        stack:[{name: "NodeJS"}, {name: "ReactJS"}, {name: "MYSQL"}],
        image:'/hartheek.jpeg',
        live:'',
        github:'',
    }
]


const MyWork =()=>{
    
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange =(Swiper:SwiperType)=>{
        const currentIndex = Swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section initial={{ opacity:0}} animate={{opacity:1}} className="min-h-[80vh] flex flex-xol justify-center py-12 xl:px-0">
            <div className="container mx-auto"> 
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"> 
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
                            <p className="black-text/60"> {project.description}</p>

                            <ul className="flex gap-4">
                                {project.stack.map((item, index) =>{
                                    return <li key={index} className=" text-xl ">
                                        {item.name}
                                        {index !== project.stack.length -1 && ","}
                                    </li>
                                })}

                            </ul>
                            <div className="border border-gray/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100} >
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-gray-400 text-3xl group-hover:text-black"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100} >
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group">
                                                <BsGithub className="text-gray-400 text-3xl group-hover:text-black"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]" > 
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index)=>{
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-black bg-opacity-50">
                                        <div className="absolute top-0 bottom- w-full h-full bg-black/10 z-10">

                                        </div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} alt='' fill className="object-contain"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}

                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(20%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            iconsStyles="text-2xl text-black"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default MyWork;
