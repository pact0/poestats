"use client"
import Image from 'next/image'
import { Card, Text, Metric } from "@tremor/react";
import { useState } from 'react';

export default function Login() {

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleNameChange = (e: { target: HTMLInputElement }) => {
    const val = e.target.value;
    setLoginName(val)
  }

  const handlePasswordChange = (e: { target: HTMLInputElement }) => {
    const val = e.target.value;
    setLoginPassword(val)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className=' bg-indigo-950 w-2/6 h-2/3 to-purple-100 text-teal-50 '>
        <h2>
          Login
        </h2>

        <input type='text' value={loginName} onChange={handleNameChange} className='text-indigo-600' />

        <input type='text' value={loginPassword} onChange={handlePasswordChange} className='text-indigo-600' />

        <button>Login</button>

      </form>
    </main>
  )
}
