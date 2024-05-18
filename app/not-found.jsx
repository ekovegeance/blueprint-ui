import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/button'

 
export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-3 mx-auto my-auto">
      <Image src="/404.svg" alt="404 Not Found" width={300} height={300} />
      <h2 className="text-xl font-bold text-neutral-700 md:text-2xl">404Not Found</h2>
      <p className="text-lg text-neutral-500">Blom ado halaman</p>
      <Link href="/">
        <Button variant="primary">Balek ke home</Button>
      </Link>
    </div>
  )
}