import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {StockContextProvider}   from "./context/StockContext";

function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  );
}

export default App;
