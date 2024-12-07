import PostHeader from "../components/PostHeader";
import DisplayEntries from "../components/DisplayEntries";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";



export default function UserPage(){

    const [user, setUser] = useState<string | null>("");

    useEffect(()=>{
        const user  = localStorage.getItem("user");
        setUser(user)
    },[])


    return <>
        (
            <div className="w-full h-screen mt-[6vh] bg-slate-50">
                <ProfileNavbar />
                <PostHeader text={user + "'s entries"} />
                <DisplayEntries path="/writings/user/senseboundbot"/>
                <Footer/>
            </div>)
        
           </>

}
