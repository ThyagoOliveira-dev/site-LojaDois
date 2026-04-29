"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const isAuth = localStorage.getItem("auth")

    if (!isAuth) {
      router.push("/admin/login") // 🔥 bloqueia acesso
    }
  }, [])

function logout() {
  localStorage.removeItem("auth")
  router.push("/admin/login")
}

  return (
    <div style={{ padding: 20 }}>
      <h1>Painel Admin</h1>
      <p>Área protegida</p>
      <button onClick={logout}>Sair</button>
    </div>
  )
}




