var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Change(param) {
    return function (target) {
        console.log(target.prototype);
    };
}
var contactNumber;
var ClassName = (function () {
    function ClassName() {
        this.myProp = "hello";
    }
    ClassName.prototype.myName = function () {
        var name = 'hello';
        console.log(name);
    };
    ClassName = __decorate([
        Change('batting')
    ], ClassName);
    return ClassName;
}());
var myVariable = new ClassName();
console.log(myVariable.myProp);
function abc(myName) {
    return myName;
}
function bcd(param) {
    return param;
}
function array(array1) {
    return array1;
}
var myArray = array([1, 2, 3, 4]);
var num;
function test(padding) {
    if (typeof padding == 'string')
        console.log(padding);
    if (typeof padding == 'number')
        console.log(padding + "px");
}
function padding(padding) {
    if (typeof padding == 'string')
        console.log(padding);
    if (typeof padding == 'number')
        console.log(padding + "px");
}
padding('10px');
padding(20);
//# sourceMappingURL=myTsFile.js.map