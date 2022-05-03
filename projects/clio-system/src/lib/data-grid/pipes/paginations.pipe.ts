import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pagination',
	pure: false,
})
export class PaginationPipe implements PipeTransform {
	transform(lista: any[], itemsPerPage: number, currentPage: number) {
		if (!itemsPerPage) {
			return lista;
		}
		const result = lista.reduce((resultArray, item, index) => {

			const chunkIndex = Math.floor(index / itemsPerPage);

			if (!resultArray[chunkIndex]) {
				resultArray[chunkIndex] = [];
			}

			resultArray[chunkIndex].push(item);

			return resultArray;
		}, []);

		return result[currentPage];
	}
}
