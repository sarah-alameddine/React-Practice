/** 
 * Sarah Alameddine
 * Task Tracker - followed 'React JS Crash Course 2021' on Youtube
 *  https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia
 *  15/09/2021
 **/
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header.js';
//import Counter from './components/Counter.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
const App = () => {
  // We want the Application to initially not show the ability to add tasks
  // But once a user clicks 'Add' button - it should display the component to let a user add tasks
  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([ ]);

  // TO FETCH DATA FROM THE JSON BACKEND
  useEffect(() => {

    // Calls a promise
    // Updates our array that holds the task from the server for it to display
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }
      
    // NOW CALL THE DATA
    getTasks();

    //[] is a dependancy array - so if you have any dependecies that might want to pass you do it here
  },[])

    /** ----------- FETCH TASKS -----------
     * Fetches the tasks from the json backend
     */
  const fetchTasks = async () => {
    // Tell it where our data is stores
    const res = await fetch('http://localhost:5000/tasks');

    // Now we parse and get the data
    const data = await res.json();

    //console.log(data);
    return data;
  }
    /** ----------- FETCH TASK FOR THE TOGGLE REMINDERS -----------**/


  const fetchTask = async () => {
    // Tell it where our data is stores
    const res = await fetch('http://localhost:5000/tasks');

    // Now we parse and get the data
    const data = await res.json();

    //console.log(data);
    return data;
  }
    /** ----------- ADD TASK -----------
     * A function that allows us to delete a task when the 'x' icon is clicked
     */
    const addTask = async (task) => {
      // We want to save a users tasks - usually youd have a dataBase or something
      const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
      
      
    })

    // NOTE: The only data that is returned is the new task that was added
    const data = await res.json()
    setTasks([...tasks,data]);
    }

        // NEED TO SPECIFY CONTENT TYPE WHEN MAKING A POST REQUEST
       /* OLD WAY BEFORE JSON SERVER
       // Get a random ID
       const id = Math.floor(Math.random() * 1000) + 1 
       // Then create a new object that holds the task and the new ID
      const newTask  = {id, ... task}
       // Add this new task to our array that holds all the tasks
      setTasks([...tasks,newTask]);
       console.log(task);
      */
      

    /** ----------- DELETE TASK -----------
     * A function that allows us to delete a task when the 'x' icon is clicked
     */
    const deleteTask = async (id) => {
      // console.log('delete',id);
      // Make it asynd and delete the task that has the given id
      // make a delete request to the json server
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
      // You want to filter through the task array and keep all that dont have the id provided
      // i.e delete the id being clicked on
      setTasks(tasks.filter((task) =>task.id !== id))
    };

    /** ----------- TOGGLE REMINDER -----------
     * A function that allows a user to toggle reminder on and off
     */
     const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
  
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
  
      const data = await res.json()
  
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      )
    }
    //  -------------------------- RETURN MAIN -----------------------------
  return (
    <Router>
      <div className="container">
        {/* What ever you write in the header bellow will override the header file - 
          think of this as child of header*/}

        {/* onAdd will set the 'add' button to toggle the task adder on and off */}
        <Header onAdd={() => setShowAddTask
          (!showAddTask)} showAdd={showAddTask}/>
        {/* If showAddTask is true then show any tasks a user has add below the 'save Task' button*/}
        <Route path='/' exact render={(props) => (

          <>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {/**If there are task in task  object then display them
         * ELSE - show message showing no task
         */}
        {tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder} /> 
        : (<p>You have no tasks. Click 'Add' to create new ones!</p>
        )}
          
          </>
          )  
      }/>
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
