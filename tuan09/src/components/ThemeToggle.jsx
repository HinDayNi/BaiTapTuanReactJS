import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../components/features/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">🔁 3. Toggle Theme</h2>
      <div className="flex items-center justify-between">
        <span>Current theme: {theme}</span>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="btn btn-primary"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
