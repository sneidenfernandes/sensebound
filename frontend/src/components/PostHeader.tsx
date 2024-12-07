import { UserIcon } from "./UserIcon"

interface headerInput {
    text: string | null
    profile?: boolean
}


export default function PostHeader({text,profile}: headerInput){


    return (
        <div className="font-bold text-xl pt-[5vh] px-[10vw] md:px-[25vw] lg:px-[30vw] mt-5 bg-slate-50 flex justify-start">
            {text}
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200" />
        </div>


    )
}