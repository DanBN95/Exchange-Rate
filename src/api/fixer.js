import axios from "axios";

export default axios.create({
    baseURL: 'https://freecurrencyapi.net/api/v2',
    
    params: {
        "access_key": '5433d780-5df8-11ec-b6d8-277ce31b1c65',
    }
});