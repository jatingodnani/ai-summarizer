
import {logo} from "../assets";
export const Header = () => {
  
  return (
    <header className="w-full   border border-black flex flex-col items-center justify-center">
    <nav className="w-[90%] h-full  flex items-center justify-between mb-10 mt-6">
        <img src={logo} className="ml-6 w-28 object-contain"/>
         <button className="p-1 w-[90px] font-bold  text-white 
         transition-all bg-black hover:text-black hover:bg-white text-center rounded-full border border-black">GitHub</button>
    </nav>
    <h1 className="sm:text-6xl text-5xl font-extrabold mt-5 text-center text-black">
        Summarize Article With<br className="max-md:hidden"/>
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent ">OpenAI GPT-4</span>

    </h1>
    <h2 className="mt-5 text-gray-600 sm:text-xl tex-lg text-center max-w-2xl">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}
