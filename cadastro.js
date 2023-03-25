//leitura de dados

class Produto{
    //para salvar as operações
    constructor(){
        this.id = 1;
        this.arrayProdutos();

    }
    Adicionar(){
        let produto = this.lerDados()
        if(this.Validar(produto) == true) {
            this.Salvar(produto)
        }
            this.listar()

        
    }
    lerDados(){
    let produto = {}

    produto.id = this.id;
    produto.nomeProduto = document.getElementById('fname').value
    produto.qtdProduto = document.getElementById('fqtd').value
    produto.classProduto = document.getElementById('fclass').value
    return produto
    }
    
    Validar(produto){
        let msg = '';
        if(produto.nomeProduto ==''){
            msg = "Por favor, insira corretamente o nome do produto."
        }

        if(produto.qtdProduto ==''){
            msg = "Por favor, insira corretamente a quantidade do produto."
        }

        if(produto.classProduto ==''){
            msg = "Por favor, insira corretamente a classe do produto."
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++;
    }
    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innertext = ''
        for (let i=0; 1 < this.arrayProduto.length; i++){

        let tr = tbody.insertRow();
        let td_nome = tr.insertCell();
        let td_qtd = tr.insertCell();
        let td_class = tr.insertCell();
        let td_remove = tr.insertCell();

        td_nome.innerText = this.arrayProdutos[i].nomeProduto;
        td_qtd.innerText = this.arrayProdutos[i].qtdProduto;
        td_class.innerText = this.arrayProdutos[i].classProduto;
        let imagem = document.createElement('img')
        imagem.src = 'del.png'
        td_remove.appendChild(imagem)

     }
    }
}


        var produto = new Produto();


//validar dados



