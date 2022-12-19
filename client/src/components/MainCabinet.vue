<template>
    <div class="maincabinet">
        <div class="maincabinet_user_info">
          <div class="maincabinet_user_info_title">
            <h1>Information about User</h1>
          </div>
          <div class="maincabinet_user_nfo_data">
            <div>
              {{userInfo}}
              {{userInfo}}
            </div>
          </div>
       </div>
      <div>
        <div class="maincabinet_products_info">
          <div class="maincabinet_products_info_title">
            <h1>Here is my cocktails</h1>
          </div>
          <div class="maincabinet_products_info_cocktails">

          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default{
props:{
 userInfo:{
   type:Array,
   required:true
 }
}
}
</script>

<style scoped>
.maincabinet{
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>