# Next Level Foods App

O Next Level Foods App é uma aplicação web que permite aos usuários adicionar e visualizar suas receitas favoritas. Esta aplicação foi desenvolvida utilizando Next.js, better-sqlite3, React e Zod para fornecer uma experiência fácil e intuitiva para os entusiastas culinários compartilharem suas receitas. Baseda no curso Next.js 14 do Maximilian Schwarzmüller

## Funcionalidades Principais

- Adicionar Receitas: Crie suas próprias receitas, incluindo ingredientes, instruções e outras informações relevantes.

- Visualizar Receitas: Explore uma lista de receitas adicionadas por outros usuários. Encontre inspiração para suas próximas criações culinárias.

## Demonstração

![Screenshot da aplicação](/public/screenshot.png)
![Screenshot da aplicação 2](/public/screenshot-2.png)
![Screenshot da aplicação 3](/public/screenshot-3.png)

## Tecnologias Utilizadas

- Next.js: Framework React para construção de aplicações web.

- Better-sqlite3: Banco de dados SQLite para armazenar as receitas de forma eficiente.

- React: Biblioteca JavaScript para construir interfaces de usuário.

- Zod: Biblioteca para validação de esquemas de dados.

## Como Iniciar

### Pré-requisitos

- Node.js
- Git

## Instalação

```bash
# clone o repostitório do git
https://github.com/gugavillar/foodies.git

# entre no diretório
cd foodies

# instale as dependências
npm install
# or
yarn install
# or
pnpm install

# rode o banco de dados inicial
node initdb.js

# adicione no arquivo .env.local a api key do imgbb
IMGBB_APIKEY=valor_da_sua_api_key

# rode o projeto
npm run dev
# or
yarn dev
# or
pnpm dev
```

Acesse a aplicação em http://localhost:3000.

Licença
Este projeto é licenciado sob a Licença MIT.
