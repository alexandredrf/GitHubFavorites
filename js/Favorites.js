//-------------> this é como estou chamando funções dentro escopo

//classe que vai ter toda a nossa lógica
export class Favorites {
    constructor(root){ //o #app vai vir parar aqui 
        //root é a div app
        this.root = document.querySelector(root)
        //ele vai procurar em todo o nosso document (página) e a #app e vai definir como root

        //vamos procurar dentro da #app (root) a tbody
        //o tbody vai ficar aqui, pois irá ser chamado mais de uma vez
        this.tbody = this.root.querySelector('table tbody')
        this.load()
    }

    load(){
        const entries = [
            {
                login: 'alexandredrf',
                name: 'Alexandre Fernandes',
                public_repos: '67',
                followers: '78000'
            },
            {
                login: 'RenanFachin',
                name: 'Renan Fachin',
                public_repos: '78',
                followers: '282000'
            },
        ]
        this.entries = entries
    }

}

//aqui vai ser a classe que vai gerar a visualização e eventos desse html
//Atraves do extends é que está conseguindo unir as duas classes , busca tudo o que tem dentro da classe favorites
export class FavoritesView extends Favorites {

    constructor(root){  //esse root vai ser equivalente ao #app
        super(root) //serve para fazer o "link" entre as duas classes. o super vai manter o link entre as classes 
        //console.log(this.root) //imprimir a variável, em tese imprime #app
        this.update()
    }

    //cria o html
    //toda vez que for mudado um dado,uma função vai ser chamada

    update() {

        this.removeAllTr()

        //recriar as colunas
        //os dados serão um ARRAY que vão conter um OBJETO com as informações no seu interior

        this.entries.forEach(pessoa => { //o nome user foi atribuído por mim
        //console.log(user)
        //dentro de cada linha,será necessário levar os dados contidos no entries
        const row = this.createRow() //aqui ele vai te retornar a TR criada pela DOM
        //console.log(row)

        row.querySelector('.user img').src = `https://github.com/${pessoa.login}.png` //user se vincula a classe no html
        row.querySelector('.user img').alt = `imagem de ${pessoa.name}`
        row.querySelector('.user p').textContent = pessoa.name
        row.querySelector('.user span').textContent = pessoa.login
        row.querySelector('.repositories').textContent = pessoa.public_repos
        row.querySelector('.followers').textContent = pessoa.followers
            //ele ta funcionando porem ele ta puxando dentro do arrey entries


        //Append que é uma funcionalidade da DOM que vai receber um elemento HTML criado pela DOM
        this.tbody.append(row)

        //tr foi criado pela DOM durante a função createrow
        //tr foi para dentro da contante row
        //a Constante row fez a pesquisa (queryselector) pra trocar a imagem
        //append ta botando row dentro de tbody


        })
    }



    createRow(){
    //Recriar as colunas
    //tr vai receber os dados que vamos pegar do html
    // para recriar uma TR, ela precisa ser criada com a DOM! https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction
    // criando um elemento diretamente pela DOM utilizando JS
    const tr = document.createElement('tr')
    
    //o que é innerHTML?!
    // substitui o que tem dentro de um elemento por algo , nesse caso tr era vazio e assumiu o valor do texto da variável content

    tr.innerHTML =`
                    <!-- Referente a coluna usuário do thead  -->
                    <td class="user">
                        <img src="https://github.com/alexandredrf.png" alt="Imagem do Alexandre">
                        <a href="https://github.com/alexandredrf" target="_blank">
                            <p>Alexandre Davi</p>
                            <span>alexandredrf</span>
                        </a>
                    </td>
                    <!-- Referente a coluna repositório do thead  -->
                    <td class="repositories">
                        50
                    </td>
                    <!-- referente aos seguidores  -->
                    <td class="followers">
                        16000
                    </td>
                    <!-- referente ao botão de fechar  -->
                    <td>
                        <button class="remove">&times;</button>
                    </td>
                    `
    return tr
    //pq retornar tr ? pq vai ser utilizado pra abastercer a div tr no html
    }

    
    removeAllTr(){

            //entrar dentro da table tbody e pegar os seletores TR -  // como se pegasse então #app table tbody tr.
            
            this.tbody.querySelectorAll('tr')
                .forEach((tr) => { //função forEach - "para cara tr" será executado o comando abaixo 
                    //console.log(tr) //plota no console
                tr.remove() //remove é uma função nativa do JS ela remove o tr
                })
            }



}