import { CartProvider } from "./context/CartContext.js";
import { LoginProvider } from "./context/LoginContext.js";
import AppRouter from "./router/AppRouter.js";

function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />        
      </CartProvider>
    </LoginProvider>
  );
};

export default App;