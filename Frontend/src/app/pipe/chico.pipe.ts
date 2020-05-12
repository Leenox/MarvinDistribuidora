import { Pipe, PipeTransform } from '@angular/core';



@Pipe({name: 'chico'})
export class ChicoPipe implements PipeTransform{

    transform(value: string) {
        return value.toUpperCase();
    }

}