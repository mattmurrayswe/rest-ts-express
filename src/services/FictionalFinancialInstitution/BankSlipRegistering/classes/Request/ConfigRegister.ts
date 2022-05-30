export class ConfigRegister {

    public config: AxiosRequestConfig

    constructor(accessToken: string, xSignature: string, body: Body) {
        this.config = this.generateConfig(accessToken, xSignature, body)
    }

    private generateConfig(accessToken: string, xSignature: string, body: Body): AxiosRequestConfig {
        return {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
                'X-Signature': xSignature,
                'X-Nonce': '1574693951000',
                'X-timestamp': '2022-05-20T10:19:00-00:00',
                'X-Algorithm': 'SHA256'
            },
            data: body,
            url: 'https://proxy.api.prebanco.com.br/v1/boleto/registrarBoleto'
        }
    }
}
import { AxiosRequestConfig } from 'axios';
import { Body } from './Body'
