let person = prompt("İsminiz giriniz")
document.getElementById("myName").innerHTML = person
console.log("date")

 function showTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var day = now.getDay();

   


    (hour<10)? document.getElementById("hour").innerText="0"+hour+":":
                document.getElementById("hour").innerText=hour+":";
    (minute<10)? document.getElementById("minute").innerText="0" + minute+":":
                 document.getElementById("minute").innerText=minute+":";
    (second<10)? document.getElementById("second").innerText="0" + second:
                 document.getElementById("second").innerText=second +"  "+ gunler[day];    
                 
}
setInterval(function(){showTime();}, 1000);
