import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import ShoppingCart from './components/ShoppingCart';
import Auth from './components/Auth';
import UsersList from './components/UsersList';
import AdvancedCounter from './components/AdvancedCounter';
import BMICalculator from './components/BMICalculator';
import EventManager from './components/EventManager';
import LoginForm from './components/auth/LoginForm';
import UserProfile from './components/auth/UserProfile';
import ProductList from './components/ProductList';
import CartComponent from './components/CartComponent';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme}>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Redux Toolkit - Tuần 09</h1>
        </header>

        <main>
          <Counter />
          <TodoList />
          <ThemeToggle />
          <ShoppingCart />
          <Auth />
          <UsersList />
          <AdvancedCounter/>
          <BMICalculator />
          <EventManager />
          <UserProfile/>
          <LoginForm/>
          <ProductList/>
          <CartComponent/>
        </main>

        <footer className="mt-10 pt-6 border-t dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 - Redux Features App</p>
        </footer>
      </div>
    </div>
  );
}

export default App;