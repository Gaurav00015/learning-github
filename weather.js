//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//https://www.meteosource.com/api/v1/free/point?place_id=${name}&sections=all&timezone=UTC&language=en&units=metric&key=ym4zj20x7y3es9djac4dczoc73tiq33q88gt1ow2



const input=document.querySelector("input")
let btn=document.querySelector("button")
const card=document.querySelector(".card")
const h1=document.createElement("h1")
const h2=document.createElement("h2")
const h3=document.createElement("h3")
const h4=document.createElement("h4")
const h5=document.createElement("h5")
const h6=document.createElement("h6")
let name=""

card.append(h1,h2,h3,h4,h5)
input.addEventListener("input",(e)=>{
    name=e.target.value
    console.log(name);
})

async function getwheather(){
    if(name===""){
        alert("please enter location")
        return;
    }
    let res=await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${name}&sections=all&timezone=UTC&language=en&units=metric&key=ym4zj20x7y3es9djac4dczoc73tiq33q88gt1ow2`)
    let date= await res.json()
    console.log(date.daily.data[0]);
    let val=date.daily.data[0];
    // console.log(data);
    // if(!data.ok){
    //     alert(data.detail)
        
    // }
    // if(!data==refrence){
    //     alert("enter correct name")
    // }
    h1.textContent=`day:${val.day}`
    h2.textContent=`wather:${val.weather}`
    h3.textContent=`summary:${val.summary}`
    h4.textContent=`temperature:${val.all_day.temperature}`
    h5.textContent=`temperature min :${val.all_day.temperature_min}`
    h6.textContent=`temperature max :${val.all_day.temperature_max}`


    
}

btn.addEventListener("click",getwheather)