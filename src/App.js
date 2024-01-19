import { CartProvider } from "./context/CartContext.js";
import { LoginProvider } from "./context/LoginContext.js";
import PokeApi from "./ejemplos/PokeApi/PokeApi.js";
import AppRouter from "./router/AppRouter.js";

function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />        
        {/* <PokeApi /> */}
      </CartProvider>
    </LoginProvider>
  );
};

export default App;