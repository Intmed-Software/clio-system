## Usage

### APi
`import { BuscadorComponent } from '../components/buscador/buscador.component';`

### component

###### html

    <clio-table
        [headers]="headers"
        [rows]="listaDeMedicamentos"
    ></clio-table>

###### ts

Create a header base on the types rules:

`headers = [
    { name: 'Name', key: 'name' },
    { name: 'Email', key: 'email' },
    { name: 'Action' },
];`

Exemples of custumization

    <clio-table
        [headers]="headers"
        [loading]="false"
        [rows]="listaDeMedicamentos"
        [rowsTemplate]="rowsTemplate"
        [itemsPerPage]="5"
        showPagination
    ></clio-table>


    <ng-template #rowsTemplate let-row="row">
        <td>{{ row.codigo }}</td>
        <td>{{ row.nome }}</td>
        <td>{{ row.apresentacao }}</td>
        <td>{{ row.principios_ativos }}</td>
        <td>
            <clio-button> label </label>
        </td>
    </ng-template>

