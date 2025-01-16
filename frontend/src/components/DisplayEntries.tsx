import { useEffect, useState } from "react";

import { BACKEND_URL } from "../config";
import axios from "axios";
import EntryCard from "./EntryCard";
import SkeletonList from "../components/SkeletonList"


interface displayEntriesInput {
    path: string
}

export default function DisplayEntries({path}: displayEntriesInput){
   const [data, setData] = useState([]);


   useEffect(()=>{
   
     axios.get(`${BACKEND_URL}/api/v1` + path ,{
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
     }
     
    )
    .then(
        (response) => {
 
        setData(response.data.posts)
    
    }).catch((error)=>{
        console.log(error)
    
    })
    
   },[]);


  
        return (
            <div className="px-[10vw] md:px-[25vw] lg:px-[30vw] mt-5  bg-slate-50">
              {
                data.length !== 0 ? (
                    data.map((item, key) => {
                              const username = item["user"]["username"];
                              const date = item["date_posted"];
                              const word = item["word"]["word"];
                              const text = item["content"];
                      
                              return (
                                <EntryCard
                                  key={key}
                                  username={username}
                                  datePosted={date}
                                  wordOfTheDay={word}
                                  text={text}
                                />
                              );
                            }
                )) : (
                    <div className="text-center mt-10">
                        <SkeletonList/>
                    </div>
                )
              }
            </div>
          )
        

        }