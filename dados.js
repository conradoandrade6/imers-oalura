let apiKey = "SM4SM7AEHYB7JB1B";  // Sua chave de API do Alpha Vantage

let dados = [
    {
        titulo: "Petrobras (PETR4)",
        descricao: "Petrobras é uma das maiores empresas de energia do mundo, focada em petróleo, gás e energias renováveis. A ação PETR4 é uma das mais negociadas na bolsa brasileira.",
        link: "https://www.infomoney.com.br/cotacoes/b3/acao/petrobras-petr4/",
        simbolo: "PETR4.SA"
    },
    {
        titulo: "Vale (VALE3)",
        descricao: "Vale é uma das maiores mineradoras do mundo, com operações em mais de 30 países. A ação VALE3 é altamente negociada na B3.",
        link: "https://www.infomoney.com.br/cotacoes/b3/acao/vale-vale3",
        simbolo: "VALE3.SA"
    },
    {
        titulo: "Itaú Unibanco (ITUB4)",
        descricao: "Itaú Unibanco é um dos maiores bancos da América Latina. Suas ações preferenciais, ITUB4, são populares entre investidores que buscam bons dividendos.",
        link: "https://www.infomoney.com.br/cotacoes/b3/acao/itau-unibanco-itub4/",
        simbolo: "ITUB4.SA"
    }
];

// Função para buscar as cotações em tempo real via Alpha Vantage API
async function buscarCotacoes() {
    for (let dado of dados) {
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${dado.simbolo}&apikey=${SM4SM7AEHYB7JB1B}`);
            const data = await response.json();
            
            // Log da resposta para depuração
            console.log(`Resposta da API para ${dado.simbolo}:`, data);

            if (data && data['Global Quote'] && data['Global Quote']['05. price']) {
                dado.precoAtual = parseFloat(data['Global Quote']['05. price']).toFixed(2);
            } else {
                dado.precoAtual = "Indisponível";
            }
        } catch (error) {
            console.error(`Erro ao buscar cotação de ${dado.titulo}:`, error);
            dado.precoAtual = "Indisponível";
        }
    }
}
