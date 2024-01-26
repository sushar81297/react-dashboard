import { Button, Modal, Space, Table, Tag } from "antd";

import ButtonBox from "@components/ButtonBox";
import DatePickerBox from "@components/DatePickerBox";
import { Form } from "antd";
import InputField from "@components/InputField";
import type { TableProps } from "antd";
import dataObj from "@api/setupData.json";
import { useState } from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
interface userForm {
  username?: string;
  password?: string;
  datepicker?: string;
}

export default function App() {
  const [visible, setVisible] = useState(false);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (render: DataType) => (
        <Space size="middle">
          <Button onClick={() => setVisible(true)}>Edit</Button>
          <Button danger onClick={() => confirm(render.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = dataObj.data;

  const confirm = (key: string) => {
    console.log(key, "key");
    Modal.confirm({
      title: "Delete Confirmation",
      content: "Are you sure want to delete!!",
      okText: "Yes",
      cancelText: "Cancel",
      okButtonProps: {
        danger: true,
      },
      cancelButtonProps: {
        danger: true,
      },
    });
  };
  const onFinish = (value: userForm) => {
    console.log("Received values of form: ", value);
  };
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit User"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          layout="horizontal"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <InputField
            label="User Name"
            name="username"
            required={true}
            requiredMessage="Please input your Username!"
            placeholder="Username"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            required={true}
            requiredMessage="Please input your Email!"
            placeholder="Email"
          />
          <DatePickerBox label="DatePicker" name="datepicker" />
          <ButtonBox
            btnType="submit"
            colOffset={6}
            styleClass="btn-green"
            text="Create"
          />
        </Form>
      </Modal>
    </>
  );
}
