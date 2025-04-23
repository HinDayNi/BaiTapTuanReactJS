// src/App.jsx
import { useState } from "react"
import "./App.css"

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 20 },
    { id: 2, name: "Điện thoại", price: 5000000, category: "Công nghệ", stock: 10 },
    { id: 3, name: "Nồi cơm điện", price: 800000, category: "Gia dụng", stock: 15 },
  ])

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  })

  const categories = ["Thời trang", "Công nghệ", "Gia dụng"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProduct({
      ...newProduct,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    })
  }

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm")
      return
    }

    const newProductWithId = {
      ...newProduct,
      id: Date.now(),
    }

    setProducts([...products, newProductWithId])
    setNewProduct({
      name: "",
      price: "",
      category: "",
      stock: "",
    })
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => (categoryFilter ? product.category === categoryFilter : true))

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Quản Lý Sản Phẩm</h1>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-blue-500 text-xl font-semibold mb-4">Thêm Sản Phẩm Mới</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl text-black"
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Giá (VNĐ)</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl text-black"
              placeholder="Nhập giá sản phẩm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Danh mục</label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl text-black"
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Tồn kho</label>
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl text-black"
              placeholder="Nhập số lượng tồn kho"
            />
          </div>
        </div>
        <button
          onClick={addProduct}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition"
        >
          Thêm Sản Phẩm
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Tìm kiếm theo tên</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded-2xl text-black"
              placeholder="Nhập tên sản phẩm cần tìm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Lọc theo danh mục</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full p-2 border rounded-2xl text-black"
            >
              <option value="">Tất cả danh mục</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên sản phẩm
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá (VNĐ)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Danh mục
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tồn kho
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-200">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.price.toLocaleString()} ₫</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-2xl hover:bg-red-600 transition"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  Không tìm thấy sản phẩm nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
