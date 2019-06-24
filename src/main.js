import Vue from 'vue';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';
import Input from './components/input';
import { Row, Col } from './components/grid';
import {
    Aside,
    Header,
    Main,
    Footer,
    Layout
} from './components/layout';
import Toast from './components/toast';

const components = [
    Button,
    ButtonGroup,
    Icon,
    Input,
    Row,
    Col,
    Aside,
    Header,
    Main,
    Footer,
    Layout,
]

const install =  (Vue, opts = {}) => {
    components.forEach(component => {
        console.log(component.name)
        Vue.component(component.name, component)
    })
    Vue.prototype.$toast = Toast
    
}

export default {
    install
}
