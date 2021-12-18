import axios from "axios";

export default axios.create({
    baseURL: 'https://freecurrencyapi.net/api/v2',
    
    params: {
        "access_key": 'e2e68500-5d93-11ec-a1e1-a9e84fac3c73',
    }
});