import PostHeader from "../components/PostHeader";
import DisplayEntries from "../components/DisplayEntries";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";


export default function Profile(){
    
    

    

    return <>
        (
            <div className="w-full h-screen mt-[6vh]  bg-slate-50">
                <ProfileNavbar />
                <PostHeader text="Explore" profile={true}/>
                <DisplayEntries path="/writings"/>
                <Footer/>
            </div>)
        
    
    
    </>

}
