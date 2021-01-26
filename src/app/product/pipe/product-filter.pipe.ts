import { Pipe, PipeTransform } from '@angular/core';
import { data } from "../product";
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: data[], filterText?: string): data[] {
     filterText ? filterText.toLocaleLowerCase() : null;
  return filterText ? value.filter((p: data) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
