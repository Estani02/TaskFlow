'use client'
import type { AppDispatch } from '@/redux/store'
import type { ChangeEvent, FormEvent } from 'react'

import { Button, Dialog, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { addTask } from '@/redux/features/tasks/tasksSlice'

const initForm = {
  id: undefined,
  title: '',
  description: '',
  completed: false,
}

function ModalCreateTask({ onClose, open }: { open: boolean; onClose: () => void }) {
  const dispatch = useDispatch<AppDispatch>()
  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState({
    title: false,
  })
  const validateForm = () => {
    const newErrors = {
      title: form.title.trim() === '',
    }

    setErrors(newErrors)

    return !newErrors.title
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      dispatch(addTask({ ...form, id: Math.random() }))
      handleClose()
    }
  }

  const handleClose = () => {
    setForm(initForm)
    setErrors({ title: false })
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="flex flex-col gap-12 px-6 py-12">
        <h2 className="text-xl font-semibold">Lets write down your next task!</h2>
        <form className="flex w-full flex-col items-center justify-center" onSubmit={handleAddTask}>
          <TextField
            fullWidth
            error={errors.title}
            helperText={errors.title ? 'Title is required' : null}
            id="title"
            label="Title"
            margin="normal"
            name="title"
            value={form.title}
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            // error={errors.description}
            // helperText={errors.description ? 'Description is required' : null}
            id="description"
            label="Description (optional)"
            margin="normal"
            name="description"
            value={form.description}
            variant="outlined"
            onChange={handleInputChange}
          />
          <div className="mt-6 flex gap-4">
            <Button color="error" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

export default ModalCreateTask
