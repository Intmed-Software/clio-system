### Dependencias adicionas

Nossa biblioteca conta com dependências adicionais. Esteja ciente:

- "@angular/cdk": "^12.2.8",
- "@angular/material": "^12.2.8",
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
