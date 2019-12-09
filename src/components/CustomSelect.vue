<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{open: open}" @click="open = !open">{{ selected }}</div>
    <div class="items" :class="{selectHide: !open}">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="selected=option; open=false; $emit('input', {label: option, index: i})"
      >{{ option }}</div>
    </div>
  </div>
</template>






<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted() {
    this.$emit("input", {label: this.options[0], index: 0} );
  }
};
</script>






<style>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  margin-bottom: 20%;
  font-family: 'Merriweather', serif;
  font-size: 20px;
}

.selected {
  background-color: #8A817C;
  border-radius: 8px;
  border: 1px solid white;
  color: white;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.selected.open {
  border: 1px solid white;
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.items {
  color: #ffffff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  position: absolute;
  background-color: #8A817C;
  left: 0;
  right: 0;
  z-index: 1000;

}

.item {
  color: #ffffff;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.item:hover {
  background-color: #BCB8B1;
  color: #463F3A;
}

.selectHide {
  display: none;
}
</style>