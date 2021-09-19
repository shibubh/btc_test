import React, {
  useReducer,
} from 'react';
import uuid from 'uuid/v4';

import { AddTodo, Filter, TodoList } from './components';

import DispatchContext from './context/dispatchContext';
import useCombinedReducers from 'use-combined-reducers';

import { TodoReducer, FilterReducer } from './reducer';
const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
];


const App = () => {
  const [state, dispatch] = useCombinedReducers({
    filter: useReducer(FilterReducer, 'ALL'),
    todos: useReducer(TodoReducer, initialTodos),
  });

  const { filter, todos } = state;

  const filteredTodos = todos.filter(( todo ) => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE') {
      return todo.complete === true;
    }
    if (filter === 'INCOMPLETE') {
      return todo.complete === false;
    }

    return false;
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </DispatchContext.Provider>
  );
};

export default App;
