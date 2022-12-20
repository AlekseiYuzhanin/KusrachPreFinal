<template>
  <div class="mainDiv" id="home">
    <div class="breweryImage">
      <img src="@/assets/cm1-.png"/>
    </div>
    <div class="Dismember">
      <span class="lineDismember"></span>
    </div>
    <div class="randomCocktail">
      <div class="randomCocktail_title">
        <h2>If you dont know what to drink today</h2>
        <p>{{randomData.strDrink}}</p>
      </div>
      <div class="randomCocktail_image" @click.stop="showAlcoholicDetails(randomData.idDrink);openDialog()">
        <img :src="randomData.strDrinkThumb">
      </div>
    </div>
    <div class="manipulationElements">
      <div class="replaceInput">
        <my-input placeholder="Enter cocktail title..." v-bind:value="searchQuery"
                  @input="searchQuery = $event.target.value"></my-input>
      </div>
    </div>
    <div class="alcoholicProducts" id="alcaholicProducts">
      <div class="alcoholicProducts__header">
        <h1>Alcoholic cocktails</h1>
      </div>
      <div class="Dismember">
        <span class="lineDismember"></span>
      </div>
      <div class="wrapper">
        <transition-group name="cocktails">
          <div v-for="product in searchAlcoholCocktails" :key="product.idDrink" class="doubleWrapper">
            <div @click.stop="showAlcoholicDetails(product.idDrink);openDialog()">
              <div class="alcoholicImage">
                <img :src="product.strDrinkThumb">
              </div>
              <div class="alcoholicText">
                <p>{{ product.strDrink }}</p>
                <filter-button class="btn" @click.stop="add">Добавить в любимое</filter-button>
              </div>
              <product-details-modal  v-model:show="dialogVisible" :key="detail">
                <p>{{ details.strDrink }}</p>
                <img :src="details.strDrinkThumb"/>
              </product-details-modal>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="nonAlcoholProducts" id="nonAlcaholicProducts">
      <div class="nonAlcoholProducts__header">
        <h1>Non alcoholic cocktails</h1>
      </div>
      <div class="Dismember">
        <span class="lineDismember"></span>
      </div>
      <div class="NonAlcohol-wrapper">
        <transition-group name="cocktails">
          <div v-for="product in searchNonAlcoholCocktails" :key="product.idDrink" class="NonAlcohol-doubleWrapper">
            <div @click.stop="showAlcoholicDetails(product.idDrink);openDialog()">
              <div class="alcoholicImage">
                <img :src="product.strDrinkThumb">
              </div>
              <div class="alcoholicText">
                <p>{{ product.strDrink }}</p>
                <filter-button class="btn" @click.stop="add">Добавить в любимое</filter-button>
              </div>
              <product-details-modal  v-model:show="dialogVisible" :key="detail" :product="product">
                <div class="modalWindowCocktailsInformation">
                  <div class="modalWindowCocktailsInformation_introduction">
                    <div class="modalWindowCocktailsInformation_introduction_title">
                      <h1>{{ details.strDrink }}</h1>
                    </div>
                    <div class="modalWindowCocktailsInformation_introduction_title">
                      <img :src="details.strDrinkThumb">
                    </div>
                    <div class="modalWindowCocktailsInformation_introduction_type_and_serve">
                      <div class="modalWindowCocktailsInformation_introduction_type_and_serve_type">
                        <p>Type: {{details.strAlcoholic}}</p>
                      </div>
                      <div class="modalWindowCocktailsInformation_introduction_type_and_serve_serve">
                        <p>Serve in : {{details.strGlass}}</p>
                      </div>
                    </div>
                  </div>
                <div class="modalWindowCocktailsInformation_usage">
                  <div class="modalWindowCocktailsInformation_ingridients">
                    <div class="modalWindowCocktailsInformation_ingridients_title">
                      <h2>Ingredients</h2>
                    </div>
                    <div class="modalWindowCocktailsInformation_ingridients_names">
                      <p>{{ details.strIngredient1 }}</p>
                      <p>{{ details.strIngredient2 }}</p>
                      <p>{{ details.strIngredient3 }}</p>
                      <p>{{ details.strIngredient4 }}</p>
                      <p>{{ details.strIngredient5 }}</p>
                      <p>{{ details.strIngredient6 }}</p>
                      <p>{{ details.strIngredient7 }}</p>
                      <p>{{ details.strIngredient8 }}</p>
                      <p>{{ details.strIngredient9 }}</p>
                      <p>{{ details.strIngredient10 }}</p>
                      <p>{{ details.strIngredient11 }}</p>
                      <p>{{ details.strIngredient12 }}</p>
                      <p>{{ details.strIngredient13 }}</p>
                      <p>{{ details.strIngredient14 }}</p>
                      <p>{{ details.strIngredient15 }}</p>
                    </div>
                  </div>
                  <div class="modalWindowCocktailsInformation_measures">
                    <div class="modalWindowCocktailsInformation_measures_title">
                      <h2>Measures</h2>
                    </div>
                    <div class="modalWindowCocktailsInformation_measures_names">
                      <p>{{ details.strMeasure1 }}</p>
                      <p>{{ details.strMeasure2 }}</p>
                      <p>{{ details.strMeasure3 }}</p>
                      <p>{{ details.strMeasure4 }}</p>
                      <p>{{ details.strMeasure5 }}</p>
                      <p>{{ details.strMeasure6 }}</p>
                      <p>{{ details.strMeasure7 }}</p>
                      <p>{{ details.strMeasure8 }}</p>
                      <p>{{ details.strMeasure9 }}</p>
                      <p>{{ details.strMeasure10 }}</p>
                      <p>{{ details.strMeasure11 }}</p>
                      <p>{{ details.strMeasure12 }}</p>
                      <p>{{ details.strMeasure13 }}</p>
                      <p>{{ details.strMeasure14 }}</p>
                      <p>{{ details.strMeasure15 }}</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="modalWindowCocktailsInformation_instruction">
                  <p>Instruction : {{details.strInstructions}}</p>
                </div>
              </product-details-modal>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetailsModal from '@/components/UI/ProductDetailsModal.vue';
