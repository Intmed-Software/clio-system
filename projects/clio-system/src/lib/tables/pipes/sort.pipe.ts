import { Pipe, PipeTransform } from '@angular/core';
import { IPipeOrder } from '../types_d';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(lista: any[], coluna: IPipeOrder) {
    console.log(lista, coluna )
    const orderingDesc = (a: any, b: any, chave: string): number => {
      if (a[chave] < b[chave]) {
        return -1;
      } else if (a[chave] > b[chave]) {
        return 1;
      } else {
        return 0;
      }
    };

    const orderingAsc = (a: any, b: any, chave: string): number => {
      if (a[chave] > b[chave]) {
        return -1;
      } else if (a[chave] < b[chave]) {
        return 1;
      } else {
        return 0;
      }
    };

    if (coluna) {
      const { key = null, ordering = null } = coluna;
      lista.sort((a: any, b: any) => {
        if (key)
          return ordering === "desc" ?
            orderingDesc(a, b, key) :
            orderingAsc(a, b, key);
        return 0;
      });
    }
    return lista;
  }
}
