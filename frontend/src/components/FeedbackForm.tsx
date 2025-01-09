import { useState } from "react"

export default function FeedbackForm(){

    const [data,setData] = useState("");


    return(
        <div className="flex flex-col ">
             <form className=" px-[10vw] md:px-[25vw] lg:px-[30vw] mt-5 bg-slate-50 mb-5">
             
                <label  className="block mb-2 text-sm font-medium font-semibold text-black mb-4"> We look forward to hearing from you!</label>
                
                <textarea onChange={(e) => {
                    setData(e.target.value)
                }} id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-slate-50 rounded-lg border border-gray-300 focus:border-gray-300 " placeholder="Write your feedback here..."></textarea>
                
                 <button type="button" className="mt-[2vh] text-slate-50 bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
            </form>
            
        </div>
   

    )
}