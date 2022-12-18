<template>
<div>
 <DefaultLayout>
  <router-view></router-view>
 </DefaultLayout>
</div>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout';
export default {
  components:{
   DefaultLayout
  },
  name: "App"
}
</script>

<style >
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.app{
  font-family: 'Snell Roundhand', cursive	;
  display: flex;
  flex-direction: column;
  font-size: 30px;
}

a{
  text-decoration: none;
}
</style>