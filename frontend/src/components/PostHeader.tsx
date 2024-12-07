import { UserIcon } from "./UserIcon"

interface headerInput {
    text: string
    user?: boolean
}


export default function PostHeader({text,user}: headerInput){


    return (
        <div className="font-bold text-xl pt-[5vh] px-[10vw] md:px-[25vw] lg:px-[30vw] mt-5 bg-slate-50">
         {user ?? <UserIcon/>}
         {text}
         <hr className="my-12 h-0.5 border-t-0 bg-neutral-200" />
        </div>


    )
}