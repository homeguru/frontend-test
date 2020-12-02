import {ErrorLevels} from "./errorLevels";
import {ReverseProxy} from "./reverse.proxy.interface";

export interface Config {
    Ports: {
        HTTP: number;
        HTTPS: number
    }

    MultiThreadEnabled: boolean;
    MultiThreadCount: number;

    AlertEmail: string;

    ErrorsConfig: {
        RestartOnCritical: boolean;
        ShowErrors: boolean;
        AlertLevel: ErrorLevels;
    }

    Cert: {
        Key: string;
        Crt: string;
    }

    Proxies: ReverseProxy[]
}
