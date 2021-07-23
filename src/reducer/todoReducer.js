
export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'DO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case 'UNDO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        case 'ADD_TODO':
            // Schema
            /*{
                task: string,
                id: ID,
                complete: bool,
            }*/
            return state;
        default:
            return state;
    }
};