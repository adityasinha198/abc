
// 2-
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title= "abc"
console.log(document.doctype)
console.log(document.all)
document.all[10].textContent = "HELLO"
console.log(document.forms)
console.log(document.links)
console.log(document.images)

//3-
// Changes in style will cause changes in inner text but not in textcontent

const a = document.getElementById("header-title")
a.style.borderBottom="Solid 3px black"

// I have created new id in h2 element and by accessing ID of h2
b = document.getElementById("head2")
b.style.color="green"
b.innerHTML = "<h2><b>Add Items</b></h2>"

