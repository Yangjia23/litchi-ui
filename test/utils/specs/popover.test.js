import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'
import Popover from '../../../src/components/popover'
import { createTest, destoryVM } from '..'
import { className } from 'postcss-selector-parser';

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    // BDD 行为驱动测试

    /**
     * @param (name, callback)
     */
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
})