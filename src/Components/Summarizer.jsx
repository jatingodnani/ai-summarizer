import { useEffect, useState } from "react"
import { linkIcon,loader,copy,tick,submit } from "../assets"
import { apirequest } from "../apirequwst"
export const Summarizer = () => {
  const [article,setarticle]=useState({
    url:"",
    summary:""
  })
  const [history,sethistory]=useState(["https://google.com"]);
 


  const [loading,setloading]=useState(false);
  

  // const handlesubmit=async(e)=>{
  //   e.preventDefault();
  //   setloading(true)
  //   try{
  //    // await apirequest(article,setarticle);
  //     if(article.summary){
  //       setloading(false)
  //     }
  //     sethistory([...history,article.url])
  //     localStorage.setItem('all-article',JSON.stringify(history));
  //     setarticle({...article,
  //     url:""})
  //     }catch(error){
  //     console.log(error)
  //   }
  // }

  return (
    <section className="mt-12 w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-2 w-full">
        <form className="relative  flex justify-center items-center"
        onSubmit={handlesubmit}
        > 
          <img src={linkIcon} alt="no" className="w-5 absolute left-2 font-bold"/>
          <input type={"url"} 
          placeholder="Enter a Url"
          className="bg-white rounded-md w-full  border border-gray-200 py-2 px-10 text-sm shadow-lg font-satoshi font-medium focus:outline-none focus:border-black focus:ring-0"
          value={article.url}
          onChange={(e)=>setarticle({...article,
            url:e.target.value
          })}
          required/>

          <button 
          type="submit"
          >
            <img src={submit} className="absolute w-6 right-2 bottom-1 "/>
            </button>
                  </form>

                  <div className="flex flex max-h-60 overflow-y-auto">
                    {/* {history.map((item,index)=>{
                         <div 
                         className="flex flex-row justify-start items-center p-3 bg-white border
                          border-gray-200 gap-3 rounded-lg cursor-pointer"
                          onClick={setarticle(item)}>
                            <div>
                              <img src={copy}/>
                            </div>

                          </div>
                    })} */}
                  </div>
      </div>
    </section>
  )
}
