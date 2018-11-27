import { Observable } from "rxjs";
import { Seller } from "../entity/seller.model";


export abstract class SellerGatewayAbstract {

    abstract getSellers(): Observable<Seller[]>;

}