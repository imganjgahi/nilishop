import { Action } from "redux";
import {ProductActionTypes} from './actionType';

export interface IProductState {
    products: {
        loading: boolean;
        data: any[];
    }
    itemCRUD: {
        loading: string;
        data: any;
        open: string;
    }
}

interface IGetProductsList extends Action<string> {
    type: ProductActionTypes.GetProductsList
}
interface IGetProductsListSuccess extends Action<string> {
    type: ProductActionTypes.GetProductsListSuccess
    data: any
}
interface IGetProductsListFail extends Action<string> {
    type: ProductActionTypes.GetProductsListFail
}

interface ICreateProduct extends Action<string> {
    type: ProductActionTypes.CreateProduct
}
interface ICreateProductSuccess extends Action<string> {
    type: ProductActionTypes.CreateProductSuccess
}
interface ICreateProductFail extends Action<string> {
    type: ProductActionTypes.CreateProductFail
}

interface IGetProductData extends Action<string> {
    type: ProductActionTypes.GetProductData
}
interface IGetProductDataSuccess extends Action<string> {
    type: ProductActionTypes.GetProductDataSuccess;
    data: any;
}
interface IGetProductDataFail extends Action<string> {
    type: ProductActionTypes.GetProductDataFail
}

interface IEditProduct extends Action<string> {
    type: ProductActionTypes.EditProduct
}
interface IEditProductSuccess extends Action<string> {
    type: ProductActionTypes.EditProductSuccess
}
interface IEditProductFail extends Action<string> {
    type: ProductActionTypes.EditProductFail
}

interface IDeleteProduct extends Action<string> {
    type: ProductActionTypes.DeleteProduct
}
interface IDeleteProductSuccess extends Action<string> {
    type: ProductActionTypes.DeleteProductSuccess
}
interface IDeleteProductFail extends Action<string> {
    type: ProductActionTypes.DeleteProductFail
}





export type ActionModel = IGetProductsList
    | IGetProductsListSuccess
    | IGetProductsListFail
    | ICreateProduct
    | ICreateProductSuccess
    | ICreateProductFail
    | IDeleteProduct
    | IDeleteProductSuccess
    | IDeleteProductFail
    | IGetProductData
    | IGetProductDataSuccess
    | IGetProductDataFail
    | IEditProduct
    | IEditProductSuccess
    | IEditProductFail