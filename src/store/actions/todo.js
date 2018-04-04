// https://www.npmjs.com/package/redux-actions
import { createAction } from 'redux-actions'
import { REMOVE_TODO, ADD_TODO, COMPLETE_TODO, EDIT_TODO, OPEN_EDIT_TODO} from '../types/todo'
export const removeTodo = createAction(REMOVE_TODO)
export const addTodo = createAction(ADD_TODO)
export const completeTodo = createAction(COMPLETE_TODO)
export const openEditTodo = createAction(OPEN_EDIT_TODO)
export const editTodo = createAction(EDIT_TODO)