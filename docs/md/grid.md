```html
    <h2>普通使用</h2>
    <lc-row>
        <lc-col><div style="background-color: #20B2AA">12</div></lc-col>
        <lc-col><div style="background-color:#67c23a">12</div></lc-col>
    </lc-row>
    <lc-row>
        <lc-col span="8">8</lc-col>
        <lc-col span="8">8</lc-col>
        <lc-col span="8">8</lc-col>
    </lc-row>
    <lc-row>
        <lc-col>6</lc-col>
        <lc-col>6</lc-col>
        <lc-col>6</lc-col>
        <lc-col>6</lc-col>
    </lc-row>
    <lc-row>
        <lc-col span="2">2</lc-col>
        <lc-col span="22">22</lc-col>
    </lc-row>

    <h2>位移</h2>
    <lc-row>
        <lc-col span="6">6</lc-col>
        <lc-col offset="6" span="6">6</lc-col>
    </lc-row>
    <lc-row>
        <lc-col span="4">4</lc-col>
        <lc-col offset="16" span="4">4</lc-col>
    </lc-row>
    <lc-row>
        <lc-col offset="6" span="12">12</lc-col>
    </lc-row>

    <h2>间隔</h2>
    <lc-row gutter="20">
        <lc-col>12</lc-col>
        <lc-col>12</lc-col>
    </lc-row>
    <lc-row gutter="20">
        <lc-col>8</lc-col>
        <lc-col>8</lc-col>
        <lc-col>8</lc-col>
    </lc-row>
    <lc-row gutter="20">
        <lc-col>6</lc-col>
        <lc-col>6</lc-col>
        <lc-col>6</lc-col>
        <lc-col>6</lc-col>
    </lc-row>
    <lc-row gutter="20">
        <lc-col span="2">2</lc-col>
        <lc-col span="22">22</lc-col>
    </lc-row>
    <lc-row gutter="20">
        <lc-col span="6">6</lc-col>
        <lc-col offset="6" span="6">6</lc-col>
    </lc-row>

    <h2>响应式</h2>
    <lc-row>
        <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
            <div style="background-color: #67c23a; height: 20px;">1</div>
        </lc-col>
        <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
            <div style="background-color: #67c23a; height: 20px;">1</div>
        </lc-col>
        <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
            <div style="background-color: #67c23a; height: 20px;">1</div>
        </lc-col>
        <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
            <div style="background-color: #67c23a; height: 20px;">1</div>
        </lc-col>
    </lc-row>
```