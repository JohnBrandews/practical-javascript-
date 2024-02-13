// you can use the getdocument to stiil prompt a user to enter values//

let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    console.log("username" + username)
    document.getElementById("myLabel").innerHTML = "username" +
}

let age = window.prompt("Enter your age")
 age=Number(age)
age += 2
console.log("your age is " + age)

let x;
let y;
let z;
z = Boolean("yes")
x = Number("3.78")
console.log(x,typeof x)
y = String(56)
console.log(y,typeof y)
console.log(z,typeof z)

let twitter;
document.getElementById("mytext").onclick = function () {
    twitter = document.getElementById("mybutton").value
    console.log(twitter)
}
let text;
document.getElementById("p3").value = text;

const PI = 3.14
let circumfrence
let radius
radius = window.prompt("enter the radius")
// radius = Number(radius)
circumfrence = radius*2*PI
console.log(circumfrence)

let t;

t =String("4112")
// console.log(t,typeof t)
let x 
let y = 20
let z = 10
let maximum;
let minimum;
maximum = Math.max( y, z)
minimum = Math.min( y, z)
console.log(maximum)
x = Math.PI;
console.log(x);

let a;
let b;
let c;
a = window.prompt("enter side a")
a = Number(a);

b= window.prompt("enter side b")
b = Number(b);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
// console.log(c,"the hypotenuse");

document.getElementById("submitButton") .onclick = function () {
    
a = document.getElementById("aTextbox").value;
a = Number(a);

b=  document.getElementById("bTextbox").value;
b = Number(b);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
document.getElementById("cLabel").innerHTML = "Side C:" + c;
}

