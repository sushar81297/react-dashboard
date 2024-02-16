import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL as string;

export async function getOrderData(pageNumber = 0, pageSize = 10) {
  try {
    const response = await axios.get(
      `${baseurl}/order?filter=&page=${pageNumber}&page_size=${pageSize}`
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
