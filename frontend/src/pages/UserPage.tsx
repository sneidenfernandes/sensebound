import PostHeader from "../components/PostHeader";
import DisplayEntries from "../components/DisplayEntries";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";



export default function UserPage(){


    return <>
        (
            <div className="w-full h-screen mt-[6vh] bg-slate-50">
                <ProfileNavbar />
                <PostHeader text={'senseboundbot'} user={true}/>
                <DisplayEntries path="/writings/user/senseboundbot"/>
                <Footer/>
            </div>)
        
           </>

}
