var obj ={ num:2}
function add(a,b,c)
{
    return this.num+a+b+c
};
console.log(add.call(obj,1,2,3))
arr = [1,2,3]
console.log(add.apply(obj,arr))
var p = add.bind(obj)
console.log(p(1,2,3))

var Student={age:20}

function info(){
    return this.age
}

var s = info.bind(Student)
console.log(s())