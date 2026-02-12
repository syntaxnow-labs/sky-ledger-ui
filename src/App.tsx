import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useInvoiceStore } from "./store/useUserStore";
import { useAuthStore } from './store/useAuthStore';
import DashboardLayout from "./layout/DashboardLayout";
import LoginPage from './pages/LoginPage';

function App() {
    const { token } = useAuthStore();
    const isAuthenticated = !!token;

   const { loading, loadInvoice } = useInvoiceStore();

   useEffect(() => {
    loadInvoice();
  }, [loadInvoice]);

  if (loading) return <p>Loading...</p>;

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )} />

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardLayout />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        <Route index element={<div>Dashboard Home</div>} />
        <Route path="quotations" element={<div>Quotations</div>} />
        <Route path="invoices" element={<div>Invoices</div>} />
        <Route path="credit-notes" element={<div>Credit Notes</div>} />
        <Route path="catalog" element={<div>Catalog</div>} />
        <Route path="inventory" element={<div>Inventory</div>} />
        <Route path="clients" element={<div>Clients</div>} />
        <Route path="expenses" element={<div>Expenses</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
