import { useEffect, useState } from "react"

import Timer from "../components/Timer";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export default function Editor(){
    
    const [complete, setComplete] = useState(false);
    const [text, setText] = useState("")
    const [word,setWord] = useState<string | null>("");
    const currDate = new Date( Date.now() ).toString().slice(4,15) ;
    const username = localStorage.getItem('user');
    const navigate = useNavigate();

    // 10-min timeout
    useEffect(()=>{
        setTimeout(()=>{
            setComplete(true)
        }, 100000)
    

    },[]);


    const wordOfTheDay : string | null = localStorage.getItem("wordOfTheDay")

    setWord(wordOfTheDay)

    const submitEntry = async () => {
        axios.post(`${BACKEND_URL}/api/v1/writings/post`,{
            content: text
        },{
            headers:{
                
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })

        navigate('/profile');
    }
   
  

    return <div className="w-full h-screen  bg-slate-50 ">

                

                <div className="font-anton text-xl font-extralight flex justify-center pt-[3vh]">
                    Sensebound
                 </div>

        
                      
              

                 <div className="flex justify-center pt-[1vh] font-light mx-[5vw] text-center text-sm">
                                        <p>Write about <span className="mx-1 font-semibold text-sm">"{word}"</span> through your senses for 10 minutes. The editor will automatically close once the timer is up.</p>
                </div>

                <div className="flex justify-center pt-[1vh] ">
                <Timer/>
                </div>
                

                {!complete  ?  <div className="">

                                    


                                    <div className="flex justify-center pt-[1vh] ">
                                        
                                            <textarea onChange={(e)=>{
                                                    setText(e.target.value)
                                            }} placeholder="Your deep dive starts here..."   className=" p-5 w-[90vw] h-[60vh] lg:w-[70vw] lg:h-[60vh] border-none focus:border-none text-roboto rounded text-left align-top"/>
                                       
                                        
                                    </div> 


                                </div>
                            : <div className="flex justify-center mt-[1vh] font-light text-center">
                                <div>
                                    <div className="font-semibold mb-[2vh] text-sm">
                                         Times up! Here's Your Entry
                                    </div>

                                    <div className="flex justify-center mt-[2vh]  font-roboto mx-2 my-2 md:mx-[10vw] md:my-[20px] lg:mx-[30vw]  pb-[3vh] h-fit w-fit text-sm  text-left bg-slate-50 px-10 pt-2 border-black border-[1px]  rounded-xl">
                                        <div className="flex flex-col">
                                            <div className="flex justify-center font-bold mb-2 text-2xl">{word}</div>

                                            <div className="flex justify-between  pb-2">
                                                <div className="text-md">
                                                    {username}
                                                </div>
                                                <div className="flex">
                                                    
                                                    <div className="mr-2 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                                        </svg>

                                                        
                                                    </div>
                                                   
                                                    <div>
                                                        {currDate}
                                                    </div>
                                                    


                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                {text}
                                            </div>
                                            
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <button onClick={submitEntry}   className="bg-black text-amber-50 text-2  transition-all transition-duration-1000  px-12 py-3 rounded-full text-xs font-bold">Submit</button>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                                    

                            </div>

                
                }
                 
                    
                    
                

              
                       



               

    </div>
}