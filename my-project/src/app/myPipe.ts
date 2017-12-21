import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mycustompipe'
})
export class MyPipe implements PipeTransform{
    transform(value: string, type:string, size:number){
        if(type == 'upper'){
            value = value.toUpperCase();
        }
        else if(type == 'lower') value = value.toLowerCase();
        else ;
        value = value.slice(0,size);
        return value;
    }

}