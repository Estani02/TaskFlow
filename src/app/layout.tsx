import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import './globals.css'

import { ProviderLayout } from './ProviderLayout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'TaskFlow',
  description: 'Prueba Tecnica - Estanislao Olmedo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ProviderLayout>
        <AppRouterCacheProvider>
          <body className={poppins.className}>{children}</body>
        </AppRouterCacheProvider>
      </ProviderLayout>
    </html>
  )
}
