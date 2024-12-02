import { useEffect, useState } from "react";

import { BACKEND_URL } from "../config";
import axios from "axios";
import EntryCard from "./EntryCard";

export default function DisplayEntries(){
   const [data, setData] = useState([]);


   useEffect(()=>{
    
     axios.get(`${BACKEND_URL}/api/v1/writings`,{
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
     })
    .then(
        (response) => {
        setData(response.data.posts)

    }).catch((error)=>{
        console.log(error)
    });
    
   },[]);

   const testText: string = "random text random text random text random text random text random text random text random text random text random text random text random text random text random text random text random text random text random textrandom text random text random text random text random text random text"

   console.log(data)

    return (
        <div className="px-[10vw] md:px-[25vw] lg:px-[30vw] mt-5  bg-slate-50">
           
           {
            data.map((item,key)=>{
                const username = item['user']['username'];
                const date = item['date_posted'];
                const word = item['word']['word'];
                const text = item['content'];

                return <EntryCard key={key} username={username} datePosted={date} wordOfTheDay={word} text={text}/>
           })
           }
            
        </div>
    )
}