```html
<h2>基本使用</h2>
        <lc-tabs value="woman" @tab-click="handleTabClick">
            <lc-tab-head>
                <lc-tab-item name="woman">美女</lc-tab-item>
                <lc-tab-item name="news">新闻</lc-tab-item>
                <lc-tab-item name="sports">体育</lc-tab-item>
            </lc-tab-head>
            <lc-tab-body>
                <lc-tab-pane name="woman">美女相关内容</lc-tab-pane>
                <lc-tab-pane name="news">新闻相关内容</lc-tab-pane>
                <lc-tab-pane name="sports">体育相关内容</lc-tab-pane>
            </lc-tab-body>
        </lc-tabs>

        <h2>禁用某一项</h2>
        <lc-tabs value="sports">
            <lc-tab-head>
                <lc-tab-item name="woman">美女</lc-tab-item>
                <lc-tab-item name="news" disabled>新闻</lc-tab-item>
                <lc-tab-item name="sports">体育</lc-tab-item>
            </lc-tab-head>
            <lc-tab-body>
                <lc-tab-pane name="woman">美女相关内容</lc-tab-pane>
                <lc-tab-pane name="news">新闻相关内容</lc-tab-pane>
                <lc-tab-pane name="sports">体育相关内容</lc-tab-pane>
            </lc-tab-body>
        </lc-tabs>

        <h2>自定义标签页</h2>
        <lc-tabs value="sports">
            <lc-tab-head>
                <lc-tab-item name="woman">美女</lc-tab-item>
                <lc-tab-item name="news">新闻</lc-tab-item>
                <lc-tab-item name="sports" icon="setting">设置</lc-tab-item>
            </lc-tab-head>
            <lc-tab-body>
                <lc-tab-pane name="woman">美女相关内容</lc-tab-pane>
                <lc-tab-pane name="news">新闻相关内容</lc-tab-pane>
                <lc-tab-pane name="sports">体育相关内容</lc-tab-pane>
            </lc-tab-body>
        </lc-tabs>

        <h2>扩展</h2>
        <lc-tabs value="sports">
            <lc-tab-head>
                <lc-tab-item name="woman">美女</lc-tab-item>
                <lc-tab-item name="news">新闻</lc-tab-item>
                <lc-tab-item name="sports">体育</lc-tab-item>
                <template slot="actions">
                    <lc-button type="primary">更多</lc-button>
                </template>
            </lc-tab-head>
            <lc-tab-body>
                <lc-tab-pane name="woman">美女相关内容</lc-tab-pane>
                <lc-tab-pane name="news">新闻相关内容</lc-tab-pane>
                <lc-tab-pane name="sports">体育相关内容</lc-tab-pane>
            </lc-tab-body>
        </lc-tabs>

        <h2>卡片风格</h2>
        <lc-tabs value="news" type="card">
            <lc-tab-head>
                <lc-tab-item name="woman">美女</lc-tab-item>
                <lc-tab-item name="news">新闻</lc-tab-item>
                <lc-tab-item name="sports">体育</lc-tab-item>
            </lc-tab-head>
            <lc-tab-body>
                <lc-tab-pane name="woman">美女相关内容</lc-tab-pane>
                <lc-tab-pane name="news">新闻相关内容</lc-tab-pane>
                <lc-tab-pane name="sports">体育相关内容</lc-tab-pane>
            </lc-tab-body>
        </lc-tabs>

```