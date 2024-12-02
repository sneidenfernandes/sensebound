import Footer from "../components/Footer";

import LandingQuote from "../components/LandingQuote";
import Navbar from "../components/Navbar";
import clock from "../assets/clock.svg"
import { useState } from "react";
import SignUpCard from "../components/SignUpCard";
import SignInCard from "../components/SigninCard";
import Loader from "../components/Loader";




export default function LandingPage(){

    const [displaySignUp, setDisplaySignUp] = useState<boolean>(false);
    const [displaySignIn, setDisplaySignIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    

    function handleSignUpPopUp(){
        setDisplaySignUp(true)
    }

    function handleSignInPopUp(){
        setDisplaySignIn(true)
    }

    function Close(){
        setDisplaySignIn(false);
        setDisplaySignUp(false);
    }

    function Swap(){
        setDisplaySignIn(!displaySignIn);
        setDisplaySignUp(!displaySignUp);

    }


  
    
    
    return  <>  {
            loading ? (<Loader/>) 
            
                    : (<div  className={`h-screen w-screen-full relative bg-slate-50`}>
                        <Navbar handleSignInPop={handleSignInPopUp} handleSignUpPop={handleSignUpPopUp}/>
                        <div className="grid ml-[4vw] md:ml-0">
                            <div className="col-span-1">
                                <LandingQuote handleSignInPopUp={handleSignInPopUp}/>
                            </div>
                            <div className="fixed hidden lg:flex left-[65vw] opacity-5 top-[10vh] right-[-50vw]">
                                <img src={clock}  />
                            </div>
                        </div>

                        <Footer/>

                        {displaySignUp && <SignUpCard  close={Close} swap={Swap} setLoading={setLoading}/>} 
                        {displaySignIn && <SignInCard  close={Close} swap={Swap} setLoading={setLoading}/>}
                                
                    </div>)
            }

          


           

            

          
        </>
}