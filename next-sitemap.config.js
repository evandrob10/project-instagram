module.exports = {
    siteUrl: 'https://www.instasavehub.com.br', // URL do seu site
    generateRobotsTxt: true, // Gera o arquivo robots.txt automaticamente
    sitemapSize: 7000, // Limite de URLs por sitemap (se precisar dividir)
    exclude: [
        '/admin', // Exclui a rota /admin
        '/login', // Exclui a rota /login
        '/api',   // Exclui a rota /api (se necessário)
    ],
    changefreq: 'daily', // Frequência das atualizações das páginas
    priority: 0.7, // Prioridade das páginas (pode ser ajustada conforme necessário)
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, // Permite que todos os bots acessem o site
            { userAgent: 'Googlebot', disallow: ['/admin'] }, // Exemplo de restrição para o Googlebot
        ],
    },
    // Caso o projeto tenha rotas dinâmicas, você pode configurar mais ajustes aqui
}