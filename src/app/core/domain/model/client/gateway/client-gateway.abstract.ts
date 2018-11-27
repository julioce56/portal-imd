import { Observable } from "rxjs";
import { Client } from "../entity/client.model";

export abstract class ClientGatewayAbstract {

    abstract getClients(): Observable<Client[]>;

}