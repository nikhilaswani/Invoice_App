// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   Button,
//   Space,
//   Typography,
//   Modal,
//   Form,
//   Input,
//   message,
// } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import {
//   fetchProducts,
//   addProduct,
//   deleteProduct,
//   updateProduct,
// } from "../services/api";

// const { Title } = Typography;

// const ProductsPage: React.FC = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const [form] = Form.useForm();

//   // Fetch products from the API
//   const loadProducts = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchProducts();
//       setProducts(data);
//     } catch (error) {
//       message.error("Failed to fetch products.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   // Add or update a product
//   const handleFinish = async (values: any) => {
//     try {
//       if (editingProduct) {
//         await updateProduct(editingProduct.id, values);
//         message.success("Product updated successfully!");
//       } else {
//         await addProduct(values);
//         message.success("Product added successfully!");
//       }
//       loadProducts();
//       setIsModalVisible(false);
//       form.resetFields();
//     } catch (error) {
//       message.error("Failed to save product.");
//     }
//   };

//   // Delete a product
//   const handleDelete = async (productId: string) => {
//     try {
//       await deleteProduct(productId);
//       message.success("Product deleted successfully!");
//       loadProducts();
//     } catch (error) {
//       message.error("Failed to delete product.");
//     }
//   };

//   // Open modal for adding or editing
//   const openModal = (product: any = null) => {
//     setEditingProduct(product);
//     setIsModalVisible(true);
//     if (product) {
//       form.setFieldsValue(product);
//     }
//   };

//   const columns = [
//     { title: "Product ID", dataIndex: "id", key: "id" },
//     { title: "Product Name", dataIndex: "name", key: "name" },
//     { title: "Category", dataIndex: "category", key: "category" },
//     {
//       title: "Price",
//       dataIndex: "price",
//       key: "price",
//       render: (price: number) => `$${price.toFixed(2)}`,
//     },
//     { title: "Stock", dataIndex: "stock", key: "stock" },
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
//         <Title level={4}>Product List</Title>
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={() => openModal()}
//         >
//           Add Product
//         </Button>
//       </div>
//       <Table
//         columns={columns}
//         dataSource={products}
//         loading={loading}
//         rowKey="id"
//         pagination={{ pageSize: 5 }}
//       />
//       <Modal
//         title={editingProduct ? "Edit Product" : "Add Product"}
//         visible={isModalVisible}
//         onCancel={() => {
//           setIsModalVisible(false);
//           form.resetFields();
//         }}
//         onOk={() => form.submit()}
//       >
//         <Form form={form} layout="vertical" onFinish={handleFinish}>
//           <Form.Item
//             name="name"
//             label="Product Name"
//             rules={[
//               { required: true, message: "Please enter the product name!" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="category"
//             label="Category"
//             rules={[{ required: true, message: "Please enter the category!" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="price"
//             label="Price"
//             rules={[{ required: true, message: "Please enter the price!" }]}
//           >
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item
//             name="stock"
//             label="Stock"
//             rules={[
//               { required: true, message: "Please enter the stock quantity!" },
//             ]}
//           >
//             <Input type="number" />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default ProductsPage;

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
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../services/api";
import { Product } from "../utils/types";

const { Title } = Typography;

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   stock: number;
//   createdAt: string;
// }

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [form] = Form.useForm();

  // Fetch products from the API
  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Add or update a product
  // eslint-disable-next-line
  const handleFinish = async (values: Product | null) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, values);
        message.success("Product updated successfully!");
      } else {
        await addProduct(values);
        message.success("Product added successfully!");
      }
      loadProducts();
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to save product.");
    }
  };

  // Delete a product
  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct(productId);
      message.success("Product deleted successfully!");
      loadProducts();
    } catch (error) {
      console.error("An error occurred:", error);
      message.error("Failed to delete product.");
    }
  };

  // Open modal for adding or editing
  const openModal = (product: Product | null = null) => {
    setEditingProduct(product);
    setIsModalVisible(true);
    if (product) {
      form.setFieldsValue(product);
    } else {
      form.resetFields();
    }
  };

  const columns = [
    { title: "Product ID", dataIndex: "id", key: "id", width: 100 },
    { title: "Product Name", dataIndex: "name", key: "name", width: 150 },
    { title: "Category", dataIndex: "category", key: "category", width: 150 },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
      width: 100,
    },
    { title: "Stock", dataIndex: "stock", key: "stock", width: 100 },
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
      width: 150,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Product) => (
        <Space size="middle">
          <Button type="link" onClick={() => openModal(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
      width: 150,
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
        <Title level={4}>Product List</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal()}
        >
          Add Product
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={products}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
      />
      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        onOk={() => form.submit()}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={() => handleFinish(editingProduct)}
        >
          <Form.Item
            name="name"
            label="Product Name"
            rules={[
              { required: true, message: "Please enter the product name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please enter the category!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter a valid price!" }]}
          >
            <InputNumber
              min={0}
              placeholder="Price"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock"
            rules={[
              { required: true, message: "Please enter the stock quantity!" },
            ]}
          >
            <InputNumber
              min={0}
              placeholder="Stock Quantity"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductsPage;
