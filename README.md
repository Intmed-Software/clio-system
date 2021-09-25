###Referência Figma

O [Clio library](https://www.figma.com/file/e7FDuNOCfxju0hI2n1QOTm/Design-System-Clio---Documenta%C3%A7%C3%A3o?node-id=32%3A539 "Clio library") foi desenvolvido baseado na experiência do time de design da IntMed Softwares

Para criar um novo recurso do clio-system, você deve:

Criar um novo módulo:
`ng g m nomeDoModulo --project=clio-system`

Depois cria um novo componente:
`ng g c nomeDoComponente --project=clio-system`

por fim, exporte os arquivos, componet, module e demais recursos que você considere úteis em public-api.ts
**Observação**: Obrigatoriamente, modulo e component devem ser exportados.

Para buildar a biblioteca, rode:
`yarn cs:build`

