var form = document.getElementById("my-form")
form.addEventListener('submit',add)
function add(e)
{   e.preventDefault()
    var a = document.getElementById("name")
    var b = document.getElementById("email")
    
    
    let obj = 
    {
        Name:a.value,
        Email:b.value

    }
    let s = JSON.stringify(obj)
    localStorage.setItem("User-Detail",s)
    console.log(localStorage)

}
