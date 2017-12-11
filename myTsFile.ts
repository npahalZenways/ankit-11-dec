
function Change(param){
	return function(target){
		console.log(target.prototype)
		// target.prototype.myProp ;
	}
}


var contactNumber : number;
@Change('batting')
class ClassName{
	myProp:string="hello";
	myName(){
		var name = 'hello';
		console.log(name);
	}

	constructor() {
		// code...
	}
}
// var info : object = {
// 	address: "Delhi"
// }
// var isTrue : boolean;
// var numbers : number[] = [1,2,3,4];
// var allNames : string[] = ['djchxb'];
// var objectArray : object[] = [info, {name: "NewAne"}];
// var defaults :any;
// var deafultsArray :any[]= [1];
// deafultsArray.push('string');
// enum naming {nitin = 1, amit = 100, dvcjs = 1000};
// var newName : naming = naming.amit;
// console.log(newName);
// var aName = naming[1];
// console.log(aName);
// var combination : [number, string];


var myVariable = new ClassName();
console.log(myVariable.myProp);

function abc(myName:string):string{
	return myName;
}

function bcd<U>(param:U):U{
	return param;
} 

function array<T>(array1:T[]):T[]{
	return array1;
}

var myArray = array<number>([1,2,3,4])

var num: Array<number>

function test(padding:any){
	if(typeof padding == 'string')
		console.log(padding);
	if(typeof padding == 'number')
		console.log(padding + "px");
}

// test('10px');
// test(20);

//unions
function padding(padding: string | number){
	if(typeof padding == 'string')
		console.log(padding);
	if(typeof padding == 'number')
		console.log(padding + "px");	
}

padding('10px');
padding(20);

// function twoGen<T & U>(p1:T, p2:U) T & U{
// 	return p1
// }