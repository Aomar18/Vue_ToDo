new Vue({
  //html tag source
  el: '#vue-app',

  //Data portion
  data: {
     tasks: [],
     input: '' 
  },
//function portion
methods: {
add () {
  this.tasks.push(this.input);
  this.input = "";
}
}
})