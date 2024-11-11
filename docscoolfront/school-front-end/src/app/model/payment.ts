import {PaymentStatus} from "../enums/PaymentStatus";
import {PaymentType} from "../enums/PaymentType";

export interface Payment{

  id: number;
  date: Date;
  amount: number;
  type: PaymentType;
  status: PaymentStatus;


}
