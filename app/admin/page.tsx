"use client"

import { useState, useEffect } from "react"

export default function AdminPage() {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [products, setProducts] = useState([])
  const [editingId, setEditingId] = useState<number | null>(null)

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

    // UPDATE
    if (editingId) {

      await fetch(`http://localhost:8080/produtos/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      })

      alert("Produto atualizado!")

    } else {

      // CREATE
      await fetch("http://localhost:8080/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      })

      alert("Produto criado!")
    }

    fetchProducts()

    setNome("")
    setPreco("")

    setEditingId(null)
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

function handleEdit(produto: any) {
  setNome(produto.nome)
  setPreco(produto.preco.toString())

  setEditingId(produto.id)
}

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin - Criar Produto</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit">
          {editingId ? "Atualizar Produto" : "Criar Produto"}
        </button>
      </form>

      <h2>Produtos cadastrados</h2>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco}

            <button onClick={() => handleDelete(p.id)}>
              ❌ Deletar
            </button>
            <button onClick={() => handleEdit(p)}>
              🔄 Atualizar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}