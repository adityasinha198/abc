const s = document.querySelector(".list-group-item:nth-child(2)")
s.style.backgroundColor = "green"
const p = document.querySelector(".list-group-item:nth-child(3)")
p.style.visibility = "hidden"
const g = document.querySelectorAll("li")
g[1].style.color="green"
var odd = document.querySelectorAll("li:nth-child(odd)")
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green"
} 

// Query selector the fisrt element while Query selectorall select all the
//elements with same class name,tag name,id etc