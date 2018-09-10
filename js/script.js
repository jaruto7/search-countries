var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById( 'countries' );

document.getElementById( 'search').addEventListener( 'click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById( 'country-name' ).value;
    var searchByName = 'https://restcountries.eu/rest/v2/name/{name}'; 
    if ( !countryName.length ) countryName = 'Poland';
    fetch(searchByName + url + countryName)
        .then( function( resp ) {
            return resp.json();
        })
        .then( showCountriestList );
}

function showCountriestList( resp ) {
    countriesList.innerHTML = '';
}