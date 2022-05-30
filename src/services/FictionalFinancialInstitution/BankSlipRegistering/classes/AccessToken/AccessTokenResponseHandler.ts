export class AccessTokenResponseHandler {

    public accessToken: string
    public tokenType: string
    public expiresIn: string

    constructor(accessTokenResponseObject: any) {
        this.accessToken = accessTokenResponseObject.data.data.access_token
        this.tokenType = accessTokenResponseObject.data.data.token_type
        this.expiresIn = accessTokenResponseObject.data.data.expires_in
    }
}