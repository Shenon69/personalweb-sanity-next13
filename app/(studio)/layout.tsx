import { Inter } from 'next/font/google'
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'My Awesome Site!',
    description: 'Generated by NEXT + SANITY',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>{children}</div>




            </body>
        </html>
    )
}