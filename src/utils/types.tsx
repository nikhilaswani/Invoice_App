export interface InvoiceProduct {
  productId: string;
  productName: string;
  quantity: number;
  rate: number;
}

export interface Invoice {
  id: string;
  clientName: string;
  products: InvoiceProduct[];
  totalAmount: number;
  status: string;
  createdAt: string;
}

export interface CreateInvoice {
  products: InvoiceProduct[];
  status: string;
}

export interface Product {
  id: string;
  productName: string;
  quantity: number;
  rate: number;
}
