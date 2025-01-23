// import React from "react";
// import { Table } from "antd";

// interface InvoiceTableProps {
//   searchTerm: string;
//   filterStatus: string;
// }

// const InvoiceTable: React.FC<InvoiceTableProps> = ({ searchTerm, filterStatus }) => {

//   console.log("Search Term:", searchTerm);
//   console.log("Filter Status:", filterStatus);

//   const columns = [
//     { title: "No.", dataIndex: "no", key: "no" },
//     { title: "Product Name", dataIndex: "productName", key: "productName" },
//     { title: "Quantity", dataIndex: "quantity", key: "quantity" },
//     { title: "Rate", dataIndex: "rate", key: "rate" },
//     { title: "Total", dataIndex: "total", key: "total" },
//     { title: "Status", dataIndex: "status", key: "status" },
//   ];

//   const data = [
//     {
//       key: "1",
//       no: "1",
//       productName: "Product A",
//       quantity: 2,
//       rate: "$50",
//       total: "$100",
//       status: "Paid",
//     },
//     {
//       key: "2",
//       no: "2",
//       productName: "Product B",
//       quantity: 1,
//       rate: "$30",
//       total: "$30",
//       status: "Pending",
//     },
//   ];

//   return (
//     <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
//   );
// };

// export default InvoiceTable;

// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import { fetchInvoices } from "../services/api";

// interface Invoice {
//   key: string;
//   clientName: string;
//   totalAmount: number;
//   date: string;
// }

// const InvoiceTable: React.FC = () => {
//   const [invoices, setInvoices] = useState<Invoice[]>([]);

//   useEffect(() => {
//     const getInvoices = async () => {
//       const data = await fetchInvoices();
//       setInvoices(data);
//     };
//     getInvoices();
//   }, []);

//   const columns = [
//     { title: "Client Name", dataIndex: "clientName", key: "clientName" },
//     { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
//     { title: "Date", dataIndex: "date", key: "date" },
//   ];

//   return <Table columns={columns} dataSource={invoices} />;
// };

// export default InvoiceTable;

// import React, { useEffect, useState } from "react";
// import { Table, Tag } from "antd";
// import { fetchInvoices } from "../services/api";
// import { Invoice, InvoiceTableProps } from "../utils/types";

// const InvoiceTable: React.FC<InvoiceTableProps> = ({
//   searchTerm,
//   filterStatus,
// }) => {
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);

//   useEffect(() => {
//     const getInvoices = async () => {
//       try {
//         const data = await fetchInvoices();
//         setInvoices(data);
//         setFilteredInvoices(data);
//       } catch (error) {
//         console.error("Error fetching invoices:", error);
//       }
//     };

//     getInvoices();
//   }, []);

//   useEffect(() => {
//     let filteredData = invoices;

//     // Apply search filter
//     // if (searchTerm) {
//     //   filteredData = filteredData.filter(
//     //     (invoice) =>
//     //       // invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     //       // invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase())
//     //   );
//     // }

//     // Apply status filter
//     if (filterStatus) {
//       filteredData = filteredData.filter(
//         (invoice) => invoice.status === filterStatus
//       );
//     }

//     setFilteredInvoices(filteredData);
//   }, [searchTerm, filterStatus, invoices]);

//   const columns = [
//     { title: "No.", dataIndex: "no", key: "no" },
//     // { title: "Client Name", dataIndex: "clientName", key: "clientName" },
//     { title: "Products", dataIndex: "productName", key: "products" },
//     { title: "Quantity", dataIndex: "quantity", key: "quantity" },
//     {
//       title: "Rate",
//       dataIndex: "rate",
//       key: "rate",
//       render: (rate: number) => `$${rate.toFixed(2)}`,
//     },
//     {
//       title: "Total",
//       dataIndex: "total",
//       key: "total",
//       render: (total: number) => `$${total.toFixed(2)}`,
//     },
//     // { title: "Date", dataIndex: "date", key: "date" },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => (
//         <Tag
//           color={
//             status === "Paid"
//               ? "green"
//               : status === "Pending"
//               ? "orange"
//               : "red"
//           }
//         >
//           {status}
//         </Tag>
//       ),
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={filteredInvoices}
//       pagination={{ pageSize: 5 }}
//       rowKey="key"
//     />
//   );
// };

// export default InvoiceTable;

import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { fetchInvoices } from "../services/api";
import { Invoice, InvoiceTableProps } from "../utils/types";

const InvoiceTable: React.FC<InvoiceTableProps> = ({
  searchTerm,
  filterStatus,
}) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const data = await fetchInvoices();
        setInvoices(data);
        setFilteredInvoices(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    getInvoices();
  }, []);

  useEffect(() => {
    let filteredData = invoices;

    // Apply search filter
    if (searchTerm) {
      filteredData = filteredData.filter(
        (invoice) =>
          invoice.id.toString().includes(searchTerm.toLowerCase()) ||
          invoice.invoiceName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus) {
      filteredData = filteredData.filter(
        (invoice) => invoice.status === filterStatus
      );
    }

    setFilteredInvoices(filteredData);
  }, [searchTerm, filterStatus, invoices]);

  const columns = [
    { title: "No.", dataIndex: "no", key: "no" },
    { title: "Invoice Name", dataIndex: "invoiceName", key: "invoiceName" },
    { title: "Products", dataIndex: "productName", key: "products" },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total: number) => `$${total.toFixed(2)}`,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) =>
        new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={
            status === "Paid"
              ? "green"
              : status === "Pending"
              ? "orange"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={filteredInvoices}
      pagination={{ pageSize: 5 }}
      rowKey="key"
      style={{
        backgroundColor: "#ffffff", // Unified table background
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        margin: "16px 0",
      }}
    />
  );
};

export default InvoiceTable;

// const InvoiceTable: React.FC<InvoiceTableProps> = ({
//   searchTerm,
//   filterStatus,
// }) => {
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);

//   useEffect(() => {
//     const getInvoices = async () => {
//       try {
//         const data = await fetchInvoices();
//         setInvoices(data);
//         setFilteredInvoices(data);
//       } catch (error) {
//         console.error("Error fetching invoices:", error);
//       }
//     };

//     getInvoices();
//   }, []);

//   useEffect(() => {
//     let filteredData = invoices;

//     // Apply search filter
//     if (searchTerm) {
//       filteredData = filteredData.filter(
//         (invoice) =>
//           invoice.id.toString().includes(searchTerm.toLowerCase()) ||
//           invoice.invoiceName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Apply status filter
//     if (filterStatus) {
//       filteredData = filteredData.filter(
//         (invoice) => invoice.status === filterStatus
//       );
//     }

//     setFilteredInvoices(filteredData);
//   }, [searchTerm, filterStatus, invoices]);

//   const columns = [
//     { title: "No.", dataIndex: "no", key: "no" },
//     { title: "Invoice Name", dataIndex: "invoiceName", key: "invoiceName" },
//     { title: "Products", dataIndex: "productName", key: "products" },
//     {
//       title: "Total",
//       dataIndex: "total",
//       key: "total",
//       render: (total: number) => `$${total.toFixed(2)}`,
//     },
//     {
//       title: "Created At",
//       dataIndex: "createdAt",
//       key: "createdAt",
//       render: (createdAt: string) =>
//         new Date(createdAt).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         }),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => (
//         <Tag
//           color={
//             status === "Paid"
//               ? "green"
//               : status === "Pending"
//               ? "orange"
//               : "red"
//           }
//         >
//           {status}
//         </Tag>
//       ),
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={filteredInvoices}
//       pagination={{ pageSize: 5 }}
//       rowKey="key"
//     />
//   );
// };
