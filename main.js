let url="https://catfact.ninja/fact"

var facts=document.getElementById("new");
facts.addEventListener("click",()=>{
fetch(url)
.then((res)=>{
    
    return res.json()
    .then((data)=>{
        let factss= document.getElementById("data")

        factss.innerText=data.fact;
        console.log(data.fact)
        
    })
})
.catch((err)=>{
    console.log("error",err);
})

})
