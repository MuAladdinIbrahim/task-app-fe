import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ApolloWrapper } from "@/lib/apollo-wrapper";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo',
  description: 'todo list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"navbar"}>
          <Link href={'/'}>Todo Next</Link>
        </div>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
