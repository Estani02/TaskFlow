'use client'
import type { RootState } from '@/redux/store'
import type { AppDispatch } from '@/redux/store'

import { Button, IconButton } from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import ModalCreateTask from '@/components/modals/ModalCreateTask'
import { deleteTask, toggleTaskCompletion } from '@/redux/features/tasks/tasksSlice'

function TasksPage() {
  const [open, setOpen] = useState(false)
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch = useDispatch<AppDispatch>()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId))
  }

  const handleToggleTaskCompletion = (taskId: number) => {
    dispatch(toggleTaskCompletion(taskId))
  }

  return (
    <>
      <div className="p-4 md:p-8">
        <Link passHref href="/">
          <Button startIcon={<ArrowBackIcon />} variant="contained">
            Back
          </Button>
        </Link>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10 py-36">
        <h2 className="text-4xl font-bold uppercase">Things to do</h2>
        <div>
          <Button endIcon={<AddIcon />} variant="contained" onClick={handleClickOpen}>
            Create new task
          </Button>
        </div>
        <ul className="w-full max-w-md list-disc">
          {tasks.map((task) => (
            <li key={task.id} className="flex flex-col gap-2 border-b p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p>{task.description ? task.description : '-'}</p>
                  <p>
                    Status:{' '}
                    {task.completed ? (
                      <b className="text-green-500">Completed</b>
                    ) : (
                      <b className="text-red-500">Incomplete</b>
                    )}
                  </p>
                </div>
                <div className="flex items-center">
                  <IconButton
                    aria-label={task.completed ? 'uncheck' : 'check'}
                    color="primary"
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  >
                    {task.completed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ModalCreateTask open={open} onClose={handleClose} />
      </div>
    </>
  )
}

export default TasksPage
