async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    console.log(countries)
    countries.forEach(createCountryCard)
    // const myFrom = coutries.filter(coutrie => coutrie.name.common == 'Bolivia')
    // console.log(myFrom)

}
function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    const idioma = document.createElement('p')
    idioma.innerText = `Capital: ${country.capital ?? "não possui"}`

    card.append(name, flag, idioma)
    document.querySelector('#countries').append(card)
}


getCountries()
