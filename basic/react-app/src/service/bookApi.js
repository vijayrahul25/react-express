import bookData from './books.json';
const axios = require('axios');

export default class bookApi {
    static getBooksMockup() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(bookData);
            }, 500);
        });
    }
    static getBooks = async () => {
        try {
            let res = await axios.get('http://localhost:5000/api/books');
            let { data } = res.data;
            return data;
        } catch (error) {
            alert(error); 
        }

    }
}