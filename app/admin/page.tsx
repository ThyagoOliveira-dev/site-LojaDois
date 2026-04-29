"use client"

import { useState, useEffect } from "react"

export default function AdminPage() {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    const response = await fetch("http://localhost:8080/produtos")

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos")
    }

    const text = await response.text()

    const data = text ? JSON.parse(text) : []

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const produto = {
      nome,
      preco: Number(preco),
      imagem: "",
      categoria: "Roupas",
      estoque: 1
    }

    await fetch("http://localhost:8080/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })

    alert("Produto criado!")

    fetchProducts()

    // opcional: limpar formulário
    setNome("")
    setPreco("")
  }

async function handleDelete(id: number) {
  try {
    const response = await fetch(`http://localhost:8080/produtos/${id}`, {
      method: "DELETE"
    })

    if (!response.ok) {
      throw new Error("Erro ao deletar")
    }

    fetchProducts()
  } catch (error) {
    console.error("Erro:", error)
  }
}

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin - Criar Produto</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit">Criar Produto</button>
      </form>

      <h2>Produtos cadastrados</h2>

      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco}
          </li>
        ))}
      </ul>

      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco}

            <button onClick={() => handleDelete(p.id)}>
              ❌ Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}