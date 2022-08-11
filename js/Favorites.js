//-------------> this é como estou chamando funções dentro escopo

//classe que vai ter toda a nossa lógica
export class Favorites {
    constructor(root){ //o #app vai vir parar aqui 
        //root é a div app
        this.root = document.querySelector(root)
        //ele vai procurar em todo o nosso document (página) e a #app e vai definir como root
    }
}

//aqui vai ser a classe que vai gerar a visualização e eventos desse html
//Atraves do extends é que está conseguindo unir as duas classes , busca tudo o que tem dentro da classe favorites
export class FavoritesView extends Favorites {

    constructor(root){  //esse root vai ser equivalente ao #app
        super(root) //serve para fazer o "link" entre as duas classes. o super vai manter o link entre as classes 
        console.log(this.root) //imprimir a variável, em tese imprime #app
        this.update()
    }

    //cria o html
    //toda vez que for mudado um dado,uma função vai ser chamada

    update() {

        this.removeAllTr()
        this.createRow()
    
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
            //vamos procurar dentro da #app (root) a tbody
            const tbody = this.root.querySelector('table tbody')
            //entrar dentro da table tbody e pegar os seletores TR -  // como se pegasse então #app table tbody tr.
            
            tbody.querySelectorall('tr')
                .forEach((tr) => { //função forEach - "para cara tr" será executado o comando abaixo 
                    //console.log(tr) //plota no console
                tr.remove() //remove é uma função nativa do JS ela remove o tr
                })
            }


}