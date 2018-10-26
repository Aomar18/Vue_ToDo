new Vue({
  //html tag source portion
  el: '#vue-app',
  //Data portion
  data: {
    tasks: ['initial', 'secondary'],
    input: '',
    highlight: true
  },
  //function portion
  methods: {
    addLast() {
      this.tasks.push(this.input);
      this.input = "";
      console.log('added new task to end of list ')
    },
    addFirst() {
      this.tasks.unshift(this.input)
      this.input = ""
      console.log('add task to beginning of list')
    },
    eraseLast() {
      this.tasks.pop(this.input)
      console.log('erased most recent task')
    },
    eraseFirst() {
      this.tasks.shift(this.input)
      console.log('remove first')
    },
    deleteAll() {
      this.tasks.splice(this.tasks)
    },
    restoreAll() {
      this.tasks(tasks)
    }
  },
  //computed function portion
  computed: {
    compClasses: function () {
      return {
        highlight: this.highlight
      }
    },

  }
})


