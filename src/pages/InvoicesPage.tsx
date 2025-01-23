// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   Button,
//   Space,
//   Typography,
//   Modal,
//   Form,
//   Input,
//   InputNumber,
//   message,
// } from "antd";
// import { PlusOutlined, FilePdfOutlined } from "@ant-design/icons";
// import {
//   fetchInvoices,
//   addInvoice,
//   deleteInvoice,
//   updateInvoice,
// } from "../services/api";

// const { Title } = Typography;

// const InvoicesPage: React.FC = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [editingInvoice, setEditingInvoice] = useState(null);

//   const [form] = Form.useForm();

//   // Fetch invoices from API
//   const loadInvoices = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchInvoices();
//       setInvoices(data);
//     } catch (error) {
//       message.error("Failed to fetch invoices.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadInvoices();
//   }, []);

//   // Handle form submission (add/edit invoice)
//   const handleFinish = async (values: any) => {
//     try {
//       if (editingInvoice) {
//         await updateInvoice(editingInvoice.id, values);
//         message.success("Invoice updated successfully!");
//       } else {
//         await addInvoice(values);
//         message.success("Invoice added successfully!");
//       }
//       loadInvoices();
//       setIsModalVisible(false);
//       form.resetFields();
//     } catch (error) {
//       message.error("Failed to save invoice.");
//     }
//   };

//   // Handle delete invoice
//   const handleDelete = async (invoiceId: string) => {
//     try {
//       await deleteInvoice(invoiceId);
//       message.success("Invoice deleted successfully!");
//       loadInvoices();
//     } catch (error) {
//       message.error("Failed to delete invoice.");
//     }
//   };

//   // Open modal for adding or editing
//   const openModal = (invoice: any = null) => {
//     setEditingInvoice(invoice);
//     setIsModalVisible(true);
//     if (invoice) {
//       form.setFieldsValue(invoice);
//     }
//   };

