// import React from "react";
// import InvoiceTable from "../components/InvoiceTable";
// import ButtonGroup from "../components/ButtonGroup";

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <div
//         style={{
//           marginBottom: "16px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <h2>LIST OF INVOICES</h2>
//         <ButtonGroup />
//       </div>
//       <InvoiceTable />
//     </>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { Input, Select, Button, Space, Typography } from "antd";
import InvoiceTable from "../components/InvoiceTable";

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (value: string) => {
    setFilterStatus(value);
  };

  const handleExport = (format: "csv" | "pdf") => {
    console.log(`Exporting invoices as ${format}`);
  };

  return (
    <>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={3}>List of Invoices</Title>
        <Space size="middle">
          <Search
            placeholder="Search invoices..."
            allowClear
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
          <Select
            placeholder="Filter by status"
            style={{ width: 150 }}
            allowClear
            onChange={handleFilterChange}
          >
            <Option value="paid">Paid</Option>
            <Option value="unpaid">Unpaid</Option>
            <Option value="overdue">Overdue</Option>
          </Select>
          <Button onClick={() => handleExport("csv")}>Export CSV</Button>
          <Button onClick={() => handleExport("pdf")}>Export PDF</Button>
        </Space>
      </div>
      <InvoiceTable searchTerm={searchTerm} filterStatus={filterStatus} />
    </>
  );
};

export default HomePage;
