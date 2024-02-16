import { Button, Modal, Space, Table } from "antd";
import { getOrderById, getOrderData } from "@api/order";
import { useEffect, useState } from "react";

import type { TableProps } from "antd";
import { dateFormat } from "@utils/constant.ts";
import dayjs from "dayjs";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<OrderData[]>([]);
  const [order, setOrder] = useState([] as OrderDetail[]);
  const [totalAmt, setTotalAmt] = useState(0);

  const columns: TableProps<OrderData>["columns"] = [
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
    const detailData = await getOrderById(id);
    let total = 0;
    detailData?.order_details.map((order: OrderDetail) => {
      total += order.total_amount;
    });
    setOrder(detailData.order_details);
    setTotalAmt(total);
    setVisible(true);
  };

  const fetchData = async () => {
    let updatedData = await getOrderData();
    updatedData = updatedData.orders.data.map((item: OrderData) => ({
      ...item,
      key: item.id,
    }));
    setData(updatedData as OrderData[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCloseFunc = () => {
    setVisible(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={data} />
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
