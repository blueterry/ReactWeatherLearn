var names=['Terry','Andrew', "Jen"];
names.forEach(function(name){
    console.log('forEach',name);


});

names.forEach((name)=>{
    console.log('arrowFunc', name)
});

names.forEach(name => console.log('simpleArr:', name));

var returnMe = name => name + '!';
console.log(returnMe('Terry'));

var person={
    name: 'Master',
    greet: function(){
        names.forEach((name)=>{
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

person.greet();

function add (a,b){
    return a+b;
}

console.log('add 1+2', add(1,2));
console.log('add 9+9', add(9,9));

//add statement
var add1 =(a, b) =>{return a+b;}
console.log('3+2', add1(3,2));

var add2 = (a, b)=> a + b;
console.log('4+5', add2(4,5));