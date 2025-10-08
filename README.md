# Projeto react ecommerce "TechNexus"

Este é um projeto feito em REACT js durante o curso de front-end da FLAG.

## Features

Este projeto possui todas as features que um e-commerce deve ter, assim como algumas ferramentas extra como:

- Uma página com todos os produtos
- Um search filter para filtrar os produtos
- Barra de pesquisa para procurar produtos específicos
- Uma pagina de detalhe para cada produto com as suas respetivas informações
- Um sistema de carrinho de compras com opção para finalizar a compra
- Uma wishlist para guardar produtos desejados

Algumas outras features extra que este projeto possui são:

- Um editor produtos que permite ao utilizador adicionar, editar, e apagar produtos da loja
- Uma pequena galeria de imagens
- Um formulário dummy de contacto que possui uma validação simples

## Tecnologias usadas

Este e-commerce foi feito com as seguintes tecnologias:

- HTML
- ReactJS
- SASS - Para os estilos do site
- Ficheiro .json que possui toda a data dos produtos da loja
- json-server - Para fazer o editor de produtos
- react Icons - Utilização de ícones
- fslightbox React - Biblioteca utilizada para a construção da galeria lightbox
- react hook forms e YUP - Na validação do formulário de contacto
- Local storage para armazenar os produtos do carrinho de compras e da wishlist

## Como correr o programa

Primeiramente, para poder visualizar o site é necessário possuir o nodeJS instalado no computador.
Após isso, teremos que instalar as dependências no cliente e no server.
O primeiro comando a ser utilizado será

`cd client` e de seguida `npm install`

Este comando irá instalar todas as dependencias necessárias listadas no ficheiro package.json para a aplicação cliente funcionar.

A seguir, basta fazer a mesma coisa para o server.

Após isto, para correr a aplicação cliente verifique se está no path correto e corra o comando:

`npm run dev`

Para abrir o site no browser basta ir para o endereço `http://localhost:5173/`

Para poder aceder ao editor de produtos é necessário abrir um segundo terminal e escrever o seguinte comando:

`cd server` e `npm run start`

Assim, com os dois terminais é possivel aceder ao editor de produtos.
