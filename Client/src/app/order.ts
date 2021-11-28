export interface IOrder {
    id: number;
    deliveryMethod: string;
    shippingPrice: number;
    orderItems: IOrderItem[];
    status: string;
    total: number;
  }
  
  export interface IOrderItem {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
  }