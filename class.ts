
export module m1{
	interface schoolRules{
		schoolArea : number;
		getArea():number;
		schoolLocality: string;
	}
	export class mySchool implements schoolRules{
		protected schoolName : string = 'ABC school';
		schoolArea;
		getArea():number{
			return this.schoolArea;
		}
		schoolLocality;
		constructor(){
			// this.schoolName = name;
		}
	}	
}
