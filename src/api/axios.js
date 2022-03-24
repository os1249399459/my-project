import axios from axios
import config from "../config"

const beseUrl = process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {

    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    getInsiderConfig(){
        const config = {
           baseUrl : this.baseUrl,
           header: {}
        }
        return config
    }
}

export default new HttpRequest()