function pedidoWhats(produto) {
    const telefone = "555197145181"; // coloque seu número aqui
    const mensagem = `Olá! Venho através do seu site e gostaria de fazer um pedido do produto: ${produto}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}
