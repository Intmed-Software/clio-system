## Usage
<br/>
<br/>

### APi

`import { ButtonModule } from "@clio-system/button/button.module";`<br/><br/>

### Usage

```html
<clio-button> Enviar </clio-button>
```

If yout whant to pass label value instead of content, is possible to do like that:

```html
<clio-button label="enviar"></clio-button>
```
<br/>

### Variants


```html
<clio-button>  Main </clio-button>
<clio-button variant="text">  Text </clio-button>
<clio-button variant="outlined"> Outlined </clio-button>
<clio-button variant="contained"> Contained </clio-button>
```
###### *The component is contained by default*
<br/><br/>



### Loading

```html
<clio-button [loading]="variable"> Enviar </clio-button>

```

in case of infinite loading, you don't need to pass true hardcoded on input. Do this instead:
```html
    <clio-button loading> Enviar </clio-button>
```
###### *The component will be disabled automatically when loading*
<br/><br/>

### Sizes

```html
<clio-button size="small"> Enviar </clio-button>
<clio-button size="medium"> Enviar </clio-button>
<clio-button size="large"> Enviar </clio-button>
```
###### *The component will be medium by default*
<br/><br/>


### Fullwidth
If necessary, the button can fill the container to which it was inserted with a width of 100%

```html
    <clio-button [fullWidth]="true">  Full </clio-button>
    <clio-button fullWidth>  Full </clio-button>
```