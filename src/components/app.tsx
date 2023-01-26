import { BrowserRouter } from "react-router-dom";
import { Header } from "./header";

export function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
