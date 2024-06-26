import Button from '@mui/material/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-10 py-36">
      <h1 className="text-4xl font-bold uppercase">TaskFlow - technical test</h1>
      <div className="flex flex-col items-center justify-center gap-10">
        <Link passHref href="/tasks">
          <Button variant="contained">Tasks</Button>
        </Link>
        <Link passHref href="/list">
          <Button variant="outlined">List</Button>
        </Link>
      </div>
    </main>
  )
}
