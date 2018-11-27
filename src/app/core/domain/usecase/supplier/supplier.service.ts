import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SupplierGatewayAbstract } from "../../model/supplier/gateway/supplier-gateway.abstract";
import { Supplier } from "../../model/supplier/entity/supplier.model";


@Injectable()
export class SupplierService {

    constructor(private supplierService: SupplierGatewayAbstract) {
    }

    public getSuppliers(): Observable<Supplier[]> {
        return this.supplierService.getSuppliers().pipe();
    }

}