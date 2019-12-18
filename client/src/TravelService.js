import axios from "axios";
import { resolve } from "dns";
import { rejects } from "assert";


class TravelService {

    static getTravels() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get('http://localhost:3000/api/travel/retrieve');
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post
                    }))
                );
            } catch(err) {
                reject(err);

            }
        });
    }

    static insertTravel(travel) {
        return axios.post('http://localhost:3000/api/travel/create', {
            travel
        });
    }

    static deleteTravel(id) {
        return axios.delete('http://localhost:3000/api/travel/delete', {
            id
        });
    }
}
    export default TravelService;
