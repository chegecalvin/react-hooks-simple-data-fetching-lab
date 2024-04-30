import React,{useEffect,useState} from "react";
const url="https://dog.ceo/api/breeds/image/random"

function App(){
    const[pic,setPic]=useState()

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then((data)=>setPic(data.message))
    },[])
    if(!pic){
        return <p>Loading...</p>
    }

    return(
        <img src={pic} alt="A Random Dog"/>
    )
}
export default App
