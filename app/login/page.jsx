import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen mt-20 md:flex-row">
      {/* Sisi Kiri: Formulir Login */}
      <div className="flex items-center justify-center bg-white md:w-1/2">
        <div className="w-full max-w-md p-8 bg-white">
            <h3 className="mb-4 text-lg font-semibold text-primary-700">Selamat datang di payoprint</h3>
            <h4 className="mb-10 text-base text-neutral-400">Masuk hanya dalam beberapa langkah mudah.</h4>

          <form>
            <div className="mb-4"><InputField type="email" label="Email" placeholder="Email"/></div>
            <div className="mb-4"><InputField type="password" label="Password" placeholder="Password"/></div>
          <div className="flex justify-end mt-3">
          <Link href="/forgotpassword" className="text-primary-700 hover:underline">Lupa Password?</Link>
          </div>
            <Button variant="primary" className="w-full h-10 mt-4" >Login</Button>
          </form>
          <div className="flex justify-end gap-2 mt-3">
            <p>Belum punya akun?</p>
          <Link href="/register" className="text-primary-700 hover:underline">Daftar</Link>
          </div>
        </div>
      </div>

      {/* Sisi Kanan: Ilustrasi atau Informasi Tambahan */}
      <div className="items-center justify-center hidden md:w-1/2 bg-gray-50 md:block ">
        <div className="flex items-center justify-center h-full">
          <img
            src="/login.png"
            alt="Login Illustration"
            className="w-3/6 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
