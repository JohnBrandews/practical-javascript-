
COUNT DOWN GENERATOR//
let count = 0
document.getElementById("decreaseBtn").onclick = function () {
    count-=1
document.getElementById("countLabel").innerHTML = count
}

document.getElementById("resetBtn").onclick = function () {
    count=0
document.getElementById("countLabel").innerHTML = count
}

document.getElementById("increaseBtn").onclick = function () {
    count+=1
document.getElementById("countLabel").innerHTML = count
}
// random number generator//
let x = Math.floor(Math.random()*6) +1
console.log(x)
let x
let y
let z
document.getElementById("rollButton").onclick  = function () {
 x = Math.floor(Math.random()*6) +1
let y = Math.floor(Math.random()*6) +1
let z = Math.floor(Math.random()*6) +1

document.getElementById("xlabel").innerHTML = x
document.getElementById("ylabel").innerHTML = y
document.getElementById("zlabel").innerHTML = z

}
document.getElementById("resetBtn").onclick = function () {
    x = 0
    y = 0
    z = 0
    
document.getElementById("xlabel").innerHTML = x
document.getElementById("ylabel").innerHTML = y
document.getElementById("zlabel").innerHTML = z

}
