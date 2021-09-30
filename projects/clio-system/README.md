### Referência Figma

O [Clio library](https://www.figma.com/file/e7FDuNOCfxju0hI2n1QOTm/Design-System-Clio---Documenta%C3%A7%C3%A3o?node-id=32%3A539 "Clio library") foi desenvolvido baseado na experiência do time de design da IntMed Softwares

### Documentação:

// colocar o link da documentação no futuro

### Usage
Para utilizar a biblioteca angular em seu projeto, basta ir até o module
e importar o modulo especifico, depois injeto-lo nos imports:

`import { CardModule } from "clio-system";`

`imports: [CardModule, ...]`

Após isso, chame a tag seletora referente em seu html

`<cs-card> ... </cs-card>`
### Dependencias adicionas

Nossa biblioteca conta com dependências adicionais. Esteja ciente:

- "@angular/cdk": "^12.2.8",
- "@angular/material": "^12.2.8",
- "material-design-icons": "^3.0.1",
