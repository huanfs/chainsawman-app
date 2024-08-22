# chainsawman anime app
> Este projeto foi criado para colocar em prática os meus conhecimentos com as tecnologias do front-end e do back-end
---
| front-end | back-end |
|----------------------|
|![Static Badge](https://img.shields.io/badge/react-blue) | ![Static Badge](https://img.shields.io/badge/express-yellow)|
|![Static Badge](https://img.shields.io/badge/html5-orange) | ![Static Badge](https://img.shields.io/badge/sql-purple)|
|![Static Badge](https://img.shields.io/badge/css3-lightblue) | ![Static Badge](https://img.shields.io/badge/MySQL-pink)|
| ![Static Badge](https://img.shields.io/badge/javascript-yellow) | ![Static Badge](https://img.shields.io/badge/sequelize-green) | ![Static Badge](https://img.shields.io/badge/sass-purple)

---

## instruções de uso
1. para ter acesso à todos os recursos e funcionalidades existentes até agora, é necessário clonar este repositório para seu diretório local, então configurar o banco de dados MySQL corretamente na sua máquina: [baixar o MySQL](https://www.mysql.com/).
2. dentro do diretório API/database mudar no arquivo **db.js** as informações de conexão ao banco de dados com as suas próprias configurações (criadas no momento da instalação do MySQL) como: nome do banco de dados, adiministrador do banco de dados e senha do adiministrador.
3. inicie o servidor (arquivo API/server.js) utilizando o node, nodemon, ou outro de sua preferência.
4. inicie o servidor para os arquivos estáticos com o comando **npm run dev**.
5. agora o front será capaz de realizar requisições de adição, busca e exclusão de usuários no banco de dados no momento de cadastro ou login.

### componentes
> abaixo vai uma lista de cada componente, e seu funcionamento

1. **src/components/enter/Enter.jsx**
    - o Componente Enter é o responsável por renderizar a parte da interface responsável por receber o nome de usuário e a senha para validação de usuário no banco de dados, este componente usa dois hooks do react, sendo eles o **useRef** e o **useEffect**. o useRef é usado para referenciar as labels  e os inputs de usuario e senha respectivamente. temos a importação do hook **useNavigate** do _react-router-dom_ e também a importação de um contexto.
    temos então duas variaveis, uma recebendo o hook useNavigate e uma recebendo o contexto.
    Quando o componente é montado, um primeiro hook useEffect define os estilos das duas labels para `display:none` ocultando-as.
    um segundo hook useEffect vai observar as variáveis de estado **userName** e **userPassword** que estão sendo importadas do contexto, caso haja algum valor definido dentro delas, define no localStorage dois itens, um para o UserName e outro para o userPassword.
    um terceiro hook useEffect vai observar se localStorage contém os itens userName e userPassword, caso haja valores, define os inputs de usuario e senha com os respectivos valores.
    **`Enter(event)`** é a função responsável por lidar com a autenticação dos dados inseridos (caso atendam aos requisitos), essa função vai checar se os valores atuais dentro dos inputs usuario e senha correspondem aos valores salvos no localStorage para userName e userPassword,caso os valores correspondam,(define as labels como `display:none` e retira a borda vermelha dos campos de input) inicia a função **AutenticarUsuario()**. caso os valores sejam diferentes, define as labels que anteriormente tinham um `display:none` para `display:flex`. além disso define a cor das labels como `color:var(--VibrantRed)`.
    a função **`AutenticarUsuario()`** vai fazer uma requisição **POST** para a API passando duas variaveis, usuario e senha que são respectivamente os valores de usuario e senha dentro dos campos de input no momento que a função é chamada, por fim inicia um timeout de 900 milésimos de segundo para mudar a rota com o hook useNavigate acessando assim a página principal da aplicação.

2. **src/components/episode.Episode.jsx**
    - no componente episode importamos o contexto global para dentro da variável **episode**, utilizamos então `episode.setEpisode` para mudar o valor da variável de estado _episode_ que está dentro do contexto global.
    - renderizamos uma div .episode e atribuimos a ela um evento de clique para ativar a função **GetEpisode()**, essa função vai captar o atributo src do elemento clicado, e vai captar o _innerHTML_ do elemento anterior ao elemento clicado, então chama o _setEpisode_ do contexto para alterar o nome do episódio (passando o innerHTML capturado) e mudar a imagem de fundo contida dentro das variável **cover** dentro do contexto.
    
3. **src/components/episodeCover/EpisodeCover.jsx**
    - este componente irá utilizar os hooks **useState**, **useEffect** e **useRef** do react. usará também alguns icones da biblioteca **react-icons** e também vai importar variáveis do contexto global dentro da variável **episodeSelection**.
    - temos uma variável de estado chamada **focus** que é responsável por captar se um elemento estará em foco ou não.
    - temos duas referencias, **poster** e **icon_play**, _poster_ é uma referencia a imagem contida dentro da div _.poster_ e _icon_play_ é uma referencia a ao icone de "play" que também está dentro da div _.poster_.
    - temos a função **Focusable()** que alterna o estado da variável focus entre _true_ e _false_.
    - utilizamos o hook **useEffect** para atribuir eventos de _mouseout_ e _mouseover_ á `poster.current` onde ao entrar e sair com o mouse a função _Focusable_ será chamada alternando o estado da variável _focus_.

4. **src/components/form/Form.jsx**
    - o componente **Form.jsx** importa para dentro de si os componentes **Enter.jsx** e **Register.jsx**, importa também o contexto global dentro da variável **enterOrRegister**.
    - usamos o contexto global para acessar o valor da variavel **enter** que pode ser _true_ ou _false_. se for true, renderiza o componente **Enter.jsx** e se for false, renderiza o componente **Register.jsx**.

5. **src/components/headerNavigation/HeaderNavigation.jsx**
    - utliza os hooks **useEffect** e **useRef** do react. utiliza o **Link** do _react-router-dom_ e importa o contexto global dentro da variável **appSection**.
    - temos uma referencia chamada **btns** que inicia com calor nulo, mas usamos o **useEffect** para capturar todos os botões dentro da tag `nav className="navigation` e atribuimos a cada um destes botões o evento de clique que chama a função **Navigate(event)**, essa função vai alterar o valor da variável **appSection** contida no contexto global e vai atribuir a ela o valor _innerHTML_ do botão clicado.

6. **src/components/loginScreen:LoginScreen.jsx**
    - importamos o componente **Form.jsx**. importamos o **GlobalStorage** para encapsular o nosso componente para ceder acesso as variáveis de contexto global.

7. **src/components/mainApp/MainApp.jsx**
    - importamos os componentes **HeaderNavigation.jsx**, **EpisodeCover.jsx**, **Episode.jsx**, **Seasons.jsx** e **Sinopse.jsx**. importamos o contexto global para dentro da variavel **appSection** e utilizamos a variável de estado global **appSection** para renderizar os componentes que foram importados dependendo do valor da variável.

8. **src/components/register/Register.jsx**
    - utiliza os hooks **useState**, **useRef** e **useEffect** do react, importa o contexto global dentro da variavel **registerOptions**, define uma variável de estado chamada **errorWithData** e cria duas varíaveis de estado **userName** e **userPassword**, também cria três referencias **user**, **password** e **confirmPassword** que são responsáveis respectivamente por: input do nome do usuário, input da senha, input de confirmar a senha para registro.
    - **CheckUserName(event)**  observa se o valor contido em `user.current` atende a alguns requisitos, caso sim define o valor da variavel userName com o valor do input (`setUserName(event.target.value)`). caso contrário aplica estilos com bordas vermelhas a user.current.
    - **CheckPassword(event)** observa se os valores de password.current e checkPassword.current são iguais, caso sejam define o valor da variavel _userPassword_ com o valor contido em password.current (`setUserPassword(event.target.value)`). e aplica estilos de borda na cor verde tanto para password.current e confirmPassword.current. caso contrário define estilos com borda vermelha a ambos. **confirmUserName()** e **CheckPassword()** são ativadas com o evento _onChange_ dos inputs.
    - a função **Register(event)** checa se o valor de _password.current_ é diferente de _confirmPassword.current_ ou se _user.current.length_ é menor que 6, caso alguma dessas condições seja verdadeira define a variavel **errorWithData** como true.
    - do contrário. salva o nome de usuário e senha de usuário captados nos inputs em userName e userPassword, respectivamente e define _errorWithData_ como false. por fim acessa a variável global **enter** e altera seu valor ao oposto (true ou false) então chama uma função assíncrona **CreateNewUser()** passando as variáveis userName e userPassword dentro do objeto dados para a API.
    - por fim usamos o **useEffect** que vai observar as variáveis userName e userPassword e salvar seus valores dentro do contexto global userName e userPassword.

9. **src/components/videoPlayer/videoPlayer.jsx**
    - renderiza uma *tag video* que recebe o caminho através do contexto global no estado **videoSource**,
    renderiza também um botão que altera o estado de **videoSource** para **null* fechando assim **video**








