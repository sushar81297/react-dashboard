import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL as string;

export async function getOrderData() {
  try {
    const response = await axios.get(
      `${baseurl}/order?filter=&page=0&page_size=10`
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function getOrderById(orderId: string) {
  try {
    const response = await axios.get(`${baseurl}/order-detail/${orderId}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
}
