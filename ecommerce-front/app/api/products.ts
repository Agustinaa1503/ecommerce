import { CreateProduct, UpdateProduct }   from '../../interfaces/product.interface';
import { toast } from 'react-toastify';


const API = process.env.API_URL;

export const createProductRequest = async (productFormData: FormData) => {
  try {
    const response = await fetch(`${API}/products`, {
      method: 'POST',
      body: productFormData, // Envía el FormData directamente como cuerpo
    });

    if (!response.ok) {
      throw new Error('Error al crear el producto');
    }

    const responseData = await response.json();
    if (responseData && responseData.message === 'Producto existente') {
      throw new Error('El producto ya existe');
    }

    toast.success('Producto creado exitosamente');
    return responseData;
  } catch (error: any) {
    console.error('Error al crear el producto:', error.message);
    toast.error(error.message || 'Error al crear el producto');
    throw error;
  }
};



export const getProductsRequest = async () => fetch(`${API}/products`);


export const getProductRequest = async (id: string) => fetch(`${API}/products/${id}`);


export const updateProductRequest = async (id: string, product: UpdateProduct) => {
  try {
    const response = await fetch(`${API}/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText || 'Error al modificar el producto');
    }

    toast.success('Producto modificado exitosamente');
    return response.json();
  } catch (error: any) {
    console.error('Error al modificar el producto:', error.message);
    toast.error(error.message || 'Error al modificar el producto');
    throw error;
  }
};


export const deleteProductRequest = async (id: string) => {
  try {
    const response = await fetch(`${API}/products/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || 'Error al eliminar el producto');
    }

    toast.success('Producto eliminado exitosamente');
  } catch (error: any) {
    console.error('Error al eliminar el producto:', error.message);
    toast.error(error.message || 'Error al eliminar el producto');
    throw error;
  }
};

