import {FaTimes } from 'react-icons/fa'
const Task = (props) => {

    const {task,onDelete,onToggle} = props;
    return (
        // When task reminder is set we want to toggle css to show a horizontal border on the task
        <div className={`task ${task.reminder ? 'reminder': ''  }`}
         onDoubleClick={() => onToggle(task.id)}>
            <h3> 
                {task.text}{' '}
                {/** Calls a component from the react-icons we have imported */}
                 <FaTimes 
                    style={{color:'red', cursor: 'pointer'}}  
                    onClick={() => onDelete(task.id)}
                 />   
            </h3>
            <p>{task.day}</p>
        </div>

    );
};


export default Task;