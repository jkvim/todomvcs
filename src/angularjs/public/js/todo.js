(function () {
  var app = angular.module('todoApp', []);
  app.controller('TodoCtrl', function () {
    // initialize
    this.todoList = [];
    this.newTodo = '';

    this.archive = function () {
      // this is outside this
      this.todoList = this.todoList.filter(function (t) {
        return !t.done;
      });
    };

    this.addTodo = function () {
      this.todoList.push({
        text: this.newTodo,
        done: false
      });
      this.newTodo = '';
    };

    this.remain = function () {
      console.log('remain');
       return this.todoList.filter(function (t) {
         return !t.done;
       }).length;
    };
  });
})()