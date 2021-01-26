import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productVat'
})
export class ProductVatPipe implements PipeTransform {

  transform(value: number,args?: number): number {
    var vatPercentage:number=18; // Adım 2
    if(args){
     vatPercentage = args;
    }
    return value +(value/100*vatPercentage);
  }

}

