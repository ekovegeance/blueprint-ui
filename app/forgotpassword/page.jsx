'use client'

import Button from '@/components/button';
import InputField from '@/components/input-field';

export default function ForgotPasswordPage() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8">
        <h2 className="mb-4 text-xl font-semibold text-neutral-700">Lupa Password</h2>
        <p className="mb-6 text-neutral-400">
          Masukkan email yang anda daftarkan dan kami akan mengirimkan anda tautan untuk mengatur ulang kata sandi anda
        </p>
        <form>
          <InputField type="email" label="Email" placeholder="Email"/>
          <Button variant="primary" className="w-full h-10 mt-4">Kirim tautan pengatur ulang kata sandi</Button>
        </form>
      </div>
    </div>
  );
}
