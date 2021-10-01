### Dependencias adicionas

Nossa biblioteca conta com dependências adicionais. Esteja ciente:

- "material-design-icons": "^3.0.1",

### Instalação do projeto

`npm install clio-system` ou `yarn add clio-system`


### Ver documentação localmente

na raiz do projeto, rode:
`npm storybook` ou  `yarn storybook`

### Genarate

Para criar um novo recurso do clio-system, você deve:

Criar um novo módulo:
`ng g m nomeDoModulo --project=clio-system`

Depois crie um novo componente:
`ng g c nomeDoComponente --project=clio-system`

por fim, exporte os arquivos, componet, module e demais recursos que você considere úteis em public-api.ts
**Observação**: Obrigatoriamente, modulo e component devem ser exportados.

Para buildar a biblioteca, rode:
`npm cs:build` ou `yarn cs:build`


### Utils

[Clio library](https://www.figma.com/file/e7FDuNOCfxju0hI2n1QOTm/Design-System-Clio---Documenta%C3%A7%C3%A3o?node-id=32%3A539 "Clio library")

[material-icons](https://fonts.google.com/icons?selected=Material+Icons "material-icons")
