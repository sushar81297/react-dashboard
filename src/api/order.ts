import { sfAnd, sfEqual } from "spring-filter-query-builder";

import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL as string;

export async function getOrderData(searchParam: FilterReportData) {
  try {
    let uri = `${baseurl}/order?filter=&page=${searchParam.pageNumber}&page_size=${searchParam.pageSize}`;
    console.log("filter ---------", searchParam.filter);
    if (searchParam.filter && searchParam.filter.length) {
      const conditions = searchParam.filter.map((f: searchParam) =>
        sfEqual(f.key, f.value)
      );
      const query = sfAnd(conditions);
      uri = `${baseurl}/order?filter=${query.toString()}&page=${
        searchParam.pageNumber
      }&page_size=${searchParam.pageSize}`;
    }
    console.log("uri ---------", uri);
    const response = await axios.get(uri);
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
