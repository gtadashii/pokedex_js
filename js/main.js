class Pokemon{
    constructor(name) {
        this.name = name
    }
    async getEntry() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
        return await res.json()
    }
    async getImage() {
        const res = await this.getEntry()
        const id = await res.id
        return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    }
}

function search_pokemon() {

    let search_name = document.getElementById('search').value;
    let name = search_name.toLowerCase();
    let pokemon = new Pokemon(name)

    pokemon.getEntry().then(response => {
        document.getElementById('poke_id').textContent=response.id;
        document.getElementById('poke_name').textContent=response.name.toUpperCase();
    })

    pokemon.getImage().then(response => {
        document.getElementById('pokemon_img').src = response
    })
}