import { ethers } from "ethers";
import { get_abi } from './getABI';  

var node_url = "https://binance.nodereal.io";
const provider = new ethers.JsonRpcProvider(node_url);

async function get_holder_balances(token_address: string,holder_list: string | any[]) {
    // REPLACE ABI MANUALLY HERE IF NOT USING BSCSCAN API TO GET ABI
    const abi = await get_abi(token_address);
    
    const contract = new ethers.Contract(token_address, abi, provider);
    for (var i = 0; i < holder_list.length; i++) {
        var balance = await contract.balanceOf(holder_list[i]);
        var decimals = await contract.decimals();
        var formatted_balance = ethers.formatUnits(balance, decimals);
        formatted_balance = Number(formatted_balance).toLocaleString()
        var name = await contract.name();
        console.log(holder_list[i], formatted_balance + " " + name.toString());
    }
}

get_holder_balances('0xc0ecb8499d8da2771abcbf4091db7f65158f1468', ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", "0x0020c5222a24e4a96b720c06b803fb8d34adc0af", "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"]);