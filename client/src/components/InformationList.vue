<template>
  <div class="information">
    <div class="information_ingridients_title">
      <h2>Which ingredients do we use?</h2>
    </div>
    <div class="information_ingredients_values">
      <div v-for="ingredient in ingredients" :key="ingredient">
        <li>{{ingredient.strIngredient1}}</li>
      </div>
    </div>
    <div class="information_glasses_title">
      <h2>Which glasses do we use?</h2>
    </div>
    <div class="information_glasses_values">
      <div v-for="glass in glasses" :key="glass">
        <li>{{glass.strGlass}}</li>
      </div>
    </div>
    <div class="information_categories_title">
      <h2>Which categories do we use?</h2>
    </div>
    <div class="information_categories_values">
      <div v-for="category in categories" :key="category">
        <li>{{category.strCategory}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InformationList",
  data(){
    return{
      categories: [],
      glasses: [],
      ingredients: []
    }
  },
  methods:{
    async listAllCategories(){
      try{
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list\n')
        this.categories = response.data.drinks;
      }
      catch(e){
        console.log(e);
      }
    },
    async listAllGlasses(){
      try{
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
        this.glasses = response.data.drinks;
      }
      catch(e){
        console.log(e);
      }
    },
    async listAllIngredients(){
      try{
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        this.ingredients = response.data.drinks
      }
      catch(e){
        console.log(e);
      }
    },

  },
  mounted(){
    this.listAllIngredients();
    this.listAllGlasses();
    this.listAllCategories();
  }
}
</script>

<style scoped>
.information{
  padding-top: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.information_ingredients_values{
  padding-top: 20px;
  font-size: 25px;
  padding-bottom: 40px;
}
.information_glasses_values{
  padding-top: 20px;
  font-size: 25px;
  padding-bottom: 40px;
}
.information_categories_values{
  padding-top: 20px;
  font-size: 25px;
  padding-bottom: 40px;
}
</style>