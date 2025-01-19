export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  created_at: string;
  user_id: string;
}

export interface CreateProductInput {
  name: string;
  description?: string;
  price: number;
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  id: string;
}