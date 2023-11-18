import axios from "axios"

export const apirequest=async(article,setarticle)=>{
  

const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize';
const apiKey = 'dc02866036msh7aa5933659fc2dfp10bd4fjsn3dd4c4e4fe58';

const params = {
  url: `${article.url}`,
  length:"3"
};

const headers = {
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
};

await axios.get(url, { params, headers })
  .then((response)=>{
    
   setarticle({...article,summary:response.data.summary})
  })
  .catch((error)=> {
    console.error(error);
  });

}
//apirequest("https://time.com/6266679/musk-ai-open-letter/")