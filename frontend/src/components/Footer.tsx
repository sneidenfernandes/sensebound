import { Link } from "react-router-dom"

export default function Footer(){

    return <footer className="flex justify-center flex-col  min-w-full h-[7vh] border-t-[1px] border-black  bg-black lg:bg-slate-50 fixed bottom-0">
                <div className="flex flex-row pl-[4vw] lg:justify-center">
                    <div className="flex text-xs text-gray-400  lg:text-black">

                        <Link to={'/landing'}>
                            <div className="mr-3 hover:underline hover:cursor-pointer">Home</div>
                        </Link>

                        <Link to={'/privacy'}>
                            <div className="mr-3 hover:underline hover:cursor-pointer">Privacy</div>
                        </Link>
                        
                        <Link to={'/terms'}>
                            <div className="mr-3 hover:underline hover:cursor-pointer">Terms</div>
                        </Link>
                        
                        <Link to={'/feedback'}>
                            <div className="mr-3 hover:underline hover:cursor-pointer">Feedback</div>
                        </Link>

                        <Link to={'/guide'}>
                            <div className="mr-3 hover:underline hover:cursor-pointer">Guide</div>
                        </Link>
                        
                        <div className="text-gray-500"> &#169; Sensebound</div>

                    </div>
                    
                  

                </div>
           </footer>
}