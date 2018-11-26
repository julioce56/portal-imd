import { Injectable } from "@angular/core";

declare var environment: any;

@Injectable()
export class ConfigurationService {

    static get config() {
        return {
            urlBase: environment.apiBaseUrl,
            portBase: environment.portBase
        }
    }
}