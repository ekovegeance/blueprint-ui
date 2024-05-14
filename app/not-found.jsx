import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container mx-auto my-auto">
      <h2>404Not Found</h2>
      <p>Blom ado halaman</p>
      <Link href="/">Balek ke home</Link>
    </div>
  )
}