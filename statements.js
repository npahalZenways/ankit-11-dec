var x = 16;

//nested if else
if(x == 5){
	console.log('X is equal to 5');
} else if(x == 10){
	console.log('x is equal to 10');
} else if(x == 15){
	console.log('x is equal to 15')
} else{
	console.log('x iis a different value')
}
var y = 'name'
//switch case
switch(y){
	case 'hello':
		console.log('y is equal to hello');
		break;
	case 'new':
		console.log('y is equal to new');
		break;
	case 'name':
		console.log('y is equal to name');
		break;
	default:
		console.log('y iis a different value');
}

//callbacks

function myCallback(callbackParam){
	console.log('>>>2<<< this is from callback: ', callbackParam);
}

function map(callback){
	console.log('>>>1<<< I\'m now going to use callback');
	callback('Callback parameter for anonymous fucntion');
	console.log('>>>3<<< I have used it');
}

map(function(anonymousCallbackParam){
	console.log('>>>2<<< this is from anonymous callback: ', anonymousCallbackParam);
});

map(myCallback);

//setTimeout(callback function, timeout) 1000 = 1 sec

setTimeout(function(){
	console.log('I\'m called after 5 seconds');
}, 5000)

//promises

function asyncFunction(param1){
	console.log('Async called');
	return new Promise((resolve, reject)=>{
		if(param1 == 'resolve'){
			setTimeout(()=>{
				resolve('this is resolved');
			},3000)
		} else{
			setTimeout(()=>{
				reject('this is rejected');
			},3000)
		}
	})
}

asyncFunction('resolve').then((res)=>{
	console.log('from then: ', res);
}).catch((res)=>{
	console.log('from catch: ', res);
});

map(myCallback);
