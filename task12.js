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
    localStorage.setItem(a.value,s)
    console.log(localStorage)
    const parentNode = document.getElementById("users")
    
    for (let i =0;i<localStorage.length;i++)

    { let p =(localStorage.key(i))
        let q = (localStorage.getItem(p))
     
       
        const inner = `<li>${q}<li> `
        parentNode.innerHTML= parentNode.innerHTML +inner
    }

  
}
