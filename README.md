# chainsawman

- preciso criar um banco de dados onde posso salvar um usuário e uma senha para que seja feita uma verificação com a tela de login que já está construida em app



CRIAR UMA TABELA COM IFNROAMÇÕES SOBRE O QUE PODE ESTAR ERRADO A RESPE3ITO DO USUARIO OU SENHA AO CLICAR EM REGISTAR COM INFORMAÇÕES ERRADAS

arrumar as paletas de cores


eu criei dentro dos componentes enter e register uma lógicapara salvar em localstorage o usuário e senha e também para se caso hajam usuário e senha que seja preenchido automáticamente dentro do componente entrar


estou usando a biblioteca do react router para, dentro do componente App indicar duas rotas, a primeira "/" vai renderizar a tela de login (que renderiza dentro de si uma sequencia de componentes que formam a logica e o visual desta tela de logIn), e outra rota que renderiza uma página de teste.

O OBJETIVO É QUE APÓS FAZER A VALIDAÇÃO A ROTA SEJA MUDADA E SEJA RENDERIZADO O APLICATIVO:
por exemplo. ao clicar em entrar, a rota será mudada para (ex:"/main") renderizando assim um componente de aplicativo