// src/redux/features/tasksSlice.test.ts
import tasksReducer, { addTask, updateTask, deleteTask, toggleTaskCompletion } from './tasksSlice'

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

const initialState = {
  tasks: [] as Task[],
}

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle addTask', () => {
    const newTask: Task = { id: 1, title: 'New Task', description: 'Description', completed: false }
    const actual = tasksReducer(initialState, addTask(newTask))

    expect(actual.tasks).toHaveLength(1)
    expect(actual.tasks[0]).toEqual(newTask)
  })

  it('should handle updateTask', () => {
    const initial = {
      tasks: [{ id: 1, title: 'Task', description: 'Description', completed: false }],
    }
    const updatedTask: Task = {
      id: 1,
      title: 'Updated Task',
      description: 'Updated Description',
      completed: true,
    }
    const actual = tasksReducer(initial, updateTask(updatedTask))

    expect(actual.tasks[0]).toEqual(updatedTask)
  })

  it('should handle deleteTask', () => {
    const initial = {
      tasks: [{ id: 1, title: 'Task', description: 'Description', completed: false }],
    }
    const actual = tasksReducer(initial, deleteTask(1))

    expect(actual.tasks).toHaveLength(0)
  })

  it('should handle toggleTaskCompletion', () => {
    const initial = {
      tasks: [{ id: 1, title: 'Task', description: 'Description', completed: false }],
    }
    const actual = tasksReducer(initial, toggleTaskCompletion(1))

    expect(actual.tasks[0].completed).toBe(true)
  })
})
