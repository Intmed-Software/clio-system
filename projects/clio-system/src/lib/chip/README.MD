## Usage

### APi

`import { IconModule } from '@clio-system/icon/icon.module';`

### component

```html

`<clio-chip> Label </clio-chip>`

## Usage

### APi

`import { IconModule } from '@clio-system/icon/icon.module';`

### component

```html

`<clio-chip> Label </clio-chip>`

Variants: 'outlined' | 'contained'
ColorProps: 'primary' | 'warning' | 'error' | 'success'


###### Close button

If you need to destroy the Chip:
`<clio-chip actionClose onClose="foo()"> Label - outlined </clio-chip>`


Some exemples:

`<clio-chip color="primary"> Label </clio-chip>`

`<clio-chip color="primary" [dark]="false"> Label </clio-chip>`

`<clio-chip color="warning"> Label </clio-chip>`

`<clio-chip color="warning" [dark]="false"> Label </clio-chip>`

`<clio-chip color="error"> Label </clio-chip>`

`<clio-chip color="error" [dark]="false"> Label </clio-chip>`

`<clio-chip color="success"> Label </clio-chip>`

`<clio-chip color="success" [dark]="false"> Label </clio-chip>`

`<clio-chip color="primary" variant="outlined"> Label - outlined </clio-chip>`

`<clio-chip color="warning" variant="outlined"> Label - outlined </clio-chip>`

`<clio-chip color="error" variant="outlined" (onClose)="testAlert()"> Label - outlined</clio-chip>`

`<clio-chip [actionClose]="true" color="primary"> Label </clio-chip>`

`<clio-chip [actionClose]="true" color="primary" [dark]="false"> Label </clio-chip>`

`<clio-chip [actionClose]="true" color="warning"> Label </clio-chip>`

`<clio-chip [actionClose]="true" color="warning" [dark]="false"> Label </clio-chip>`

`<clio-chip [actionClose]="true" color="error"> Label </clio-chip>`

`<clio-chip [actionClose]="true" color="error" [dark]="false"> Label </clio-chip>`

`<clio-chip actionClose color="success"> Label </clio-chip>`

`<clio-chip actionClose color="success" [dark]="false"> Label </clio-chip>`

`<clio-chip actionClose color="primary" variant="outlined"> Label - outlined </clio-chip>`

`<clio-chip actionClose color="warning" variant="outlined"> Label - outlined </clio-chip>`

`<clio-chip actionClose color="error" variant="outlined" (onClose)="testAlert()"> Label - outlined </clio-chip>`