<template>
  <div class="contactUs">
    <div class="contactUs_refs_text">
      <h2>VK</h2>
      <h2>Github</h2>
      <h2>Telegram</h2>
    </div>
    <div class="contactUs_refs_refs">
      <a href="https://vk.com/iwantdog"><img src="@/assets/vk.png" ></a>
      <a href="https://github.com/AlekseiYuzhanin"><img src="@/assets/github.png" ></a>
      <a href="https://t.me/tomskyghoul"><img src="@/assets/Telegram.png" ></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contactUs{
  padding-top: 200px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  gap: 50px;
}
.contactUs_refs_text{
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.contactUs_refs_refs{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contactUs_refs_refs img{
  width: 60px;
  height: 60px;

}
</style>