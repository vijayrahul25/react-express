import bookData from './books.json';
const axios = require('axios');

export default class ApiHandler {
    static getBooksMockup() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(bookData);
            }, 500);
        });
    }
    static getBooks = async (pageNumber, pageSize) => {
        try {            
            let bookURL = `http://localhost:5000/api/books?start=${pageNumber}&end=${pageSize}`;
            let res = await axios.get(bookURL);
            let { data } = res.data;
            return data;
        } catch (error) {
            alert(error);
        }

    }
    static getTotalbooks = async () => {
        try {
            let res = await axios.get('http://localhost:5000/api/books/count');
            let { count } = res.data;
            return count;
        } catch (error) {
            alert(error);
        }

    }
    static postRequest = async (method, body) => {
        try {
            let URL = `http://localhost:5000/api/${method}`;
            let res = await axios.post(URL, body);
            return res.data;
        } catch (error) {
            alert(error);
        }

    }
}