```html
<lc-layout style="height: 100vh">
    <lc-header><div style="background-color: #999">Header</div></lc-header>
    <lc-main><div style="background-color: #666; height: 100%;">Main</div></lc-main>
    <lc-footer><div style="background-color: #999">Footer</div></lc-footer>
</lc-layout>

<lc-layout style="height: 100vh">
    <lc-header><div style="background-color: #999">Header</div></lc-header>
    <lc-layout>
        <lc-aside><div style="background-color: #333; height: 100%;">Aside</div></lc-aside>
        <lc-main><div style="background-color: #666; height: 100%;">Main</div></lc-main>
    </lc-layout>
    <lc-footer><div style="background-color: #999">Footer</div></lc-footer>
</lc-layout>

<lc-layout style="height: 100vh">
    <lc-header>
        <div style="background-color: #999">Header</div>
    </lc-header>
    <lc-layout>
        <lc-main>
            <div style="background-color: #666; height: 100%;">Main</div>
        </lc-main>
        <lc-aside>
            <div style="background-color: #333; height: 100%;">Aside</div>
        </lc-aside>
    </lc-layout>
    <lc-footer>
        <div style="background-color: #999">Footer</div>
    </lc-footer>
</lc-layout>

<lc-layout style="height: 100vh">
    <lc-aside>
        <div style="background: #999; height: 100%;width: 180px;">Aside</div>
    </lc-aside>
    <lc-layout>
        <lc-header>Header</lc-header>
        <lc-main>Main</lc-main>
        <lc-footer>Footer</lc-footer>
    </lc-layout>
</lc-layout>
```