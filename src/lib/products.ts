import { supabase, retryOperation } from './supabase';
import type { CreateProductInput, Product, UpdateProductInput } from '../types/product';

export async function createProduct(input: CreateProductInput): Promise<Product> {
  const { data, error } = await retryOperation(async () => 
    supabase
      .from('products')
      .insert([{ ...input, user_id: supabase.auth.getUser()?.id }])
      .select()
      .single()
  );

  if (error) throw error;
  return data;
}

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await retryOperation(async () =>
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
  );

  if (error) throw error;
  return data || [];
}

export async function getProduct(id: string): Promise<Product | null> {
  const { data, error } = await retryOperation(async () =>
    supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
  );

  if (error) throw error;
  return data;
}

export async function updateProduct(input: UpdateProductInput): Promise<Product> {
  const { id, ...updateData } = input;
  const { data, error } = await retryOperation(async () =>
    supabase
      .from('products')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
  );

  if (error) throw error;
  return data;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await retryOperation(async () =>
    supabase
      .from('products')
      .delete()
      .eq('id', id)
  );

  if (error) throw error;
}