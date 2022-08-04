var itemList = document.getElementById('items')
var form = document.getElementById('addForm')
itemList.addEventListener('click',removeItem)

form.addEventListener('submit',addItem)
function addItem(e){
    e.preventDefault();
  
    
    var newItem = document.getElementById('item').value;
  
    
    var li = document.createElement('li');
    
    li.className = 'list-group-item';
   
    li.appendChild(document.createTextNode(newItem));
  
    
    var deleteBtn = document.createElement('button');

  
   
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    var del  = document.createTextNode('X')
    deleteBtn.append(del)
  
  
    
    var edit = document.createElement('button')
  
        
    edit.setAttribute('type','button')
    console.log(edit)
    edit.className = "float-right"
    var n = document.createTextNode("Edit")
    edit.append(n)
    
    li.appendChild(edit)
    
    li.appendChild(deleteBtn);
    
    
  
    
    itemList.appendChild(li);
  }


  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  