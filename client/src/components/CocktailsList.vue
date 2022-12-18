<template>
  <div class="mainDiv" id="home">
    <div class="breweryImage">
      <img src="@/assets/cm1-.png"/>
    </div>
    <div class="manipulationElements">
      <div class="replaceInput">
        <my-input placeholder="Enter cocktail title..." v-bind:value="searchQuery" @input="searchQuery = $event.target.value"></my-input>
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
          <div v-for="product in searchAlcoholCocktails" :key="product.idDrink" class="doubleWrapper" >
            <div @click.stop="showAlcoholicDetails(product.idDrink);openDialog()">
              <div class="alcoholicImage">
                <img :src="product.strDrinkThumb">
              </div>
              <div class="alcoholicText">
                <p>{{product.strDrink}}</p>
                <filter-button @click.stop="add">Добавить в любимое</filter-button>
              </div>
              <product-details-modal v-model:show="dialogVisible" :key="detail" :product="product">
                <p>{{product.strDrink}}</p>
                <img :src="product.strDrinkThumb"/>
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
                <p>{{product.strDrink}}</p>
                <filter-button @click.stop="add">Добавить в любимое</filter-button>
              </div>
              <product-details-modal v-model:show="dialogVisible" :key="detail" :product="product">
                <p>{{product.strDrink}}</p>
                <img :src="product.strDrinkThumb"/>
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
      searchQuery: ''
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
        this.details = responseDetails.data.drinks;
        console.log(responseDetails.data.drinks);
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
  },
  mounted() {
    this.showAlcoholicProducts();
    this.showNonAlcoholicProducts();
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
</style>