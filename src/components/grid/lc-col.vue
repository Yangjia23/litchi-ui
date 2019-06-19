<template>
  <div class="lc-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcCol",
  props: {
    span: [Number, String],
    offset: [Number, String],
    xs: Object,
    sm: Object,
    md: Object,
    lg: Object,
    xl: Object
  },
  inject: ["gutter"],
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      const { span, offset, xs, sm, md, lg, xl, generateClasses } = this;
      return [
        ...generateClasses({ span, offset }),
        ...generateClasses(xs, "xs-"),
        ...generateClasses(sm, "sm-"),
        ...generateClasses(md, "md-"),
        ...generateClasses(lg, "lg-"),
        ...generateClasses(xl, "xl-")
      ];
    }
  },
  methods: {
    generateClasses(obj, str = '') {
      if (!obj) return [];
      let arr = []
      if (obj.span) arr.push(`lc-col_${str}${obj.span}`)
      if (obj.offset) arr.push(`lc-col-offset_${str}${obj.offset}`)
      return arr;
    }
  }
};
</script>


<style lang="less" scoped>
.lc-col {
  box-sizing: border-box;
  width: 50%;
  line-height: 30px;
  text-align: center;
  .generate-columns(@n, @size: _, @i: 1) when (@i =< @n) {
    &.lc-col@{size}@{i} {
      width: (@i * 100% / @n);
    }
    &.lc-col-offset@{size}@{i} {
      margin-left: (@i * 100% / @n);
    }
    .generate-columns(@n, @size, (@i + 1));
  }
  .generate-columns(24);
  @media (max-width: 576px) {
    .generate-columns(24, _xs-);
  }
  @media (min-width: 576px) {
    .generate-columns(24, _sm-);
  }
  @media (min-width: 768px) {
    .generate-columns(24, _md-);
  }
  @media (min-width: 992px) {
    .generate-columns(24, _lg-);
  }
  @media (min-width: 1200px) {
    .generate-columns(24, _xl-);
  }
}
</style>