<template>
  <div class="demo">
      <lc-cascader :options="source" :field-names="fieldNames" v-model="selected"></lc-cascader>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      selected: [],
      source: [
        {
          name: "上海",
          value: "shanghai",
          children: [
            {
              name: "上海市",
              value: "shanghaiCity",
              children: [
                {
                  name: "静安区",
                  value: "jinganqu"
                },
                {
                  name: "黄浦区",
                  value: "huangpuqu"
                },
                {
                  name: "杨浦区",
                  value: "yangpuqu"
                }
              ]
            }
          ]
        },
        {
          name: "安徽",
          value: "anhui",
          children: [
            {
              name: "合肥市",
              value: "hefeiCity",
              children: [
                {
                  name: "瑶海区",
                  value: "yaohaiqu"
                },
                {
                  name: "包河区",
                  value: "baohequ"
                },
                {
                  name: "蜀山区",
                  value: "shushanqu"
                }
              ]
            },
            {
              name: "芜湖市",
              value: "wuhuCity",
              children: [
                {
                  name: "镜湖区",
                  value: "jinghuqu"
                },
                {
                  name: "弋江区",
                  value: "Yijiangqu"
                },
                {
                  name: "鸠江区",
                  value: "Jiujiangqu"
                }
              ]
            }
          ]
        }
      ],
      fieldNames: {
        label: "name",
        value: "value"
      }
    };
  }
};
</script>

<style lang="less" scoped>
</style>