import axios from 'axios'
import FilterButton from './UI/FilterButton';
import MyInput from '@/components/UI/MyInput.vue'

export default {
  components: {
    ProductDetailsModal,
    FilterButton,
    MyInput
  },
  data() {
    return {
      dialogVisible: false,
      product: null,
      alcoholicCocktails: [],
      nonAlcoholicCocktails: [],
      showModal: false,
      detail: null,
      details: [],
      searchQuery: '',
      randomData: []
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    showProduct(product) {
      this.product = product;
    },
    async showAlcoholicProducts() {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        this.alcoholicCocktails = response.data.drinks;
      } catch (e) {
        console.log(e);
      }
    },

    async showAlcoholicDetails(id) {
      try {
        const responseDetails = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        this.details = responseDetails.data.drinks[0];
        console.log(responseDetails.data.drinks[0]);
      } catch (e) {
        console.log(e);
      }
    },
    async showNonAlcoholicProducts() {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        this.nonAlcoholicCocktails = response.data.drinks;
      } catch (e) {
        console.log(e)
      }
    },
    async lookupRandomCocktail(){
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        this.randomData = response.data.drinks[0];
        console.log(this.randomData);
      }
      catch(e){
        console.log(e);
      }
    }
  },
  mounted() {
    this.showAlcoholicProducts();
    this.showNonAlcoholicProducts();
    this.showAlcoholicDetails();
    this.lookupRandomCocktail();
  },
  computed: {
    searchAlcoholCocktails() {
      let tempHire = this.alcoholicCocktails

      if (this.searchQuery != '' && this.searchQuery) {
        tempHire = tempHire.filter((item) => {
          return item.strDrink
              .toUpperCase().includes(this.searchQuery.toUpperCase())
        })
      }
      return tempHire;
    },
    searchNonAlcoholCocktails() {
      let tempHire = this.nonAlcoholicCocktails;

      if (this.searchQuery != '' && this.searchQuery) {
        tempHire = tempHire.filter((item) => {
          return item.strDrink
              .toUpperCase().includes(this.searchQuery.toUpperCase())
        })
      }
      return tempHire;
    }
  }
};
</script>

<style scoped>
.breweryImage {
  padding-top: 200px;
  display: flex;
  justify-content: center;

}
.randomCocktail{
  padding-top: 200px;
  display: flex;
  justify-content: center;
  gap: 100px;
}
.randomCocktail_title{
  display: flex;
  justify-content: center;
  flex-direction: column;

}

.randomCocktail img{
  width: 500px;
  height: 500px;
}

.nonAlcoholProducts {
  font-family: 'Snell Roundhand', cursive;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  scroll-behavior: smooth;
}

.nonAlcoholProducts__header {
  display: flex;
  justify-content: center;
}

.NonAlcohol-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 100px;
  gap: 50px;
  padding-left: 10%;
  padding-right: 5%;
  text-align: center;

}

.btn{
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

.btn:hover{
  color: red;
}

.NonAlcohol-doubleWrapper {
  padding-top: 40px;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.NonAlcohol-doubleWrapper:hover {
  border: 2px solid teal;
}

.alcoholicProducts {
  font-family: 'Snell Roundhand', cursive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

}

.alcoholicProducts__header {
  display: flex;
  justify-content: center;
}

.Dismember {
  padding-left: 0;
  padding-right: 0;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.lineDismember {
  border: 1px solid teal;
  width: 1500px;
  display: flex;
  justify-content: center;
  border-radius: 30%;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 100px;
  gap: 50px;
  padding-left: 10%;
  padding-right: 5%;
  text-align: center;

}

.doubleWrapper {
  padding-top: 40px;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.doubleWrapper:hover {
  border: 2px solid teal;
}

.alcoholicImage img {
  width: 200px;
  height: 200px;
}

.cocktails-list-item {
  display: inline-block;
  margin-right: 10px;
}

.cocktails-list-enter-active,
.cocktails-list-leave-action {
  transition: all 1s ease;
}

.cocktails-list-enter-from
.cocktails-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.replaceInput {
  display: flex;
  justify-content: flex-end;
  padding-top: 100px;
  padding-right: 200px;
}

.modalWindowCocktailsInformation {
  display: flex;
  flex-direction: row;
  gap: 200px;
}

.modalWindowCocktailsInformation_introduction_title {
  display: flex;
  flex-direction: column;
}

.modalWindowCocktailsInformation_introduction{
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 26px;
}

.modalWindowCocktailsInformation_introduction_title img {
  width: 500px;
  height: 500px;
}

.modalWindowCocktailsInformation_usage{
  display: flex;
  flex-direction: row;
  gap: 150px;
}

.modalWindowCocktailsInformation_introduction_type_and_serve{
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding-left: 50px;
}

.modalWindowCocktailsInformation_instruction{
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
</style>