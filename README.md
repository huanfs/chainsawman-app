# Chainsawman anime APP

- this in an Chainsawman full-stack App able to:
1. Create an user name and password to logIn the App.
2. Login with previously created credentials.

## Project Goals

- i've made this project with two porposes. First i want learn back-end-technologies to built this project and second, i want to build this app for an friend who wants see the Chainsawman anime easy

### technologies

![Static Badge](https://img.shields.io/badge/react);
![Static Badge](https://img.shields.io/badge/sass)
![Static Badge](https://img.shields.io/badge/javascript)

1. *REACT* : the responsible layout built in react

2. *SASS* : using sass to build chained styles

3. *JAVASCRIPT* : using javascript to built JSX components

#### access

*access site in:* [chainsawman_app](https://huanfs.github.io/chainsawman_app);


---
###### notes :bookmark_tabs:
# chainsawman

- preciso criar um banco de dados onde posso salvar um usuário e uma senha para que seja feita uma verificação com a tela de login que já está construida em app



- CRIAR UMA TABELA COM IFNROAMÇÕES SOBRE O QUE PODE ESTAR ERRADO A RESPE3ITO DO USUARIO OU SENHA AO CLICAR EM REGISTAR COM INFORMAÇÕES ERRADAS

- arrumar as paletas de cores


- eu criei dentro dos componentes enter e register uma lógicapara salvar em localstorage o usuário e senha e também para se caso hajam usuário e senha que seja preenchido automáticamente dentro do componente entrar


- estou usando a biblioteca do react router para, dentro do componente App indicar duas rotas, a primeira "/" vai renderizar a tela de login (que renderiza dentro de si uma sequencia de componentes que formam a logica e o visual desta tela de logIn), e outra rota que renderiza uma página de teste.

- O OBJETIVO É QUE APÓS FAZER A VALIDAÇÃO A ROTA SEJA MUDADA E SEJA RENDERIZADO O APLICATIVO:
por exemplo. ao clicar em entrar, a rota será mudada para (ex:"/main") renderizando assim um componente de aplicativo


- eu preciso baixar as imagens dos episodios ou então gravar pequenos gifs de cada episodio para criar agora a tela do aplicativo principal pós login


- em Register devo corrigir os estados pois userName e userPassword estão como undefined: eu acho que os estados não estão sendo atualizados rapidamente pois quando eu mudo para " cost[userName, getUserName] = useState("ruan") o ruan fica salvo, mas quando eu tento salvar outra coisa sempre retorna undefined

- eu corrigi o erro na atualização do estado movendo a atualização de estado dentro da lógica de checar o usuário ou senha validos


- criar a página de main app!!!


- colocar dentro do componente enter o uso do hook navigate para que eu possa executar a animação d esmaecimento e so depois abrir a rota


- fazer dois botões embaixo e criar o scroll


- preciso salvar as imagens e as sinopses dentro de um array de objetos para renderizar todos eles após


- dentro do componente episode eu preciso cria-lo. decidi que o papel de parede de cada episódio será um personagem de perfil

- preciso criar um grid dentro de .episodePreview


- definir uma imagem de fundo que pode ate ser um gif, mas que seja meio fosca para não atrabalhar as leituras