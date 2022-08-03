var items = document.getElementsByClassName("list-group-item")
console.log(items)
console.log(items[1])
items[1].textContent="Hello"
items[2].style.fontWeight = "bold"
items[1].style.backgroundColor = "yellow"
for(var i=0; i<items.length;i++)
{
    items[i].style.backgroundColor = "gray"
}
items[2].style.backgroundColor = 'green'
for(var i=0; i<items.length;i++)

{
    items[i].style.fontWeight = "bold"
}