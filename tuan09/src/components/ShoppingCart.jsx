
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, selectCartTotal, selectCartItemCount } from '../features/cartSlice';

const products = [
  { id: 1, name: 'Điện thoại', price: 10000000 },
  { id: 2, name: 'Laptop', price: 15000000 },
  { id: 3, name: 'Tai nghe', price: 2000000 },
  { id: 4, name: 'Chuột', price: 500000 },
];

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);
  const dispatch = useDispatch();

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">📦 4. Giỏ hàng</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Sản phẩm</h3>
          <div className="grid grid-cols-1 gap-2">
            {products.map((product) => (
              <div key={product.id} className="border rounded p-2 flex justify-between items-center">
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.price.toLocaleString('vi-VN')} VNĐ</p>
                </div>
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="btn btn-primary"
                >
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Giỏ hàng ({itemCount} sản phẩm)</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Giỏ hàng trống</p>
          ) : (
            <>
              <ul className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="border rounded p-2 flex justify-between items-center">
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.price.toLocaleString('vi-VN')} VNĐ</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                          } else {
                            dispatch(removeItem(item.id));
                          }
                        }}
                        className="btn btn-secondary px-2 py-0"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="btn btn-secondary px-2 py-0"
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="ml-2 text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="font-bold text-xl">
                Tổng tiền: {totalAmount.toLocaleString('vi-VN')} VNĐ
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;