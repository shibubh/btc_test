import React, {
    useState,
} from 'react';

import uuid from 'uuid/v4';

// Hint use Dispatch Context
// useContext

export const AddTodo = () => {

    const [task, setTask] = useState('');
    const handleSubmit = event => {
        const id = uuid();
        // { type: 'ADD_TODO', task, id: uuid() }
        // Use Above Action
        setTask('');
        console.log(id);        
    };

    const handleChange = event => setTask(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    );
};