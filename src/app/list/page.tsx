'use client'
import type { RootState, AppDispatch } from '@/redux/store'
import type { Key, ReactChild, ReactFragment, ReactPortal } from 'react'

import {
  Button,
  CircularProgress,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearUsersState, fetchUsers } from '@/redux/features/list/listadoSlice'

function ListPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { users, loading, error } = useSelector((state: RootState) => state.listado)

  useEffect(() => {
    void dispatch(fetchUsers())

    return () => {
      void dispatch(clearUsersState())
    }
  }, [dispatch])

  return (
    <>
      <div className="p-8">
        <Link passHref href="/">
          <Button startIcon={<ArrowBackIcon />} variant="contained">
            Back
          </Button>
        </Link>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h2 className="text-4xl font-bold uppercase">User List</h2>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <List>
            {users.map(
              (user: {
                id: Key | null | undefined
                avatar: string | undefined
                name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
                createdAt: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
              }) => (
                <ListItem key={user.id}>
                  <ListItemAvatar>
                    <Avatar src={user.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={user.name} secondary={user.createdAt} />
                </ListItem>
              ),
            )}
          </List>
        )}
      </div>
    </>
  )
}

export default ListPage
