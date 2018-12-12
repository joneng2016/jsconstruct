Produto = function(paramNome, paramPreco) {
    this.nome = paramNome;
    this.preco = paramPreco;
    this.calculaDesconto = () => { return this.preco * 0.1; };

}
var produto1 = new Produto("Blusa", 120);
console.log(produto1.calculaDesconto()); //12
