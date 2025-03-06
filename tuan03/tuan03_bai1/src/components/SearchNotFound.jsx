import nothing from "../assets/nothing.png"; 

const btns = ["Sweet Cake", "Black Cake", "Pozole Verde", "Healthy food"];
const colors = ["!bg-red-100", "!bg-blue-400", "!bg-green-400", "!bg-yellow-400"]; 
const textColors = ["!text-pink-500", "!text-blue-900", "!text-green-900", "!text-yellow-900"]; 

function SearchNotFound() {
  return (
    <div className="flex justify-end flex-col items-center text-right p-6">
      {/* Tiêu đề thông báo */}
      <h2 className="text-xl font-semibold text-gray-700">
        Sorry, no results were found for <span className="text-pink-500">"Cakescascsa"</span>
      </h2>

      {/* Ảnh thông báo */}
      <img src={nothing} alt="Not Found" className="max-w-xs mx-auto mt-4" />

      {/* Mô tả */}
      <p className="text-gray-500 mt-3">
        We have all your Independence Day sweets covered.
      </p>

      {/* Danh sách button */}
      <div className="mt-4 flex flex-wrap justify-center gap-3 w-full">
  {btns.map((item, index) => (
    <button
      key={index}
      className={`px-6 py-3 ${colors[index % colors.length]} ${textColors[index % textColors.length]} 
                 text-sm font-medium rounded-lg shadow-md hover:opacity-80 transition w-40 text-center`}
    >
      {item}
    </button>
  ))}
</div>

    </div>
  );
}

export default SearchNotFound;
