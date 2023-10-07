export interface IOrder {
  lines: IOrderLine[];
  phone_number: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  birth_date: string;
  gender: string;
  address: string;
  geoname: number;
  diagnosis: string;
  comment: string;
  for_another_person: boolean;
  customer_first_name: string;
  customer_last_name: string;
  customer_patronymic: string;
}
export interface IOrderError {
  phone_number?: string[];
  email?: string[];
  first_name?: string[];
  last_name?: string[];
  patronymic?: string[];
  birth_date?: string[];
  gender?: string[];
  address?: string[];
  geoname?: string[];
  diagnosis?: string[];
  comment?: string[];
  customer_first_name?: string[];
  customer_last_name?: string[];
  customer_patronymic?: string[];
}
export interface IOrderLine {
  analysis: string;
  amount: number;
}
