import React from 'react'
import InputField from '@/components/InputField'
import Button from '@/components/Button'

export default function ResetPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8">
        <h2 className="mb-4 text-xl font-semibold text-neutral-700">Reset Password</h2>
        <form>
          <InputField type="password" label="Password" placeholder="Password"/>
          <div className="mt-4">
          <InputField type="password" label="Konfirmasi Password" placeholder="Konfirmasi Password"/>
          </div>
          <Button variant="primary" className="w-full h-10 mt-4">Reset Password</Button>
        </form>
      </div>
    </div>
  )
}
