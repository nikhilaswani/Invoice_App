// export interface InvoiceProduct {
//   productId: string;
//   productName: string;
//   quantity: number;
//   rate: number;
// }

// export interface Invoice {
//   id: string;
//   invoiceName: string;
//   products: InvoiceProduct[];
//   totalAmount: number;
//   status: string;
//   createdAt: string;
// }

// export interface CreateInvoice {
//   products: InvoiceProduct[];
//   status: string;
// }

// export interface Product {
//   id: string;
//   productName: string;
//   quantity: number;
//   rate: number;
// }

// export interface InvoiceTableProps {
//   searchTerm: string;
//   filterStatus: string;
// }

export interface Product {
  id: string; // Unique identifier for the product
  productName: string; // Name of the product
  category: string; // Category of the product
  price: number; // Price of the product
  stock: number; // Quantity available in stock
  createdAt: string; // Timestamp when the product was created
}

export interface Invoice {
  id: string; // Unique identifier for the invoice
  invoiceName: string; // Name of the invoice
  products: Product[]; // List of products in the invoice
  totalAmount: number; // Total amount for the invoice
  status: "paid" | "unpaid" | "overdue"; // Status of the invoice
  createdAt: string; // Timestamp when the invoice was created
}

export interface SearchFilterProps {
  searchTerm: string; // Term to filter invoices or products
  filterStatus?: string; // Status filter (e.g., paid, unpaid)
}

export interface InvoiceTableProps {
  searchTerm: string;
  filterStatus: string;
}
