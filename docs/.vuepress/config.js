module.exports = {
    base: '/css-trick/',
    title: 'css-trick',
    description: '一些css小技巧，以及常用的代码',
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
            { text: 'Github', link: 'https://github.com/vandvassily/css-trick' },
        ],
        sidebar: [
            {
                title: '常用代码',
                collapsable: false,
                children: [
                    ['/ellipsis/', '单行及多行省略号']
                ]
            },
            {
                title: '技巧',
                collapsable: false,
                children: [
                    ['/rem/', 'rem初始化']
                ]
            }
        ]
    }
}