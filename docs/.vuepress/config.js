const path = require('path');
module.exports = {
    base: '/litchi-ui/',
    title: 'Litchi UI',
    description: '一个基于VUE开发的PC端UI库',
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/introduce.md' },
            { text: '组件', link: '/components/color.md' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '上手指南',
                    collapsable: false,
                    children: [
                        'introduce',  /* /foo/one.html */
                        'install',   /* /foo/two.html */
                        'start',
                        'update',
                    ]
                }
            ],
            '/components/': [
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        {
                            title: '基础',
                            collapsable: false,
                            children: [
                                'color',
                                'icon',
                                'button'
                            ]
                        },
                        {
                            title: '布局',
                            collapsable: false,
                            children: [
                                'grid',
                                'layout',
                            ]
                        },
                        {
                            title: '导航',
                            collapsable: false,
                            children: [
                                'menu',
                                'tabs',
                            ]
                        },
                        {
                            title: '表单',
                            collapsable: false,
                            children: [
                                'input',
                                'radio',
                                'checkbox',
                            ]
                        },
                        {
                            title: '视图',
                            collapsable: false,
                            children: [
                                'alert',
                                'toast',
                                'collapse'
                            ]
                        },
                        {
                            title: '其它',
                            collapsable: false,
                            children: [
                                'backTop'
                            ]
                        },
                    ]
                },
            ],
            // fallback
            '/': [
                '',        /* / */
            ]
        }
    },
    chainWebpack: (config, isServer) => {
        config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
    }
}