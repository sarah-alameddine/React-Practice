import { useState } from "react";

const AddTask = (props) => {
    const {onAdd} = props;
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();

        // WHEN A SUBMIT HAS BEEN CLICKED

        // if they submit without adding any information send an alert to remind user
        if(!text) {
            alert('Please add a task!')
            return
        };

        // Once user has added text then you want to add their task 
        // and clear the input so they can add more task

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    };

    //-------------------- RETURN --------------------------- 
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'> 
                <label> Task </label>
                <input 
                    type='text'
                    placeholder='Add Task' 
                    value={text} 
                    onChange ={(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'> 
                <label> Day and time </label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day} 
                    onChange ={(e) => setDay(e.target.value)}
                 />
            </div>

            <div className='form-control form-control-check'> 
                <label>Set Reminder </label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder} 
                    onChange ={(e) => setReminder(e.currentTarget.checked)}
                />

            </div>
            <div>
                <input type='submit' value='Save Task'className='btn btn-block'/>
            </div>
        </form>
    
    )
};

export default AddTask;