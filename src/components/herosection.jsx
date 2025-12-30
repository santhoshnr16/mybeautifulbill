import { ArrowDown } from "lucide-react";

export const herosection = () => {
    return (
    <section 
       id="hero"
       className=" relative min-h-screen flex flex-col items-center justify-center px-4 " >
      <div 
      className="container max-w-4xl text-center mx-auto z-10">

      </div>
      <h1>
        <span >
            hi , im 
        </span>
        <span >
            santhosh nr 
        </span>
        <span>
            ai engineer
        </span>
        <p className="mt-4 text-lg animate-fade-in">
            I work in AI engineering, mostly trying to get machines to learn useful things from data without overcomplicating them. 
            I like building models, fixing what breaks, and slowly improving systems until they actually make sense. 
            The best part is seeing something messy turn into something that works.
        </p>
        <div className="pt-04 opacity-0 animate-fade-in-delay-1"> 
            <a href="#projects" 
            view my work
            className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors duration-300">
            </a>
        </div>
        <div className=" absolute bottom-8 left -1/2 transform -translate-x-1/2 flex flex-col items-center animate-boundary ">
          <span>
            scroll down
            <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
          </span>
        </div>

      </h1>

    </section>
    );
}