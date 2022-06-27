 <h1 align="center">Multi Steps Form</h1>



###
Esse app tem como objetivo principal cadastrar novos clientes através de um formulário multi stepper (passo a passo). 
Após a finalização do cadastro os clientes poderão ser listados, através do botão “listar clientes” localizado no menu lateral


O projeto está hospedado na vercel [Multi Steps Forms](https://mult-stap-form-challeng.vercel.app/)
## Instalação

Para rodar esse projeto no seu computador será necessário ter o node instalado em sua máquina
e também o git para clonar o repositório  do projeto.

caso use o protocolo https em seu git, utilize o comando

```bash
git clone https://github.com/srsifer/mult-stap-form-challeng.git
  cd mult-stap-form-challeng
  npm install
  npm run dev
  visite http://localhost:3000/

```

caso use o protocolo ssh em seu git, utilize o comando

```bash
  git clone git@github.com:srsifer/mult-stap-form-challeng.git
  cd mult-stap-form-challeng
  npm install
  npm run dev
  visite http://localhost:3000/
```


## tecnologias
<div>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=black" />
  </a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    <img src="https://img.shields.io/badge/html5-339933?style=for-the-badge&logo=html5&color=black" />
  </a>
  <a href="https://www.w3schools.com/cssref/">
    <img src="https://img.shields.io/badge/css-339933?style=for-the-badge&logo=css3&color=black" />
  </a>
  <a href="https://pt-br.reactjs.org/docs/getting-started.html">
    <img src="https://img.shields.io/badge/React-339933?style=for-the-badge&logo=react&color=black" />
  </a>
  <a href="https://redux-toolkit.js.org/introduction/getting-started">
    <img src="https://img.shields.io/badge/redux--toolkit-339933?style=for-the-badge&logo=redux&color=black" />
  </a>
  <a href="https://styled-components.com/docs">
    <img src="https://img.shields.io/badge/Styled--Components-339933?style=for-the-badge&logo=styledcomponents&color=black" />
  </a>
</div>


## O formulário
Essas foram as tecnologias utilizadas para construir esse app.
Como se trata de um simples SPA(single page application) decidi fazer a renderização do formulário dentro de um modal, para isso utilizei uma biblioteca chamada react-modal, ela traz componente de modal de simples implementação o’que me pouparia bastante tempo
<br />
 
## Validação dos campos
Para fazer as validações dos campos utilizei uma biblioteca chamada Joi
que traz uma maneira simples e rápida de validar dados  quando um dado está fora da regra descrita pelo joi podemos executar uma ação. então utilizei a biblioteca react-toatfy para renderizar pop-ups com as mensagens de erros que eu havia criado no joi
<br />
 
## Captura de dados
Os passos um, dois e três são responsáveis por capturar os dados e salvá-los no local storage sendo assim o quarto passo responsável por transformar esses três objetos em um e dispará lo para o estado global da aplicação(redux). logo em seguida esvaziamos o localstorage ainda no quarto passo e exibimos a mensagem de “cadastro realizado com sucesso”
<br />
 
## A renderização da lista 
Para fazer a renderização, lemos os dados que foram salvos no redux
Essa renderização é condicional, caso não tenha nenhum dado no estado global ela irá renderizar “nenhum cliente cadastrado”.
ao clicar em um cliente  surgirá um modal com todos os dados do mesmo
<br />
 
## Estilização
eu optei por utilizar a biblioteca styled-Componentes, com ela é possível criar componentes de estilização  que além de deixar o código mais limpo e escalável 
traz um maior reaproveitamento do mesmo, além de ser mais fácil de aplicar lógica javascript dentro do css devido a sua sintaxe, o'que me possibilitou criar  a barra de progresso no topo do formulário e o menu lateral
<br />
 
## Deploy

Para fazer o deploy desse projeto basta efetuar  um simples push da branch master,
pois a aplicação está implantada na vercel, e a mesma configura automaticamente os conceitos de CI & CD.
Você pode visualizar o app através deste   [Link](https://mult-stap-form-challeng.vercel.app/)


```bash
  git push origin master
```


## Melhorias futuras

1 - renderização da lista de clientes salva no localestorage

2 - themas dark/light

3 - paterns de validação do campo 

4 - deixar o input na coloração vermelha quando indicando o campo onde ocorreu o erro de validação

