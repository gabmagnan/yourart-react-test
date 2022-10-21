import api from "./api";

export default class ArtworkService {
    static getExamplesData(index) {
        return api({
            method: 'GET',
            origin: 'http://localhost:7000',
            url: `https://storage.googleapis.com/ya-misc/interviews/front/examples/0.json`,
        })
    }
}
