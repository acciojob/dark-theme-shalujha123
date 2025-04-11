//your code here

let btnDay = document.getElementById("swap")
        let main = document.getElementById("app")
        function swapTheme(){
            if(main.classList.contains("day")){
                main.classList.remove("day")
                main.classList.add("night")
            }else{
                main.classList.remove("night")
                main.classList.add("day")
            }
            if(btnDay.classList.contains("button_day")){
                btnDay.classList.remove("button_day")
                btnDay.classList.add("button_night")
            }else{
                btnDay.classList.remove("button_night")
                btnDay.classList.add("button_day")
            }
        }
        btnDay.addEventListener("click",swapTheme)