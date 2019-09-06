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
    static getBooks = async (start, end) => {
        try {
            let bookURL = `http://localhost:5000/api/books?start=${start}&end=${end}`;
            let res = await axios.get(bookURL);
            let { data } = res.data;
            return data;
        } catch (error) {
            alert(error); 
        }

    }
    static getTotalbooks = async (start, end) => {
        try {            
            let res = await axios.get('http://localhost:5000/api/books/count');
            let { count } = res.data;
            console.log('count', count)
            return count;
        } catch (error) {
            alert(error); 
        }

    }
}