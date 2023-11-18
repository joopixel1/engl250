'use client';
import { useState } from "react";
import { FaTimes, FaChevronCircleUp } from "react-icons/fa";

export default function Text({ text }){
    const [open, setOpen] = useState(false);
    return (<>
        {open
        ?
        <div className="bg-green-300 border-gray-300 border p-3 rounded-md absolute bottom-5 right-5 w-6/12">
            <FaTimes className="" onClick={() => setOpen(false)}/>
            {text}
        </div>
        :
        <div className="bg-green-300 p-2 rounded-full border-gray-300 border absolute bottom-5 right-5 " onClick={() => setOpen(true)}>
            <FaChevronCircleUp size={30}/>
        </div>
        }
    </>);
}