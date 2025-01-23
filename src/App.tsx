import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import InvoicesPage from "./pages/InvoicesPage";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

{
  /* <div>
  <Header />
<div>
  <SideMenu />
  <Content />
</div>
  <Footer />
</div> */
}
