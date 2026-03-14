
let url="https://universities.hipolabs.com/search?country=India";
let url2="https://jsonplaceholder.typicode.com/users";
let url3="http://api.football-data.org/v4/competitions/";

async function getUn(){
    let info=await axios.get(url2);
    return info.data;
}
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let getUniverse=await getUn();
    for(getUniverses of getUniverse)
    console.log(getUniverses);
});