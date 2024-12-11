
# Todos React Application  (CRUD)

# First create a form for adding the todo list item to the application
  - Name of the Application
  - Form with input and "Add" button 

# How to access the input value & how to update input value to the list
# Create
  - Create a state variable for accessing the input value 
  - Assign state variable to <input value={task}/> value attribute and add "onChange" event for update the task on UI
   # Read
  - Create the todoList state variable for storing the todolist items 
  - Write a function for handling the sumbit event of the form
         - > e.preventDefault() --> for preventing the reload the whole application
         - > writing the if condition - task is empty string = false condition - don't add empty string to the list.
         - > inside if update the todolist by adding task to end of the string.
         - > Once adding item completed ,make task as empty string.
  - Create Item Component for displaying the todo items on UI
     - >Created the Item component and imported to the Todo component.
     - >By using map function iterate over the todolist and display the todo items on display.passing the index and todoitem as props. 
  # Delete
  - Delete the todo item by using the index 
    - > create the onDelete Function
    - > Pass the onDelete fn as prop to the Item component and use this function in Item component for deleting the required item
    - > onDelete fn
          - create a temp list and delete item by using "SPLICE" method splice(index,deleteCount,itemstobeAdd...n)
          - update the todolist by using the updator function
  # Update (Edit)
  - Edit the todo item on todo list
     - >Create isEditIndex state Variable for which index need to edit.
     - >Create OnEdit fn for editing the todo item
        - set the task as todolist item (which item to be edit)
        - setEditIndex (which index place need to be edit)
     - >

       const onEdit = (index) =>{
        setTask(todolist[index])
        setEditIndex(index)

    }
    # onSaveButtonHandler
     - if task && editIndex are not null then edit the task on required place
     - create updateList and update the required item by using arr[index] = newValue
     - update the todolist with updatedlist
     - and make task as "" && and editIndex as null

     const onSaveHandler =(e)=>{
        e.preventDefault()
        if(task && editIndex !== null){
            const updatedList = [...todolist]
            updatedList[editIndex] = task;
            setTodoList(updatedList)
            setTask("")
            setEditIndex(null)
        }
        
    }

    # Store the todolist on localStorage
     - localStorage.setItem("TodoList",JSON.stringify(todoList));
     - JSON.parse(localStorage.getItem("TodoList"))
