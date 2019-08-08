import Vue from 'vue';
import Litchi from './main';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
Vue.use(VueHighlightJS);

new Vue({
    el: '#app',
    data() {
        return {
            value1: 2,
            value2: 5,
            expand1: [0, 2],
            expand2: 'pane2',
            source: [
                {
                    name: '上海',
                    value: 'shanghai',
                    children: [
                        {
                            name: '上海市',
                            value: 'shanghaiCity',
                            children: [
                                {
                                    name: '静安区',
                                    value: 'jinganqu'
                                },
                                {
                                    name: '黄浦区',
                                    value: 'huangpuqu'
                                },
                                {
                                    name: '杨浦区',
                                    value: 'yangpuqu'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '安徽',
                    value: 'anhui',
                    children: [
                        {
                            name: '合肥市',
                            value: 'hefeiCity',
                            children: [
                                {
                                    name: '瑶海区',
                                    value: 'yaohaiqu'
                                },
                                {
                                    name: '包河区',
                                    value: 'baohequ'
                                },
                                {
                                    name: '蜀山区',
                                    value: 'shushanqu'
                                }
                            ]
                        }
                    ]
                }

            ],
            fieldNames: {
                'label': 'name',
                'value': 'value'
            }
        }
    },
    methods: {
    }
})
