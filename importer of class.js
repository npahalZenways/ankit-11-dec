"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var m2;
(function (m2) {
    var myClassRoom = (function (_super) {
        __extends(myClassRoom, _super);
        function myClassRoom(strength, students, name) {
            var _this = _super.call(this) || this;
            _this.classStrength = strength;
            _this.allStudentsInfo = students;
            return _this;
        }
        myClassRoom.prototype.getAllStudents = function () {
            return this.allStudentsInfo;
        };
        myClassRoom.prototype.getStrength = function () {
            return this.classStrength;
        };
        return myClassRoom;
    }(class_1.m1.mySchool));
    var student = (function (_super) {
        __extends(student, _super);
        function student(strength, students, name) {
            return _super.call(this, strength, students, name) || this;
        }
        return student;
    }(myClassRoom));
    var newClass = new student(12, [{ name: 'nitin' }], 'ABC school');
    console.log(newClass);
    var oneMoreClass = new student(5, [{ name: 'amit' }], 'BCD school');
    console.log(oneMoreClass);
})(m2 || (m2 = {}));
//# sourceMappingURL=importer of class.js.map