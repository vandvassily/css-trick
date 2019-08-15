module.exports = {
    base: '/css-trick/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    ga: 'UA-117533223-1',
    serviceWorker: true,
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-117533223-1'
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Blog', link: 'http://vandvassily.cn/' },
            // { text: 'External', link: 'https://google.com' },
        ]
    }
}