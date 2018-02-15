import * as _ from 'lodash';
import * as superagent from 'superagent'; // Parses JSON Response for you
import apiURL from '../../.env';


export class IceAndFire {
  constructor() {
    this.cache = {
      books: {},
      characters: {},
      houses: {}
    };
  }

  request(url) {
    let that = this;
    let apiRequest = new XMLHttpRequest();
    let promise = new Promise((resolve, reject) => {

      apiRequest.onload = function() {
        if (this.status === 200) {
          resolve(apiRequest.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      apiRequest.open('GET', url, false);
      apiRequest.send(null);
    });

    return JSON.parse(apiRequest.responseText);
  }

  getAllBooks() {
    let url = `https://www.anapioficeandfire.com/api/books`;
    return this.request(url);
  }

  getBookById(bookId) {
    bookId = bookId.toString();
    let url = `https://www.anapioficeandfire.com/api/books/${bookId}`;
    return this.request(url);
  }

  getBookByName(bookName) {
    return null;
  }

  getAllCharacters() {
    return null;
  }

  getCharacterById(characterId) {
    return null;
  }

  getCharacterByName(characterName) {
    let url = `https://www.anapioficeandfire.com/api/characters/?name=${characterName}`;
    return this.request(url);
  }

  // request()

  // request(type, index) {
  //   let promise = new Promise((resolve, reject) => {
  //     let request = superagent.get(`https://www.anapioficeandfire.com/api/${type}/${index}`);
  //
  //     // Accept Header - set a specific api version
  //     request.set({Accept: 'application/vnd.anapioficeandfire+json; version=1'});
  //
  //     // If response objects aren't in our 'cache' add the 'If-None-Match ETag Header'
  //     if (this.cache[type][index]) {
  //       request.set({'If-None-Match': this.cache[type][index].etag});
  //     }
  //
  //     request.end((error, response) => {
  //       // If error
  //       if (error && (!response || response.status != 304)) {
  //         // console.warn(error);
  //         return reject(error);
  //       }
  //
  //       if (response != 304) {
  //         // Add response to our cache
  //         this.cache[type][index] = {
  //           etag: this.randETag(),
  //           data: response.body
  //         };
  //       }
  //
  //       resolve(this.cache[type][index].data);
  //     });
  //   });
  //
  //   promise.then(function(response) {
  //     // console.log(response);
  //     return response;
  //   });
  // }
  //
  // grabBook(index) {
  //   return this.request('books', index);
  // }

  // grabCharacter(index) {
  //   return this.request('characters', index);
  // }

  randETag() {
    return Math.random().toString(36).split('').filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).join('').substring(2, 12);
  }
}
