# O countag

O countag tem como objetivo contar as tags HTML de uma URL fornecida por um usuário. Além disso, também é possível visualizar o histórico de consultas feitas por esse usuário.

Esse projeto foi desenvolvido utilizando as tecnologias Node.js e React para back-end e front-end, respectivamente. O banco de dados utilizado foi o MySQL.

## Como instalar:

- 1º passo:
  
É nescessário instalar o banco de dados. A versão utilizada no desenvolvimento desse projeto foi a 8.0, você pode instála-la [aqui](https://dev.mysql.com/downloads/installer/).
Ao instalar, não se esqueça do workbench.

Após a instalação, o MySQL pedirá para você criar uma senha para conexão, copie essa senha e cole no arquivo connection.js, no campo "password":

![image](https://github.com/carollbrunetto/countag/assets/74271137/84c8b025-1604-4d2d-84e9-e4d1a46ecb72)

- 2º passo:
  
Se seu computador não tiver o Node.js instalado e React baixado, é necessário realizar ambos.

- 3º passo:
  
Clone o projeto no seu computador, abra um terminal no diretório raiz do projeto e digite o comando "npm install".

## Como utilizar

Para subir o projeto é necessário abrir dois terminais. No primeiro, você deve navegar até o diretório do back-end através do comando "cd '.\countag - Back-End\'" e rodar o comando "npm run dev". No segundo, você deve navegar até o diretório do front-end através do comando "cd '.\countag - Front-End\'" e rodar o comando "npm start".
Pronto! O projeto está rodando e abrirá automaticamente uma página no endereço localhost:3000.

O countag é composto de 3 telas:

- Tela Home:

![image](https://github.com/carollbrunetto/countag/assets/74271137/ed0ee85d-6fc0-49c7-ba0f-615a9a676a94)


É nesta tela que a URL pode ser inserida, basta digitá-la no campo de pesquisa e pressionar enter ou clicar no ícone de lupa ao lado.

O countag írá renderizar na tela uma tabela com as tags presentes no HTML da URL fornecida e suas respectivas quantidades.

A tela Home pode ser acessada no item "Home" do menu ou clicando na logo.

- Tela Histórico:

![image](https://github.com/carollbrunetto/countag/assets/74271137/76c09645-9bc5-428f-abb3-da03a937fe32)


Nesta tela é possível visualizar uma listagem do histórico de consultas já feitas e também cada uma delas individualmente através do botão "Visualizar".

A tela Histórico pode ser acessada no item "Histórico" do menu.

- Tela Visualizar Consulta:

![image](https://github.com/carollbrunetto/countag/assets/74271137/37f80cc9-7c3d-4f9f-928b-eb19276f3abb)


Nesta tela é possível ver os dados de uma consulta realizada anteriormente.

O acesso a esta tela é feito por meio do botão "Visualizar" de cada consulta presente na tela Histórico.

## Observações

- Cada vez que o projeto é reiniciado, o banco de dados é refeito e portanto as consultas anteriores serão perdidas.

- O projeto ainda está em desenvolvimento e necessita de ajustes relacionados à design de interface e experiência do usuário.




  

