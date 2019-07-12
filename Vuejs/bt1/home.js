var app = new Vue({
  //Declare object vue quan ly 
  el:'#app',
  //Luu tru du lieu do ra mang vue instance 
  data: {
    
      txtInput:'',
      course:[]
    
  },

  //action retrieve data 

  methods: {
    addCourse: function(){

      if (this.course.length <4) {
        this.course.push(this.txtInput);
        this.txtInput='';
      }
    }

  
  }
});