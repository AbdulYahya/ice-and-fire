import { IceAndFire } from '../assets/js/ice-and-fire.js';

let iceAndFire = new IceAndFire();


$(function() {
  let search = document.getElementById('searchDropdown');

  search.addEventListener('change', function() {
    let searchTerm = $('#searchBar').val();
    $('#searchBar').val('');
    // Grab dropdown select menu 'options' value
    let selectedSearch = search.options[search.selectedIndex].value;
    // Reset dropdown select menu to first default option
    search.options[0].selected = true;

    console.log(`Search Term: ${searchTerm}`);
    console.log(`Searching: ${selectedSearch}`);

    switch(selectedSearch) {
      case 'Books':
        iceAndFire.getBookById(1);
        // Must wait for our api call to retrieve the requested info
        // otherwise we try to access data that is not there yet...
        setTimeout(() => {
          console.log(iceAndFire.cache.books[1].data.name);
        }, 650);
        break;
      case 'Characters':
        iceAndFire.getCharacterById(583);
        setTimeout(() => {
          let character = iceAndFire.cache.characters[583];
          // console.log(iceAndFire.cache.characters[583].data.name);
          console.log(character.data.name);
          $('#characterInfo').removeClass('hidden');

          $('#characterInfo').append('<div class="card-body">' +
                                        `<h5 class="class-title">${character.data.name}</h5>` +
                                        '<ul class="list-group list-group-flush">' +
                                          `<li class="list-group-item">${character.data.gender}</li>` +
                                          `<li class="list-group-item">${character.data.culture}</li>` +
                                          `<li class="list-group-item">${character.data.born}</li>` +
                                          `<li class="list-group-item">${character.data.titles}</li>` +
                                        '</ul>' +
                                      '</div>');
        }, 750);
        break;
      case 'Houses':
        iceAndFire.getHouseById(2);
        setTimeout(() => {
          console.log(iceAndFire.cache.houses[2].data.name);
        }, 650);
        break;
      default:
        console.log('Nothing to see here!');
    }


    // console.log(books.length);
    // for (let i = 0; i < books.length; i++) {
      // console.log(books[i].name);
    //   $('#books').append('<div class="card">' +
    //                         '<img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22214%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20214%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1619b88eba5%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1619b88eba5%22%3E%3Crect%20width%3D%22214%22%20height%3D%22160%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2278.8828125%22%20y%3D%2284.8%22%3E214x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="test" />' +
    //                         '<div class="card-body">' +
    //                           `<h5 class="card-title"> ${books[i].url.match(/\d+/)}. ${books[i].name}</h5>` +
    //                           `<p class="card-text">${books[i].authors}</p>` +
    //                           `<p class="card-text"> Number of Pages <span class="badge badge-primary float-right ">${books[i].numberOfPages}</span></p>` +
    //                         '</div>' +
    //                       '</div>');
    // }
  });
});
