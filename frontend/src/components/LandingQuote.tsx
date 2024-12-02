import { MouseEventHandler } from "react"

interface LandingQuoteInputs {
    handleSignInPopUp: MouseEventHandler<HTMLButtonElement>
}

export default function LandingQuote({handleSignInPopUp}: LandingQuoteInputs){

    return <div className="w-full-screen  flex justify-center ">
                <div className=" flex flex-row min-w-[90vw] md:min-w-[80vw] lg:min-w-[65vw]">
                    <div className="flex flex-col justify-center mt-[26vh]">
                        <div>
                            <p className="text-6xl font-serif text-slate-800">
                                Wake up.
                            </p>
                        </div>

                        <div className="mt-2 ">
                            <p className="text-6xl font-serif text-slate-800 z-index-200">
                                Dive into your senses.
                            </p>
                        </div>

                        <div className="flex justify-start ml-2 tracking-wide text-gray-500 mt-[5vh] text-2xl font-extralight font-roboto">
                            10 minutes,  every morning.
                        </div>

                        <div className="mt-[7vh] mr-5">
                         <button onClick={handleSignInPopUp} className="bg-black text-amber-50 text-2  transition-all transition-duration-1000  px-12 py-3 rounded-full text-xs font-bold">Start writing</button>
                        </div>
                            
                        

                    </div>
                </div>
               
        </div>
}