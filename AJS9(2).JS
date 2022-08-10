let multiply = function(x,y){
    console.log(x*y)

}

let multiplytwo = multiply.bind(this,2)
multiplytwo(3)
let multiplythree = multiply.bind(this,3)
multiplythree(2)

let multi = function(a)
{
function p(b)
{
    console.log(a*b)
}
return p
}
let multitwo = multi(2)
multitwo(3)
let multithree = multi(3)
multithree(2)
