// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // export const fetchInvoices = async () => {
// //   const response = await axios.get(`${API_URL}/invoices`);
// //   return response.data;
// // };

// export const fetchProducts = async () => {
//     const response = await axios.get(`${API_URL}/products`);
//     return response.data;
//   };
  
//   export const addProduct = async (product: any) => {
//     const response = await axios.post(`${API_URL}/products`, product);
//     return response.data;
//   };
  
//   export const updateProduct = async (productId: string, product: any) => {
//     const response = await axios.put(`${API_URL}/products/${productId}`, product);
//     return response.data;
//   };
  
//   export const deleteProduct = async (productId: string) => {
//     const response = await axios.delete(`${API_URL}/products/${productId}`);
//     return response.data;
//   };

//   // Fetch all invoices
// export const fetchInvoices = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;  // Return the fetched invoices
//     } catch (error) {
//         throw new Error('Error fetching invoices: ' + error.message);
//     }
// };

// // Add a new invoice
// export const addInvoice = async (invoiceData) => {
//     try {
//         const response = await axios.post(API_URL, invoiceData);
//         return response.data;  // Return the newly added invoice
//     } catch (error) {
//         throw new Error('Error adding invoice: ' + error.message);
//     }
// };

// // Delete an invoice by ID
// export const deleteInvoice = async (invoiceId) => {
//     try {
//         const response = await axios.delete(`${API_URL}/${invoiceId}`);
//         return response.data;  // Return a confirmation message
//     } catch (error) {
//         throw new Error('Error deleting invoice: ' + error.message);
//     }
// };

// // Update an invoice by ID
// export const updateInvoice = async (invoiceId, updatedData) => {
//     try {
//         const response = await axios.put(`${API_URL}/${invoiceId}`, updatedData);
//         return response.data;  // Return the updated invoice
//     } catch (error) {
//         throw new Error('Error updating invoice: ' + error.message);
//     }
// };

import axios from 'axios';
import { Invoice, Product } from '../utils/types';

const API_URL = 'http://localhost:5000/api';

// Types


// interface Invoice {
//   id: string;
//   clientName: string;
//   totalAmount: number;
//   date: string;
// }

// API to fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to add a new product
export const addProduct = async (product: Product | null): Promise<Product> => {
  try {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to update an existing product
export const updateProduct = async (productId: string, product: Product | null): Promise<Product> => {
  try {
    const response = await axios.put(`${API_URL}/products/${productId}`, product);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to delete a product by ID
export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/products/${productId}`);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to fetch all invoices
export const fetchInvoices = async (): Promise<Invoice[]> => {
  try {
    const response = await axios.get(`${API_URL}/invoices`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to add a new invoice
export const addInvoice = async (invoiceData: Invoice): Promise<Invoice> => {
  try {
    const response = await axios.post(`${API_URL}/invoices`, invoiceData);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to delete an invoice by ID
export const deleteInvoice = async (invoiceId: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/invoices/${invoiceId}`);
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API to update an invoice by ID
export const updateInvoice = async (invoiceId: string, updatedData: Invoice): Promise<Invoice> => {
  try {
    const response = await axios.put(`${API_URL}/invoices/${invoiceId}`, updatedData);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Error handler for API calls
const handleApiError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    // Handle Axios-specific error
    const errMessage = error.response?.data?.message || 'An error occurred';
    console.error(`Axios error: ${errMessage}`);
  } else if (error instanceof Error) {
    // Handle general JS errors
    console.error(`Error: ${error.message}`);
  } else {
    // Unknown error type
    console.error('An unknown error occurred');
  }
};
