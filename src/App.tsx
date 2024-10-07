import { Header } from "./components/Header/Header";
import InvoiceForm from "./components/InvoiceForm/InvoiceForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ToastContainer />
        <InvoiceForm />
      </main>
    </div>
  );
}

export default App;
