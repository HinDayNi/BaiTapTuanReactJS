import { useSelector, useDispatch } from 'react-redux';
import { updateInput, calculateBMI } from '../components/features/calculatorSlice';

const BMICalculator = () => {
  const { height, weight, result, bmiCategory } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ name, value: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateBMI());
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">🧮 8. BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Chiều cao (cm)</label>
          <input
            type="number"
            name="height"
            value={height || ''}
            onChange={handleInputChange}
            className="input"
            placeholder="Nhập chiều cao (cm)"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Cân nặng (kg)</label>
          <input
            type="number"
            name="weight"
            value={weight || ''}
            onChange={handleInputChange}
            className="input"
            placeholder="Nhập cân nặng (kg)"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full !bg-blue-600">
          Tính BMI
        </button>
      </form>
      
      {result && (
        <div className="mt-4 p-4 !bg-blue-100 dark:bg-blue-900 rounded-lg">
          <p className="font-bold">Chỉ số BMI: {result}</p>
          <p>Phân loại: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;