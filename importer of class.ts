import {m1} from './class';
module m2{
	class myClassRoom extends m1.mySchool{
		classStrength : number;
		allStudentsInfo : object[];
		constructor(strength:number, students:object[], name:string){
			super();
			this.classStrength = strength;
			this.allStudentsInfo = students;
		}

		getAllStudents(): object[]{
			return this.allStudentsInfo;
		}
		getStrength(): number{
			return this.classStrength;
		}
	}
	class student extends myClassRoom{
		constructor(strength, students, name){
			super(strength, students, name);
		}
	}
	var newClass = new student(12, [{name: 'nitin'}],'ABC school');
	console.log(newClass);
	var oneMoreClass = new student(5, [{name:'amit'}], 'BCD school');
	console.log(oneMoreClass);	
}
