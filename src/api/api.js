import { httpGet } from "../tools/netWork";

export const testGet = () => {
    return httpGet('/getworks')
}