# Elo - Front


---
## Dependências

### Yarn
  Este projeto utiliza `yarn`, para instalá-lo, basta executar o seguinte comando:
  
      $ npm install -g yarn
---

Depois que finalizar a instalação, execute-o com o comando a seguir para instalar os pacotes do projeto:
  
      $ yarn
---

## Configure o serviço de api

Crie o arquivo .local.env na raíz do projeto antes de iniciar o app, substituindo `link-da-api` pela URL do seu backend:

     NEXT_PUBLIC_API_URL=https://link-da-api/
- DB_USER: usuário do banco de dados
- DB_PASS: usuário do banco de dados
- DB_HOST: endereço do banco de dados
- DB_DATABASE: nome do Database
- PORT: porta do server
- API_SECRET: chave do jwt


## Executando a aplicação

      $ yarn start


## Buildando a aplicação

      $ yarn build


## Executando a aplicação em produção

      $ yarn prod
