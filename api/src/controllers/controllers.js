const { Op } = require('sequelize');
const axios = require('axios');
const { Pokemon, Type } = require('../db');
let types = [];

module.exports = {
    reset: function () {
        pokemons = [],
        types = []
    },
    addPokemon: async function ( name, health, attack, defense, speed, height, weight, image, front ) {
        const pokemon = Pokemon.create({ name, health, attack, defense, speed, height, weight, image, front });
        return pokemon;
    },
    listPokemons: async function () {
    const api = await axios(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    const URL = await api.data.results.map((e) => e.url);    
    const pokemons = [];
    for (let i = 0; i < URL.length; i++) {
        const infoUrl = await axios(URL[i]);
        let pokemon = {
            id: infoUrl.data.id,
            name: infoUrl.data.forms[0].name,
            health: infoUrl.data.stats.find((e) => e.stat.name === 'hp').base_stat,
            speed: infoUrl.data.stats.find((e) => e.stat.name === 'speed').base_stat,
            attack: infoUrl.data.stats.find((e) => e.stat.name === 'attack').base_stat,
            defense: infoUrl.data.stats.find((e) => e.stat.name === 'defense').base_stat,
            height: infoUrl.data.height,
            weight: infoUrl.data.weight,
            types: infoUrl.data.types.map((e) => e.type.name),
            image: infoUrl.data.sprites.other["official-artwork"].front_default,
            front: infoUrl.data.sprites.other.dream_world.front_default
        }        
        pokemons.push(pokemon);
    }
    let allPokemons = await Pokemon.findAll();    
    allPokemons = allPokemons.concat(pokemons);
    return allPokemons;
    },
    searchPokemon: async function (name) {
        let pokemons = await this.listPokemons();        
        let pokemon = pokemons.find((e) => e.name === name);
        return pokemon;
    },
    addType: async function(name) {
        Type.create({ name });
        types = await Type.findAll();
        const type = types.filter((p) => p.name === name);
        return type;
    },
    listTypes: async function () {
        const api = await axios.get(`https://pokeapi.co/api/v2/type`);
        const url = await api.data.results.map((e) => e.url);
        const types = [];
        for (let i = 0; i < url.length; i++) {
            const info = await axios(url[i]);
            let type = {
                name: info.data.name
            }
            types.push(type);
        }
        let allTypes = await Type.findAll();
        allTypes = allTypes.concat(types);
        return allTypes;
    },
    setPokemonType: async function (pokemonId, typeId) {
        const pokemon = await Pokemon.findByPk(pokemonId);
        await pokemon.addType(typeId);
        return pokemon;
    }
}