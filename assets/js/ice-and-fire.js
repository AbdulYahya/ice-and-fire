export class IceAndFire {
  constructor() {
    this.cache = {
       books: [],
       characters: [],
       houses: []
    };
  }

  request(type, index) {
    let promise = new Promise((resolve, reject) => {
      let apiRequest = new XMLHttpRequest();
      let url = `https://www.anapioficeandfire.com/api/${type}/${index}`;

      apiRequest.onload = function() {
        if (this.status === 200) {
          resolve(apiRequest.response);
        } else {
          reject(Error(apiRequest.statusText));
        }
      };

      apiRequest.open('GET', url, true);
      apiRequest.send();
    });

    promise.then((response) => {
      let body = JSON.parse(response);

      this.cache[type][index] = {
        data: body
      };
      // console.warn(this.cache[type][index].data.name);
      // console.warn(this.cache[type][index].data);
    });

    return this.cache[type][index];
  }

  getAllBooks() {
    // let url = `https://www.anapioficeandfire.com/api/books`;
    // return this.request(url);
    return null;
  }

  // *********************************
  //          Search by ID's         *
  // *********************************
  getBookById(index) {
    return this.request('books', index);
  }

  getCharacterById(index) {
    return this.request('characters', index);
  }

  getHouseById(index) {
    return this.request('houses', index);
  }

  // *********************************
  //        Search by Names's        *
  // *********************************
  getBookByName(bookName) {
    return null;
  }

  getAllCharacters() {
    return null;
  }

  getCharacterByName(characterName) {
    // let url = `https://www.anapioficeandfire.com/api/characters/?name=${characterName}`;
    // return this.request(url);
    return null;
  }

  randETag() {
    return Math.random().toString(36).split('').filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).join('').substring(2, 12);
  }
}
