import React from "react";
import { Button, Space } from "antd";
import { FilePdfOutlined, PlusOutlined } from "@ant-design/icons";

const ButtonGroup: React.FC = () => {
  return (
    <Space>
      <Button icon={<FilePdfOutlined />} type="default">
        PDF
      </Button>
      <Button icon={<PlusOutlined />} type="primary">
        Add Invoice
      </Button>
    </Space>
  );
};

export default ButtonGroup;
