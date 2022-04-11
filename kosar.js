var jatek01 = 15500
var jatek02 = 6999
var jatek03 = 2980


function hozzaad(jatek) {
    db=Number(prompt("db:"))
    localStorage.setItem(jatek,db)
}

function torles(jatek,db){
localStorage.clear()
}
