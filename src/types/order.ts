export type Order = {
  number: number
};

export enum OrderStatus {
  Created = 'created',
  Pending = 'pending',
  Done = 'done'
}

export type OrderModel = Order & {
  _id: string;
  name: string;
  status: OrderStatus;
  ingredients: string[],
  createdAt: string,
  updatedAt: string
}

export type WsOrdersMessage = {
  success: boolean;
  orders: OrderModel[];
  total: number;
  totalToday: number;
}
