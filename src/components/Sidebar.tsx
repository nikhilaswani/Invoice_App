// import React from "react";
// import { Menu } from "antd";
// import { Link } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   return (
//     <div style={{ width: 200 }}>
//       <Menu
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//         style={{ height: "100%" }}
//       >
//         <Menu.Item key="1">
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Link to="/products">Products</Link>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <Link to="/invoices">Invoices</Link>
//         </Menu.Item>
//       </Menu>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { Layout, Menu } from "antd";
// import { Link } from "react-router-dom";
// import {
//   HomeOutlined,
//   FileTextOutlined,
//   AppstoreAddOutlined,
// } from "@ant-design/icons";

// const { Sider } = Layout;

// const Sidebar: React.FC = () => {
//   return (
//     <Sider width={200} className="site-layout-background">
//       <div
//         className="logo"
//         style={{ padding: "16px", color: "#fff", fontSize: "20px" }}
//       >
//         Invoice App
//       </div>
//       <Menu theme="dark" mode="inline">
//         <Menu.Item key="1" icon={<HomeOutlined />}>
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2" icon={<FileTextOutlined />}>
//           <Link to="/invoices">Invoices</Link>
//         </Menu.Item>
//         <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
//           <Link to="/products">Products</Link>
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default Sidebar;

// import { Layout, Menu } from "antd";
// import { useNavigate } from "react-router-dom";
// import {
//   HomeOutlined,
//   FileTextOutlined,
//   AppstoreAddOutlined,
// } from "@ant-design/icons";

// const { Sider } = Layout;

// const Sidebar: React.FC = () => {
//   const navigate = useNavigate();
//   return (
//     <Sider>
//       <div
//         className="logo"
//         style={{
//           padding: "16px",
//           color: "white",
//           fontSize: "20px",
//         }}
//       >
//         Invoice App
//       </div>
//       <Menu
//         onClick={({ key }) => {
//           navigate(key);
//         }}
//         defaultSelectedKeys={[window.location.pathname]}
//         items={[
//           { label: "Home", key: "/", icon: <HomeOutlined /> },
//           { label: "Invoices", key: "/invoices", icon: <FileTextOutlined /> },
//           {
//             label: "Products",
//             key: "/products",
//             icon: <AppstoreAddOutlined />,
//           },
//         ]}
//       ></Menu>
//     </Sider>
//   );
// };

// export default Sidebar;

import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  FileTextOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Sider style={{ backgroundColor: "#001529" }}>
      {" "}
      {/* Unified sidebar styling */}
      <div
        style={{
          padding: "16px",
          color: "white",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Invoice App
      </div>
      <Menu
        theme="dark"
        onClick={({ key }) => navigate(key)}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          { label: "Invoices", key: "/invoices", icon: <FileTextOutlined /> },
          {
            label: "Products",
            key: "/products",
            icon: <AppstoreAddOutlined />,
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
