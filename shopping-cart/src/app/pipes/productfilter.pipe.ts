import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(items: Product[], searchTerm:string): Product[] {
     return items.filter(x=> x.title.toLowerCase().includes(searchTerm.toLowerCase()) == true);  
  }

}
