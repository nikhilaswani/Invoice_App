// import React from "react";
// import { Layout, Typography } from "antd";

// const { Header } = Layout;
// const { Title } = Typography;

// const AppHeader: React.FC = () => {
//   return (
//     <Header
//       style={{
//         background: "#fff",
//         padding: "0 16px",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Title level={3} style={{ margin: 0 }}>
//         INVOICE GENERATOR
//       </Title>
//     </Header>
//   );
// };

// export default AppHeader;
// import React from "react";
// import { Layout } from "antd";

// const { Header } = Layout;

// const CustomHeader: React.FC = () => {
//   return (
//     <Header
//       style={{
//         background: "lightgrey",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h3
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//           height: 20,
//           color: "#fff",
//           padding: "0 20px",

//           fontWeight: "bold",
//         }}
//       >
//         Invoice Management System
//       </h3>
//     </Header>
//   );
// };

// export default CustomHeader;
import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const CustomHeader: React.FC = () => {
  return (
    <Header
      style={{
        background: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#000",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Invoice Management System
      </h3>
    </Header>
  );
};

export default CustomHeader;
