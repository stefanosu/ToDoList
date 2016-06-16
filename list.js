var todoList = {
  todos:[]
};
  function displayTodos() {
   if(this.todos.length === 0) {
     console.log('Your todo list is empty!');
   }  else {
     console.log('My Todos');
     for (var i = 0; i < this.todos.length; i++) {

          if (this.todos[i].completed === true) {
       console.log('(x)', this.todos[i].todoText);
         } else { 
       console.log('()', this.todos[i].todoText);
     }
   }
  }
  function addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  }
   function changeTodo(position, todoText) {
     this.todos[position].todoText = todoText;
     this.displayTodos();
   }
   function deleteTodo(position) {
     this.todos.splice(position, 1);
     this.displayTodos();
   }
   function toggleCompleted(position) {
     var todo = this.todos[position];
      todo.completed = !todo.completed; 
      this.displayTodos();
   }
   function toggleAll() {
     var totatlTodos = this.todos.length;
     var completedTodos = 0;
     
     //Get number of completed todos.
     for (var i = 0; i < totalTodos; i++) {
       if (this.todos[i].completed === true){
         completedTodos++;
       }
     }
     
   // Case 1 : If everything is true make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;  
      }
    }
  }  
}
  


