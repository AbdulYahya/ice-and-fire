import { IceAndFire } from '../assets/js/ice-and-fire.js';

const iceAndFire = new IceAndFire();

$(function() {
  // console.log(apiURL);
  // console.warn(iceAndFire.grabBooks(apiURL));

  // let list = iceAndFire.request('characters', 1);


  console.log(iceAndFire.randETag());
  iceAndFire.grabBook(1).then(book => console.log(book.name));
  // console.log(iceAndFire.grabBooks(apiURL));
  // let iterator = list.entries();
  // let a = c.values();

  // console.log(iceAndFire.bookArray.length);
  // for (let book of list) {
  //   console.log(list);
  //   console.warn(1);
  // }

  // console.log(a.next().value);
  // list.forEach(function(item) {
  //   console.error(item);
  //   $('#characters').append(`<li>${item}</li>`);
  // });
  // let promise = new Promise(function(resolve, reject) {
  // let request = new XMLHttpRequest();
  //   let url = `${apiURL}/books/1`;
  //   // console.log(apiURL);
  //   request.onload = function() {
  //     if (this.status === 200) {
  //       resolve(request.response);
  //     } else {
  //       reject(Error(request.statusText));
  //     }
  //   };
  //   request.open('GET', url, true);
  //   request.send();
  // });
  //
  // promise.then(function(response) {
  //   let body = JSON.parse(response);
  //   let characters = body.characters;
  //   // characters = characters.typeOf;
  //   // console.log(body.characters);
  //   console.log(body.characters.length);
  //   characters.forEach(function(character) {
  //     $('#characters').append(`<li>${character}</li>`);
  //   });
  //
  //   $('#bookName').text(`${body.name}`);
  // });
});
