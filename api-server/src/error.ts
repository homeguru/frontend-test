import {ErrorLevels} from "./errorLevels";

export interface Error {
    Message: string;
    Level: ErrorLevels;
}
