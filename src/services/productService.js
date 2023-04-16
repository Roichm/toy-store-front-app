import httpService from "./httpService";

export function createProduct(product){
    return httpService.post("/product", product);
}

export function getAll(){
    return httpService.get("/products")
}

export function getProductsByCategoryName(categoryName){
    return httpService.get(`/products/${categoryName}`);
}

export function getProductByProductName(productName){
    return httpService.get(`/products/${productName}`);
}

export function getProductById(id){
    return httpService.delete(`products/${id}`);
}

export function updateProduct(id, product){
    return httpService.put(`products/${id}`, product);
}
export function deleteProduct(id){
    return httpService.delete(`/products/${id}`);

}

const cardService = {
    createProduct,
    getAll,
    getProductsByCategoryName,
    getProductByProductName,
    getProductById,
    updateProduct,
    deleteProduct,
}

export default cardService