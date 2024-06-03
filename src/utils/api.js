import axios from "axios";

const BASE_URL = "http://www.omdbapi.com/";
const OMDB_API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=5a76ed71";

export const fetchData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                apikey: OMDB_API_KEY,
                ...params
            }
        });
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
}





