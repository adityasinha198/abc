var itemlist = document.querySelector("#items")
console.log(itemlist.parentElement)
console.log(itemlist.lastElementChild)
console.log(itemlist.lastChild)
console.log(itemlist.firstElementChild)
console.log(itemlist.firstChild)
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)
var ele = document.createElement("div")

ele.setAttribute("title","Hello")

var val = document.createTextNode("Hello")
ele.append(val)
console.log(ele)

var ele1 = document.createElement("div1")

ele1.setAttribute("title","Hello")

var val1 = document.createTextNode("Hello")
ele1.append(val1)
console.log(ele1)




var after = document.querySelector('#items')
console.log(after)
var before = itemlist.firstElementChild
after.insertBefore(ele,before)

var after1 = document.querySelector('header .container')
console.log(after1)
var before1 = document.querySelector('header h1')
console.log(before1)
after1.insertBefore(ele1,before1)





