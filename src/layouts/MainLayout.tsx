// import React from "react";
// import { Layout } from "antd";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const { Content } = Layout;

// const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sidebar />
//       <Layout>
//         <Header />
//         <Content
//           style={{ margin: "16px", padding: "16px", background: "#fff" }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;
// src/layouts/MainLayout.tsx
// import React from "react";
// import { Layout } from "antd";
// import Sidebar from "../components/Sidebar";

// import Footer from "../components/Footer";
// import CustomHeader from "../components/Header";

// const { Content } = Layout;

// const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <Layout
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         flex: 1,
//         height: "100vh",
//       }}
//     >
//       <CustomHeader />
//       <Layout style={{ display: "flex", flexDirection: "row", flex: 1 }}>
//         <Sidebar />
//         <Content style={{ padding: "20px", background: "#f0f2f5" }}>
//           {children}
//         </Content>
//       </Layout>
//       <Footer />
//     </Layout>
//   );
// };

// export default MainLayout;

// import React from "react";
// import { Layout } from "antd";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";
// import CustomHeader from "../components/Header";

// const { Content } = Layout;

// const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <Layout
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         flex: 1,
//         height: "100vh",
//         backgroundColor: "#f4f7fc", // Light background for the entire app
//       }}
//     >
//       {/* Header with a gradient */}
//       <CustomHeader />
//       <Layout
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           flex: 1,
//           // backgroundColor: "#ffffff", // White background for content area
//           // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//         }}
//       >
//         {/* Sidebar */}
//         <Sidebar />
//         {/* Content Area */}
//         <Content
//           style={{
//             padding: "24px",
//             backgroundColor: "#f9fafc", // Very light gray for better contrast
//             borderRadius: "8px", // Rounded corners for a modern look
//             margin: "16px", // Add some spacing around the content
//             boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for content
//             overflowY: "auto", // Handle content overflow
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//       {/* Footer with a stylish dark tone */}
//       <Footer />
//     </Layout>
//   );
// };

// export default MainLayout;

import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CustomHeader from "../components/Header";

const { Content } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f0f2f5", // Unified background color
      }}
    >
      {/* Header */}
      <CustomHeader />
      <Layout
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        {/* Sidebar */}
        <Sidebar />
        {/* Content Area */}
        <Content
          style={{
            padding: "24px",
            backgroundColor: "#ffffff", // Unified content background
            borderRadius: "8px", // Modern look
            margin: "16px", // Consistent spacing
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
            overflowY: "auto", // Handle content overflow
          }}
        >
          {children}
        </Content>
      </Layout>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default MainLayout;
