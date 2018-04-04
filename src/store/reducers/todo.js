import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { REMOVE_TODO, ADD_TODO, COMPLETE_TODO, OPEN_EDIT_TODO, EDIT_TODO } from '../types/index'
function deleteClass(body, name) {
    const map = []
    body.map(bo => {
        if(bo !== name) return map.push(bo)
    })
    return map
}
export default handleActions({
  [REMOVE_TODO] (state, action) {
    function cutTodos() {
        const map = []
        state.todos.map(todo => {
            if(todo.id === action.payload) return;
            return map.push(todo)
        })
        return map
    }
    const stateMap = cutTodos()
    wepy.setStorageSync('todos', stateMap)
    return {
      ...state,
      todos: cutTodos()
    }
  },
  [ADD_TODO] (state, action) {
    const text = action.payload.text
    if(!text) return {...state, todos: state.todos}
    const stateMap = {
        ...state,
        todos: state.todos.concat({
            id: state.todoId ++,
            text: action.payload.text,
            complete: false,
            disabled: true,
            classes: ['todoText']
        })
    }
    wepy.setStorageSync('todos', stateMap)
    return stateMap
  },
  [COMPLETE_TODO] (state, action) {
      return {
        ...state,
        todos: state.todos.map( todo => {
          if(todo.id === action.payload) { 
              todo.complete = !todo.complete
              if(todo.complete) { 
                todo.classes.push('completeText') 
              } else {
                todo.classes = deleteClass(todo.classes, 'completeText')
              }
          }
          return todo
        })
    }
  },
  [OPEN_EDIT_TODO] (state, action) {
      return {
          ...state,
          todos: state.todos.map( todo => {
            if(todo.id === action.payload) { 
              todo.disabled = !todo.disabled
              if(!todo.disabled) { 
                  todo.classes.push('editText') 
              } else {
                  todo.classes = deleteClass(todo.classes, 'editText')
              }
            }
            return todo
        })
      }
  },
  [EDIT_TODO] (state, action) {
      const {id, text} = action.payload
      return {
          ...state,
          todos: state.todos.map( todo => {
              if(todo.id === id) { 
                todo.text = text
              }
              return todo
          })
      }
  }
}, {
  todoId: wx.getStorageSync('todos').todoId || 0,
  todos: wx.getStorageSync('todos').todos || []
})