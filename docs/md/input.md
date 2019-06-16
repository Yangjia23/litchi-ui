```html
<h2>普通使用</h2>
        <lc-input placeholder="请输入"></lc-input>
        <lc-input placeholder="请输入密码" type="password"></lc-input>
        <lc-input placeholder="请输入数字" type="number"></lc-input>
        <lc-input placeholder="" v-model="message"></lc-input>
        <lc-input placeholder="只读" readonly></lc-input>
        <lc-input placeholder="禁止" disabled></lc-input>

        <p>{{message}}</p>
        <h2>前置/后置标签</h2>
        <lc-input placeholder="请输入邮箱">
            <lc-icon name="email" slot="prepend"></lc-icon>
        </lc-input>
        <lc-input placeholder="请搜索">
            <template slot="append">
                <lc-button>搜索</lc-button>
            </template>
        </lc-input>
        <lc-input placeholder="请搜索">
            <lc-button icon="search" slot="append"></lc-button>
        </lc-input>
        <lc-input placeholder="请输入">
            <template slot="prepend">www</template>
            <template slot="append">cn</template>
        </lc-input>

        <h2>前 / 后缀内嵌 icon</h2>
        <lc-input placeholder="请输入" prefix="search"></lc-input>
        <lc-input placeholder="请搜索" suffix="correct"></lc-input>
        <lc-input placeholder="请搜索" prefix="user" suffix="add"></lc-input>

        <h2>3种大小</h2>
        <lc-input placeholder="larger" size="larger"></lc-input>
        <lc-input placeholder="default"></lc-input>
        <lc-input placeholder="small" size="small"></lc-input>

        <h2>可清空</h2>
        <lc-input placeholder="请输入" clearable value="111"></lc-input>
```