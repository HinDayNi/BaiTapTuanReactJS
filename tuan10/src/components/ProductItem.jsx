"use client"

function ProductItem({ product, onDelete }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price)
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{product.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{formatPrice(product.price)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {product.category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-600 hover:text-red-900 bg-red-100 px-3 py-1 rounded"
        >
          Xoá
        </button>
      </td>
    </tr>
  )
}

export default ProductItem
