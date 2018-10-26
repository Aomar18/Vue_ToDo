new Vue({
  //html tag source
  el: '#vue-app',
  //Data portion
  data: {
    tasks: ['initial', 'secondary'],
    input: ''
  },
  //function portion
  methods: {
    add() {
      this.tasks.push(this.input);
      this.input = "";
      console.log('added new task')
    },
    erase() {
      this.tasks.pop(this.input)
      console.log('erased most recent task')
    },
  },
})


