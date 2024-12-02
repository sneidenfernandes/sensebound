import { Link } from "react-router-dom";

interface NavlinkInputs{
    linkText: string,
    label : string,
}

export default function NavLink({linkText,label}: NavlinkInputs){

    return <>
             <Link to={linkText}>
                <p className="text-sm font-sans font-roboto ">{label}</p>
             </Link>
           </>

}