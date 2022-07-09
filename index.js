let btns1 = document.getElementsByClassName("btn1");
let btns2 = document.getElementsByClassName("btn2");
let home = document.getElementById("homeCounter");
let guest = document.getElementById("guestCounter");
let cleartBtn = document.getElementById("clear");
let count1 = 0;
let count2 = 0;

home.textContent = 0;
guest.textContent = 0;


for(let i = 0; i < 3; i++){
    btns1[i].addEventListener("click",function(){
        count1 += Number(btns1[i].dataset.set);
        home.textContent = count1;
        console.log(count1);;
    })
}

for(let i = 0; i < 3; i++){
    btns2[i].addEventListener("click",function(){
        count2 += Number(btns2[i].dataset.set);
        guest.textContent = count2;
        console.log(count1);;
    })
}


cleartBtn.addEventListener("click",function(){
    count1 = 0;
    count2 = 0;
    home.textContent = 0;
    guest.textContent = 0;
})