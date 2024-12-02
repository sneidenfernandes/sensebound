
import StatComponent from "./StatComponent";


export default function DisplayStats(){


    return (
        <div className="px-[10vw] md:px-[25vw] lg:px-[30vw] mt-7  bg-slate-50">
            <StatComponent stat="Total Submissions" value="56"/>
            <StatComponent stat="Time Spent Writing" value="240 min"/>
            <StatComponent stat="Streak" value="6 days"/>
            <StatComponent stat="Avg. Word Count  " value="200"/>
        </div>
    )
}