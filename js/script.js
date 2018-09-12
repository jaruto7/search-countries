// Zadeklaruj zmienna przewoujaca adres url listy krajow
var url = 'https://restcountries.eu/rest/v1/name/';
// Dopisz do zmiennej wybieranie elementu atrybutu nazwy id
var countriesList = document.getElementById( 'countries' );

// Wykonaj zadanie i podepnij przycisk z nazwa atrybutu id, nastepnie wywolaj funkcje do wyszukiwania krajow
document.getElementById( 'search').addEventListener( 'click', searchCountries);
// Zadeklaruj funkcje
function searchCountries() {
    //Pobierz i przypisz wartosc wpisana przez uzytkownika
    var countryName = document.getElementById( 'country-name' ).value;
    // Przypisz do zmiennej adres endpoint (url) 
    var searchByName = 'https://restcountries.eu/rest/v2/name/{name}?fullText=true'; 
    // Jesli wartosc w zmiennej jest pusta, przypisz wartosc zastepcza w zmiennej
    if ( !countryName.length ) countryName = 'Poland';
    // Przeslij zapytanie nazwy kraju i adresu url poprzez funkcje fetch
    fetch( url + countryName )
        // Nastepnie zwroc za pomoca argumentu funkcji i obiektu json wartosci obiektow z Fetch API
        .then( function( resp ) {
            return resp.json( searchByName );
        })
        // Potem wywolaj funkcje ktora wyswietla wartosci w elementach obiektu
        .then( showCountriestList );
}
// Zadeklaruj funkcje wyswietlajaca informacje o krajach i dopisz jeden argument
function showCountriestList( resp ) {
    // Ustaw wartosci aby byly puste przy zaladowaniu sie strony
    countriesList.innerHTML = '';
    // Iteruj po wszystkich elementach obiektu i zapisz jako argument w funkcji
    resp.forEach( function( item ) {
        // Przypisz do zmiennej i stworz nowy element listy w ktorym beda wyswietlane informacje o kraju
        var liEl = document.createElement( 'li' );
        // Wyswietl informacje z elementow obiektu na stronie
        liEl.innerHTML = 
        'Name: ' + item.name + '.' + '<br>' +
        'Capital: ' + item.capital + '.' + '<br>' +
        'Region: ' + item.region + '.' + '<br>' +
        'Population: ' + item.population + '.' + '<br>' +
        'Timezones: ' + item.timezones + '.' + '<br>' +
        'Currencies: ' + item.currencies + '.';
        // Dodajmy element listy do elementu nieuporzadkowanej listy
        countriesList.appendChild( liEl );
    });
}