import { Button, Modal, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";

import type { TableProps } from "antd";
import UserForm from "@components/UserForm";
import dataObj from "@api/setupData.json";
import { dateFormat } from "@utils/constant.ts";
import dayjs from "dayjs";

interface DataType {
  remember: boolean;
  date: dayjs.Dayjs;
  key: string;
  name: string;
  role: string;
  email: string;
}

export default function App() {
  const [visible, setVisible] = useState(false);
  const [updateData, setUpdateData] = useState({} as userForm);
  const [data, setData] = useState([] as DataType[]);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      // render: (date) => <>{dayjs(date, dateFormat)}</>,
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (role) => (
        <>
          <Tag color="geekblue" key={role}>
            {role.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (render: DataType) => (
        <Space size="middle">
          <Button onClick={() => onEditFun(render.key)}>Edit</Button>
          <Button danger onClick={() => confirm(render.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const onEditFun = (key: string) => {
    const editValue = data.find((item) => item.key === key);
    if (editValue) {
      editValue.remember = true;
      editValue.date = dayjs(editValue.date, dateFormat);
      setUpdateData(editValue);
    }
  };

  useEffect(() => {
    setData(dataObj.data);
    if (Object.keys(updateData).length > 0) {
      setVisible(true);
    }
  }, [updateData]);

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
      onOk: () => {
        const dataIndex = data.findIndex((item) => item.key === key);
        if (dataIndex > -1) data.splice(dataIndex, 1);
        setData(data);
      },
    });
  };

  const onFinish = (value: userForm) => {
    console.log("modal user form  values of form: ", value);
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
        <UserForm
          labelCol={6}
          wrapperCol={18}
          onFinish={onFinish}
          btnText="Edit"
          intitalData={updateData}
        />
      </Modal>
    </>
  );
}
