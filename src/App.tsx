import { useEffect } from 'react'
import './App.css';
import {Button} from "./components/ui/button";
import { useInvoiceStore } from "./store/useUserStore"

function App() {
   const { invoices, loading, loadInvoice } = useInvoiceStore();

   useEffect(() => {
    loadInvoice();
  }, [loadInvoice]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
       <div className="App bg-sky-50  border-pink-300">
      {/* Add these classes for testing */}
      <h1 className="text-3xl font-bold underline text-center p-4">
        Hello world!
      </h1>
      {/* ... other components */}
      <ul>
      {invoices.map((l: any) => (
        <li key={l.id}>
          {l.invoiceNumber} — {l.terms}
        </li>
      ))}
      </ul>
      <Button />
    </div>
    </>
  )
}

export default App;
