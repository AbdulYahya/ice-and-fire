import * as _ from 'lodash';
import * as superagent from 'superagent';
import apiURL from '../../.env';

const cache = {
  books: {},
  characters: {},
  houses: {}
};

export class IceAndFire {
  constructor() {
    this.bookArray = [];


    console.log(cache);
  }

  request(type, index) {
    return new Promise((resolve, reject) => {
      let request = superagent.get(`https://www.anapioficeandfire.com/api/${type}/${index}`);

      // Accept Header - set a specific api version
      request.set({Accept: 'application/vnd.anapioficeandfire+json; version=1'});

      // If response objects aren't in our 'cache' add the 'If-None-Match ETag Header'
      if (cache[type][index]) {
        request.set({'If-None-Match': cache[type][index].etag});
      }

      request.end((error, response) => {
        // If error
        if (error && (!response || response.status != 304)) {
          console.warn(error);
          return reject(error);
        }

        if (response != 304) {
          // Add response to our cache
          cache[type][index] = {
            etag: this.randETag(),
            data: response.body
          };
        }

        resolve(cache[type][index].data);
      });
    });
  }

  grabBook(index) {
    return this.request('books', index);
  }

  randETag() {
    return Math.random().toString(36).split('').filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).join('');
  }
}
