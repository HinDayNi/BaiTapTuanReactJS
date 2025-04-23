// "use client"

// import { useState, useEffect } from "react"
// import ProductItem from "./components/ProductItem"
// import "./App.css"

// function App() {
//   const [products, setProducts] = useState(() => {
//     const savedProducts = localStorage.getItem("products")
//     return savedProducts
//       ? JSON.parse(savedProducts)
//       : [
//           { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 20 },
//           { id: 2, name: "Điện thoại", price: 5000000, category: "Công nghệ", stock: 10 },
//           { id: 3, name: "Nồi cơm điện", price: 800000, category: "Gia dụng", stock: 15 },
//         ]
//   })

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     category: "",
//     stock: "",
//   })

//   const [searchTerm, setSearchTerm] = useState("")
//   const [categoryFilter, setCategoryFilter] = useState("")

//   const categories = ["Thời trang", "Công nghệ", "Gia dụng"]

//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(products))
//   }, [products])

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setNewProduct({
//       ...newProduct,
//       [name]: name === "price" || name === "stock" ? Number(value) : value,
//     })
//   }

//   const addProduct = () => {
//     if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
//       alert("Vui lòng điền đầy đủ thông tin sản phẩm")
//       return
//     }

//     const newProductWithId = {
//       ...newProduct,
//       id: Date.now(),
//     }

//     setProducts([...products, newProductWithId])
//     setNewProduct({
//       name: "",
//       price: "",
//       category: "",
//       stock: "",
//     })
//   }

//   const deleteProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id))
//   }

//   const filteredProducts = products
//     .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .filter((product) => (categoryFilter ? product.category === categoryFilter : true))

//   const totalProducts = filteredProducts.length
//   const totalStock = filteredProducts.reduce((sum, product) => sum + product.stock, 0)

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <h1 className="text-3xl font-bold mb-6 text-center">Quản Lý Sản Phẩm</h1>

//       {/* Add Product Form */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-xl font-semibold mb-4">Thêm Sản Phẩm Mới</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
            
//             <label className="block text-sm font-medium mb-1">Tên sản phẩm</label>
//             <input
//               type="text"
//               name="name"
//               value={newProduct.name}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//               placeholder="Nhập tên sản phẩm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Giá (VNĐ)</label>
//             <input
//               type="number"
//               name="price"
//               value={newProduct.price}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//               placeholder="Nhập giá sản phẩm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Danh mục</label>
//             <select
//               name="category"
//               value={newProduct.category}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Chọn danh mục</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Tồn kho</label>
//             <input
//               type="number"
//               name="stock"
//               value={newProduct.stock}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//               placeholder="Nhập số lượng tồn kho"
//             />
//           </div>
//         </div>
//         <button
//           onClick={addProduct}
//           className="mt-4 !bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Thêm Sản Phẩm
//         </button>
//       </div>

//       {/* Search and Filter */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Tìm kiếm theo tên</label>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Nhập tên sản phẩm cần tìm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Lọc theo danh mục</label>
//             <select
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Tất cả danh mục</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Statistics */}
//       <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-between items-center">
//         <div className="text-lg font-medium">
//           Tổng sản phẩm: <span className="font-bold">{totalProducts}</span>
//         </div>
//         <div className="text-lg font-medium">
//           Tổng tồn kho: <span className="font-bold">{totalStock}</span>
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Tên sản phẩm
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Giá (VNĐ)
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Danh mục
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Tồn kho
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Thao tác
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <ProductItem key={product.id} product={product} onDelete={deleteProduct} />
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
//                   Không tìm thấy sản phẩm nào
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default App
// src/App.jsx
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Quản Lý Sản Phẩm</h1>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-blue-500 text-xl font-semibold mb-4">Thêm Sản Phẩm Mới</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tên sản phẩm</label>
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
            <label className=" text-black block text-sm font-medium mb-1">Giá (VNĐ)</label>
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
            <label className="text-black block text-sm font-medium mb-1">Danh mục</label>
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
            <label className="block text-sm font-medium mb-1 text-black rounded-2xl">Tồn kho</label>
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
          className="mt-4 !bg-blue-500 !text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Thêm Sản Phẩm
        </button>
      </div>

      {/* Product List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Bảng sản phẩm giữ nguyên như phần 2 */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="!bg-gray-50">
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
          <tbody className="!bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Intl.NumberFormat("vi-VN").format(product.price)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-red-600 hover:text-red-900 bg-red-100 px-3 py-1 rounded">
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App