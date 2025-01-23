// function Footer() {
//   return (
//     <div
//       style={{
//         height: 60,
//         backgroundColor: "lightgrey",
//         color: "black",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontWeight: "bold",
//       }}
//     >
//       <span>@encryptedInfoweb</span> <span>Mobile No.: +91 9898787876</span>
//     </div>
//   );
// }

// export default Footer;
import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer
      style={{
        height: "60px",
        backgroundColor: "#001529", // Unified dark footer background
        color: "#ffffff", // White text
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        fontWeight: "bold",
      }}
    >
      <span>@encryptedInfoweb</span>
      <span>Mobile No.: +91 9898787876</span>
    </Footer>
  );
};

export default CustomFooter;
