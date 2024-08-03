export interface IError {
  type: string;
  message: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IProduct {
  readonly id?: number;
  name: string;
  code: string;
  description: string;
  image: string | File | null;
  brand: string;
  size: string;
  price: number;
  stock: number;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
  category_id: number;
}
