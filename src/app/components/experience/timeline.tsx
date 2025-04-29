import experienceData from "@/app/lib/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine =()=>{
    return (
        <div>
            <VerticalTimeline lineColor="#e5e7eb">
                {
                    experienceData.map((Item, index)=>(
                        <VerticalTimelineElement key=  {index}
                        contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0,0,0, 0.05)",
                            textAlign :"left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight:"0.4rem solid #9ca3af",
                        }}
                        date={Item.date}
                        icon={Item.icon}
                        iconStyle={{
                            background:" white",
                            fontSize:"1.5rem",
                        }}>
                            <h3 className="font-semibold capitalize">{Item.title}</h3>
                            <h4 className="font-semibold capitalize">{Item.role}</h4>
                            <p className="font-normal !mt-0">{Item.location}</p>
                            <p className="font-normal !mt-0">{Item.description}</p>

                        </VerticalTimelineElement>
                    ))
                }

            </VerticalTimeline>
        </div>
    )
}

export default TimeLine;