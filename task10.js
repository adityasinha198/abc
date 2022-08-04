var form = document.getElementById("my-form")
form.addEventListener('submit',add)
function add(a)
{   a.preventDefault()
    var a = document.getElementById("name")
    var b = document.getElementById("email")
    
    localStorage.setItem('Name',a.value)
    localStorage.setItem('Email',b.value)

}
