
var app = new Vue({
  //Declare object vue quan ly 
  el:'#app',
  //Luu tru du lieu do ra mang vue instance 
  data() {
    return {
      message: 'Hello World',
      title:"Viet pro",
      typeInput:'password',
      isHidden:false,
      food:['Rice','FISH','CAKE'],
      txtInput:'',
      txtHTML:'<a href="https://vuejs.org/v2/guide/components.html">Go sites</a>'
    }
  },

  //action retrieve data 

  methods: {
    addFood: function(){
        this.food.push('CHICKEN');
    },
    getName: function(){
      return 'Hello World';
    },

    changeName:function(){
      this.message = 'Nguyen Hieu';
      return 'Nguyen Hieu';
    }

  
  },
  watch: {
    txtInput:function(){
      console.log(this.txtInput);
    },
    
  },
});





