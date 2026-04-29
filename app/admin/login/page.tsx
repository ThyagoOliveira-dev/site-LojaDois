"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const router = useRouter()

  function handleLogin() {
    if (email === "admin" && senha === "123") {
      router.push("/admin/dashboard")
    } else {
      alert("Login inválido")
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Admin</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={function handleLogin() {
                         if (email === "admin" && senha === "devtools@123") {
                           localStorage.setItem("auth", "true")
                           router.push("/admin/dashboard")
                         } else {
                           alert("Login inválido")
                         }
                       }}>Entrar</button>
    </div>
  )
}