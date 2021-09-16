/** 
 * 
 */
import Task from './Task.js';
// const tasks = [

//     {
//         id:0,
//         text : "Doctors appoinmtment",
//         day: "Feb 12 2021",
//         reminder: true,

//     },
//     {
//         id:1,
//         text: "Food appoinmtment",
//         day: "Feb 13 2021",
//         reminder: true,

//     },
//     {
//         id:2,
//         text : "Sport appoinmtment",
//         day: "Feb 33 2021",
//         reminder: false,

//     },
// ]
// ---------------- main --------------
const Tasks = (props) => {
    const {tasks,onDelete,onToggle} = props;
    // WE MOVED THE CONST [TASKS,SETTASK] ARRAY INTO APP.JS
    // THIS WAY IS GLOBAL AND WE CAN JUST REFER TO IT BY PUTTING IT IN
    // THE <Tasks/> parameter in app.js
    return (
        <>
            {tasks.map((task) => (
                // passing each task as a prop 
                <Task key={task.id} task={task} 
                onDelete={onDelete}
                onToggle={onToggle} />
            ))}
        </>
    );

};

export default Tasks;