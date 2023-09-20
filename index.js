let btnAll = document.getElementById("all");
let btnBreakFast = document.getElementById("breakfast");
let btnLunch = document.getElementById("lunch");
let btnShakes = document.getElementById("shakes");
let btnDinner = document.getElementById("dinner");
let container = document.querySelector(".container");

let limitedData = [];


const getData = async (info) => {
    const response = await fetch("./menu.json");
    let data = await response.json();
    if(info == "All"){
        printData(data);
    }
    else{
        limitedData = data.filter(dt => dt.category === info);
        printData(limitedData);
    }
}

const printData = (finalData) => {
    container.innerHTML="";
    for(let i=0;i<finalData.length;i++){

        const div1 = document.createElement("div");
        div1.classList.add("content");
        container.appendChild(div1);

        const img = document.createElement("img");
        img.setAttribute("src",finalData[i].image);
        div1.appendChild(img);

        const div_right = document.createElement("div");
        div_right.classList.add("right-side");
        div1.appendChild(div_right);
        
        const div_right_top = document.createElement("div");
        div_right_top.classList.add("right-top");
        div_right.appendChild(div_right_top);

        const h3 = document.createElement("h3");
        h3.innerText = finalData[i].name;
        div_right_top.appendChild(h3);

        const h6 = document.createElement("h6");
        h6.innerText = finalData[i].price;
        div_right_top.appendChild(h6);

        const p = document.createElement("p");
        p.innerText = finalData[i].text;
        div_right.appendChild(p);
    }
}

btnAll.addEventListener("click", (e) => getData(btnAll.innerHTML));
btnBreakFast.addEventListener("click", (e) =>  getData(btnBreakFast.innerHTML));
btnLunch.addEventListener("click", (e) => getData(btnLunch.innerHTML));
btnShakes.addEventListener("click", (e) =>  getData(btnShakes.innerHTML));
btnDinner.addEventListener("click", (e) => getData(btnDinner.innerHTML));

getData("All");