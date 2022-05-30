import { AxiosRequestConfig } from 'axios';
import qs from 'qs';
export class ConfigAccessToken {

    public config: AxiosRequestConfig
    private data: string

    constructor(jwt: string) {
        this.data = this.generateQueryString(jwt)
        this.config = this.generateConfig()
    }

    private generateConfig() {
        return {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: this.data,
            url: 'https://example.com/auth/server/v1.1/token'
        }
    }

    private generateQueryString(jwt: string): string {
        return qs.stringify({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt
        })
    }
}
