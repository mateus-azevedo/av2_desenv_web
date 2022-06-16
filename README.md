# AV2/AV3 - Desenvolvimento de Aplicações Web

## Centro Universitário Carioca - [UniCarioca](https://www.unicarioca.edu.br/)

Está avaliação faz parte da disciplina "Desenvolvimento de Aplicações Web" ministrada pelo Mestre Antonio Felipe Podgorski realizada no 5º período do curso [Análise e Desenvolvimento de Sistemas](https://unicarioca.edu.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas) coordenado por André Sobral e Marcelo Perantoni no ano de 2022.

---

## 💻 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Axios](https://axios-http.com/) para realizar requisições;
- [Firebase](https://firebase.google.com/) para armazenar os dados e realizar autenticação;
- [Bootstrap](https://getbootstrap.com/) para agilizar no estilo de alguns componentes;
- [Styled-Components](https://styled-components.com/) para estilização dos componentes e padronizar o projeto;
- [React Router](https://reactrouter.com/) para realizar as navegações e verificações de permissão de acesso;
- [Dotenv](https://create-react-app.dev/docs/adding-custom-environment-variables) para distribuir as credenciais secretas do projeto;

---

## 📋 Estrutura do projeto

Organizado por features
https://blog.matheuscastiglioni.com.br/como-organizar-projetos-em-react/

---

## 🤔 Como executar o projeto?

### Passo 1

- Configure o ambiente para executar a aplicação React neste link:
  [Como instalar o React.js](https://www.freecodecamp.org/portuguese/news/como-instalar-o-react-js-com-create-react-app/)

### Passo 2

- Clone o projeto para sua máquina local usando:
  `git clone https://github.com/mateus-azevedo/av2_desenv_web.git`

### Passo 3

- Crie um projeto Web no Firebase
  https://firebase.google.com/

- Copie as informações do objeto firebaseConfig
  - Estrutura do firebaseConfig
  ```js
  const firebaseConfig = {
    apiKey: "configuracaofirebase",
    authDomain: "configuracaofirebase",
    projectId: "configuracaofirebase",
    storageBucket: "configuracaofirebase.appspot.com",
    messagingSenderId: "configuracaofirebase",
    appId: "1:configuracaofirebase:web:configuracaofirebase",
  };
  ```
- Cole as informações entre aspas (") após o símbolo de igual (=) no arquivo `.env.example` no projeto
  https://github.com/mateus-azevedo/av2_desenv_web/blob/44e9fa1612ff96104d4d65a07033357d2d2275f2/.env.example#L7-L13

### Passo 4

- Crie uma conta no Portal do Desenvolvedor Marvel
  https://developer.marvel.com/

  Você receberá duas chaves:
  [IMAGEM DAS CHAVES]

- Cole as chaves após o símbolo de igual (=) no arquivo `.env.example` no projeto
  https://github.com/mateus-azevedo/av2_desenv_web/blob/44e9fa1612ff96104d4d65a07033357d2d2275f2/.env.example#L1-L5

### Passo 5

- Renomeie o arquivo `.env.example` para `.env`
- Execute o projeto com o comando no terminal `yarn start`

---
