interface UserForm {
  key: string;
  name?: string;
  email?: string;
  date?: moment.Moment;
  role?: string;
  remember?: boolean; // Corrected to boolean type
}

interface Login {
  username?: string;
  password?: string;
  remember?: string;
}

interface OrderData {
  id: string;
  buyer_merchant: string;
  seller_merchant: string;
  net_amount: number;
  buyer_phone: string;
  order_date: moment.Moment;
}

interface OrderDetail {
  amount: number;
  item: {
    name: string;
    display_name: string;
    amount: number;
    unit_name: string;
  };
  quantity: number;
  total_amount: number;
}

interface OrderResponse {
  data: OrderData[];
  totalElements: number | undefined;
  pageSize: number | undefined;
  currentPage: number;
}

interface FilterReportData {
  buyerCode?: string;
  buyerName?: string;
  buyerPhone?: string;
  sellerCode?: string;
  sellerName?: string;
  sellerPhone?: string;
  netAmount?: number;
  orderDate?: string;
  pageNumber: number;
  pageSize: number;
}
