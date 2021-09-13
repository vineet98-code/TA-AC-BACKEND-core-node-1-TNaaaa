var contants = {
    PI: 3.14,
}
function square(l){
   return l * l;
}
function rectangle(l, b){
   return l * b;
}
function circle(r){
   return Math.PI * r * r;
}


module.exports = {
    contants,
    square,
    rectangle,
    circle,
}
