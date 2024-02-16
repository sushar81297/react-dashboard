import {
  Button,
  Flex,
  Form,
  Input,
  Modal,
  Pagination,
  Space,
  Table,
} from "antd";
import { getOrderById, getOrderData } from "@api/order";
import { useEffect, useState } from "react";

import type { PaginationProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { dateFormat } from "@utils/constant.ts";
import dayjs from "dayjs";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({} as OrderResponse);
  const [order, setOrder] = useState([] as OrderDetail[]);
  const [totalAmt, setTotalAmt] = useState(0);

  const columns: TableProps<OrderData>["columns"] = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
      align: "center",
    },
    {
      title: "Seller Merchant",
      dataIndex: "seller_merchant",
      key: "seller_merchant",
    },
    {
      title: "Buyer Merchant",
      dataIndex: "buyer_merchant",
      key: "buyer_merchant",
    },
    {
      title: "Buyer Phone Number",
      dataIndex: "buyer_phone",
      key: "buyer_phone",
    },

    {
      title: "Net Amount",
      dataIndex: "net_amount",
      key: "net_amount",
    },

    {
      title: "Order Date",
      dataIndex: "order_date",
      key: "order_date",
      render: (order_date) => (
        <span>{dayjs(order_date).format(dateFormat)}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (record: OrderData) => (
        <Space size="middle">
          <Button onClick={() => detailFunc(record.id)}>Order Detail</Button>
        </Space>
      ),
    },
  ];

  const detailFunc = async (id: string) => {
    setLoading(true);
    const detailData = await getOrderById(id);
    let total = 0;
    detailData?.order_details.map((order: OrderDetail) => {
      total += order.total_amount;
    });
    setOrder(detailData.order_details);
    setTotalAmt(total);
    setLoading(false);
    setVisible(true);
  };

  const fetchData = async (searchParam: FilterReportData) => {
    const updatedData = await getOrderData(searchParam);
    const data = updatedData.orders.data.map(
      (item: OrderData, index: number) => ({
        ...item,
        key:
          updatedData.orders.currentPage * updatedData.orders.pageSize +
          (index + 1),
      })
    );
    setLoading(false);
    updatedData.orders.data = data;
    setData(updatedData.orders);
  };

  useEffect(() => {
    setLoading(true);
    fetchData({ pageNumber: 0, pageSize: 10 });
  }, []);

  const onCloseFunc = () => {
    setVisible(false);
  };

  const onChange = async (pageNumber: number, pageSize: number) => {
    setLoading(true);
    fetchData({ pageNumber: pageNumber - 1, pageSize });
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setLoading(true);
    fetchData({ pageNumber: current, pageSize });
  };

  const onFinish = (value: FilterReportData) => {
    console.log(value, "vaee");
  };

  return (
    <>
      <Form className="form" onFinish={onFinish} autoComplete="off">
        <Flex align="center" justify="center" gap={15}>
          <Form.Item name="buyerCode" label="Buyer Code">
            <Input placeholder="Buyer Code" />
          </Form.Item>
          <Form.Item name="buyerName" label="Buyer Name">
            <Input placeholder="Buyer Name" />
          </Form.Item>
          <Form.Item name="buyerPhone" label="Buyer Phone">
            <Input placeholder="Buyer Phone Number" />
          </Form.Item>
        </Flex>
        <Flex align="center" justify="center" gap={15}>
          <Form.Item name="sellerCode" label="Seller Code">
            <Input placeholder="Seller Code" />
          </Form.Item>
          <Form.Item name="sellerName" label="Seller Name">
            <Input placeholder="Seller Name" />
          </Form.Item>
          <Form.Item name="sellerPhone" label="Seller Phone">
            <Input placeholder="Seller Phone Number" />
          </Form.Item>
        </Flex>
        <Flex align="center" justify="center" gap={15}>
          <Form.Item name="netAmount" label="Net Amount">
            <Input placeholder="Net Amount" type="number" />
          </Form.Item>
          <Form.Item name="orderDate" label="Order Date">
            <Input placeholder="Order Date" />
          </Form.Item>
          <Form.Item>
            <Button className="btn-green" htmlType="submit">
              <SearchOutlined />
            </Button>
          </Form.Item>
        </Flex>
      </Form>

      <Table
        columns={columns}
        dataSource={data?.data ? data?.data : []}
        loading={loading}
        pagination={false}
      />
      <Pagination
        className="pagination"
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={data?.currentPage ? data?.currentPage + 1 : 1}
        defaultPageSize={data?.pageSize}
        total={data?.totalElements}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        responsive={true}
        onChange={onChange}
      />
      <Modal
        title="Order Detail"
        open={visible}
        onCancel={() => onCloseFunc()}
        footer={null}
      >
        <h3>Order Items:</h3>
        <div className="order-list">
          <ol>
            {order &&
              order.map((itemData: OrderDetail, index: number) => (
                <li key={index}>
                  <div>
                    <strong>{itemData?.item.display_name}</strong>
                    <strong className="order-price">
                      {itemData?.total_amount}MMK
                    </strong>
                  </div>
                  <div>
                    <strong>Quantity:</strong> {itemData.quantity}
                  </div>
                  <div>
                    <strong>Price:</strong> {itemData.amount}MMK
                  </div>
                </li>
              ))}
          </ol>
        </div>
        <h3 className="total-amt">
          Total Amount
          <strong className="order-price">{totalAmt}MMK</strong>
        </h3>

        <div className="order-btn-container">
          <Button onClick={onCloseFunc} className="btn-green order-btn">
            OK
          </Button>
        </div>
      </Modal>
    </>
  );
}
