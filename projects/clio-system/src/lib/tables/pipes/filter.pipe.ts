import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(lista: Array<any>, termo?: string, campos?: string[]): any {
    if (!termo)
      return lista;

    if (campos)
      return lista.filter(
        item => {
          for (const field of campos) {
            if (this.verificacao(item[field], termo))
              return true;
          }
          return;
        }
      );

    return lista.filter(
      item =>
        Object.keys(item).some(
          atributo => this.verificacao(
            item[atributo],
            termo
          )
        )
    );
  }

  verificacao(val: string, termo: string) {
    return !val ? false : val
      .toString()
      .toLowerCase()
      .includes(termo.toLowerCase());
  }
}
