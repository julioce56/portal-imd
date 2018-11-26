import { Observable } from "rxjs";
import { Supplier } from "../entity/supplier.model";


export abstract class SupplierGatewayAbstract {

    abstract getSuppliers(): Observable<Supplier[]>;

}