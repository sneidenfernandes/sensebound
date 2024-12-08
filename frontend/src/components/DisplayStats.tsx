
import StatComponent from "./StatComponent";
import { ContributionCalendar } from 'react-contribution-calendar'
import {useEffect, useState} from "react"


export default function DisplayStats(){

    const [cellSize, setCellSize] = useState(0)

    useEffect(()=>{
            const updateCellSize = () => {
                setCellSize(7)
                if (window.matchMedia("(min-width:640px)").matches){
                    setCellSize(8)
                }
                if(window.matchMedia("(min-width:768px)").matches){
                    setCellSize(9)
                }
                if(window.matchMedia("(min-width:1024px)").matches){
                    setCellSize(14)
                }

            }
            updateCellSize();   
            window.addEventListener("resize", updateCellSize)

            return () => window.removeEventListener("resize", updateCellSize)
    },[]);

   

    return (
        <div className="px-[7vw] md:px-[25vw] lg:px-[30vw] mt-7  bg-slate-50">
            
            <div className="flex justify-center ml-14">
                <ContributionCalendar 
                theme={'grass'} 
                scroll={false} 
                includeBoundary={true}
                daysOfTheWeek={['','','','','','','']}
                cx={cellSize}
                cy={cellSize}
                cr={4}/>
            </div>

            <div>
                <StatComponent stat="Total Submissions" value="56"/>
                <StatComponent stat="Time Spent Writing" value="240 min"/>
                <StatComponent stat="Avg. Word Count  " value="200"/>
            </div>

            
            
        </div>
    )
}