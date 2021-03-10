const menu = document.querySelector(".menu")
console.log(menu)

function showmenu(){
    console.log("work")
    let start = Date.now(); // запомнить время начала
    let timer = setInterval(function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
      }
      menu.style.width= (6+(0.15*timePassed))+ "%";
                        }, 20);
}