//   // Columns for the table
//   const columns = [
//     { title: "No.", dataIndex: "id", key: "id" },
//     { title: "Product Name", dataIndex: "productName", key: "productName" },
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
//       render: (_: any, record: any) =>
//         `$${(record.quantity * record.rate).toFixed(2)}`,
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => (
//         <span style={{ color: status === "Paid" ? "green" : "red" }}>
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button type="link" onClick={() => openModal(record)}>
//             Edit
//           </Button>
//           <Button type="link" danger onClick={() => handleDelete(record.id)}>
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <div
//         style={{
//           marginBottom: "16px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Title level={4}>List of Invoices</Title>
//         <Space>
//           <Button icon={<FilePdfOutlined />} type="default">
//             PDF
//           </Button>
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             onClick={() => openModal()}
//           >
//             Add Invoice
//           </Button>
//         </Space>
//       </div>
//       <Table
//         columns={columns}
//         dataSource={invoices}
//         loading={loading}
//         rowKey="id"
//         pagination={{ pageSize: 5 }}
//       />
//       <Modal
//         title={editingInvoice ? "Edit Invoice" : "Add Invoice"}
//         visible={isModalVisible}
//         onCancel={() => {
//           setIsModalVisible(false);
//           form.resetFields();
//         }}
//         onOk={() => form.submit()}
//       >
//         <Form form={form} layout="vertical" onFinish={handleFinish}>
//           <Form.Item
//             name="productName"
//             label="Product Name"
//             rules={[
//               { required: true, message: "Please enter the product name!" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="quantity"
//             label="Quantity"
//             rules={[{ required: true, message: "Please enter the quantity!" }]}
//           >
//             <InputNumber min={1} style={{ width: "100%" }} />
//           </Form.Item>
//           <Form.Item
//             name="rate"
//             label="Rate"
//             rules={[{ required: true, message: "Please enter the rate!" }]}
//           >
//             <InputNumber min={0} style={{ width: "100%" }} />
//           </Form.Item>
//           <Form.Item
//             name="status"
//             label="Status"
//             rules={[{ required: true, message: "Please enter the status!" }]}
//           >
//             <Input placeholder="e.g., Paid or Unpaid" />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default InvoicesPage;

import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Space,
  Typography,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
  Select,
} from "antd";
import {
  PlusOutlined,
  FilePdfOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import {
  fetchInvoices,
  addInvoice,
  deleteInvoice,
  updateInvoice,
  fetchProducts,
} from "../services/api";
import { Invoice, InvoiceProduct, Product } from "../utils/types";

const { Title } = Typography;
const { Option } = Select;

// Types

const InvoicesPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  const [form] = Form.useForm();

  const loadInvoices = async () => {
    setLoading(true);
    try {
      const data = await fetchInvoices();
      const formattedData = data.map((invoice) => ({
        ...invoice,
        clientName: invoice.clientName || "Unknown Client",

        totalAmount: invoice.products.reduce(
          (sum: number, product) => sum + product.quantity * product.rate,
          0
        ),
        createdAt: invoice.createdAt || new Date().toISOString(),
      }));
      setInvoices(formattedData as Invoice[]);
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to fetch invoices.");
    } finally {
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    loadInvoices();
    loadProducts();
  }, []);

  const handleFinish = async (values: Invoice) => {
    try {
      if (editingInvoice) {
        await updateInvoice(editingInvoice.id, values);
        message.success("Invoice updated successfully!");
      } else {
        await addInvoice(values);
        message.success("Invoice added successfully!");
      }
      loadInvoices();
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to save invoice.");
    }
  };

  const handleDelete = async (invoiceId: string) => {
    try {
      await deleteInvoice(invoiceId);
      message.success("Invoice deleted successfully!");
      loadInvoices();
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to delete invoice.");
    }
  };

  const openModal = (invoice: Invoice | null = null) => {
    setEditingInvoice(invoice);
    setIsModalVisible(true);
    if (invoice) {
      form.setFieldsValue(invoice);
    }
  };

  const columns = [
    { title: "No.", dataIndex: "id", key: "id" },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: (products: InvoiceProduct[]) =>
        products.map((product, index) => (
          <div key={index}>
            {product.productName} (x{product.quantity}) - $
            {product.rate.toFixed(2)}
          </div>
        )),
    },
    {
      title: "Total",
      dataIndex: "products",
      key: "total",
      render: (products: InvoiceProduct[]) =>
        `$${products
          .reduce((sum, product) => sum + product.quantity * product.rate, 0)
          .toFixed(2)}`,
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
        <span style={{ color: status === "Paid" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Invoice) => (
        <Space size="middle">
          <Button type="link" onClick={() => openModal(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title level={4}>List of Invoices</Title>
        <Space>
          <Button icon={<FilePdfOutlined />} type="default">
            PDF
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => openModal()}
          >
            Add Invoice
          </Button>
        </Space>
      </div>
      <Table
        columns={columns}
        dataSource={invoices}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
      <Modal
        title={editingInvoice ? "Edit Invoice" : "Add Invoice"}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.List
            name="products"
            initialValue={editingInvoice?.products || []}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "productId"]}
                      rules={[
                        { required: true, message: "Product is required!" },
                      ]}
                    >
                      <Select
                        placeholder="Select Product"
                        onChange={(value) => {
                          const selectedProduct = products.find(
                            (product) => product.id === value
                          );
                          if (selectedProduct) {
                            form.setFieldValue(
                              [name, "productName"],
                              selectedProduct.productName
                            );
                            form.setFieldValue(
                              [name, "rate"],
                              selectedProduct.rate
                            );
                          }
                        }}
                      >
                        {products.map((product) => (
                          <Option key={product.id} value={product.id}>
                            {product.productName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "productName"]}
                      hidden
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "quantity"]}
                      rules={[
                        { required: true, message: "Quantity is required!" },
                      ]}
                    >
                      <InputNumber placeholder="Quantity" min={1} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "rate"]}
                      rules={[{ required: true, message: "Rate is required!" }]}
                    >
                      <InputNumber placeholder="Rate" min={0} readOnly />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Product
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please enter the status!" }]}
          >
            <Input placeholder="e.g., Paid or Unpaid" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InvoicesPage;
