```html
<lc-button type="primary">主色调</lc-button>
    <lc-button type="success">成功</lc-button>
    <lc-button type="danger">危险</lc-button>
    <lc-button type="warning">警告</lc-button>
    <br />
    <lc-button>默認</lc-button>
    <lc-button icon="setting" round>设置</lc-button>
    <lc-button icon="setting" disabled @click="onBtnClick">设置</lc-button>
    <lc-button icon="setting" icon-position="right">设置</lc-button>
    <lc-button loading>加载中</lc-button>
    <lc-button @click="onBtnClick">点击</lc-button>
    <br />
    <lc-button-group>
        <lc-button icon='left'>上一页</lc-button>
        <lc-button>确定</lc-button>
        <lc-button icon="right" icon-position="right">下一页</lc-button>
    </lc-button-group>
    <br />

    <lc-button size="larger">larger</lc-button>
    <lc-button>default</lc-button>
    <lc-button size="small">small</lc-button>

    <br />

    <lc-button round size="larger">larger</lc-button>
    <lc-button round>default</lc-button>
    <lc-button round size="small">超小按鈕</lc-button>
```