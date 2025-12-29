import { Sun, Moon} from 'lucide-react';
import { useState,useEffect } from "react";
import { cn } from '@/lib/utlis';
export const themeToggle = () => {
    const [isdarkmode,setisdarkmode]=usesatate(false);
    const togglemode=() =>
    {
        if (isdarkmode){
            setisdarkmode (false);
            document.documentElement.classList.remove('dark');
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
            setisdarkmode (true);
        }    

        }

    return (

    <button onClick={togglemode} className={cn("fixed max:  top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}> 
        {" "}
        {isdarkmode ? (
            <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
            <Moon className="h-6 w-6 text-blue-900"/>
        )}
        </button>
    );
};
