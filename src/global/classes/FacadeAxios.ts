import axios, { AxiosRequestConfig } from 'axios';
export class FacadeAxios {

    private config: AxiosRequestConfig

    constructor(config: AxiosRequestConfig) {
        this.config = config
    }

    public async request(): Promise<any> {
        try {
            return {
                data: await axios(this.config)
            } 
        } catch (error: any) {
            return {
                error
            }
        }
    }
}
