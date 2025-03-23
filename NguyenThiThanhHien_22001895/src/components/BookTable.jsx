import Hooks from '../stores/Hooks'
function BookTable(){
   const {listOrder, setListOrder} = Hooks()

   return(
      <div>
         {listOrder.length > 0 ? (
            <ul className="grid-cols-3 grid-rows-2 grid space-x-5 space-y-10 m-10" >
            {listOrder.map((item) => (
               <li 
                     key={item.id} 
                     className="text-black font-extralight text-left justify-items-center shadow shadow-amber-300  rounded-2xl p-3"
               >
                     <img
                        src={item.hinhAnh}
                        alt={item.temMon}
                     />
                     <h3 className="font-bold text-black">{item.temMon}</h3>
                     <p className="font-bold text-red-600">{item.gia} VNĐ</p>
                     
                     <button 
                        onClick={(e) => {
                           e.stopPropagation()
                           setListOrder(listOrder.filter((order) => order !== item))
                        }}
                     >
                        Xóa
                     </button>
               </li>
            ))}
         </ul>
         ) : (<p className='text-center text-red-500 font-bold'>Món chưa được thêm</p>)}   
  </div>
   )
}
export default BookTable