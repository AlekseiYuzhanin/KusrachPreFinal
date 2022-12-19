<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog" ref="modalElement">
    <div class="dialog__content">
    <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      modalElement: null,
    }
  },
  props:{
  show:{
    type: Boolean,
    default: false
  }
},
  methods:{
    hideDialog(){
      this.$emit('update:show',false);
    }
  }

}
</script>

<style scoped>
.dialog{
  top: 0;
  right: 0;
  left: 0;
  bottom:0;
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  display:flex;
}

.dialog__content{
  margin: auto;
  background: white;
  min-height: 50px;
  min-width: 1400px;
  padding: 40px;
  border-radius: 15px;
}
</style>