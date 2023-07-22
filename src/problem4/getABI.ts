const fetch = require('node-fetch'); 
import { API_KEY } from "./config";

export async function get_abi(token_address: string){
    var api_key = API_KEY;

    const response = await fetch(`https://api.bscscan.com/api?module=contract&action=getabi&address=${token_address}&apikey=${api_key}`);
    const abi = await response.json();

    if (abi['status'] == 1) {
        return abi['result'];
    }
    else {
        throw new Error("Invalid API key or unable to get abi");
    }
}
