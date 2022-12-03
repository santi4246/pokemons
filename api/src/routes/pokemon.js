const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js');

router.get('/', async (req, res, next) => {
    try {
        const pokemons = await controllers.listPokemons();
        return res.status(200).send(pokemons);
    } catch (error) {
        next(error);
    }
});

router.get('/:name', async (req, res, next) => {
    const { name } = req.params;
    try {
        const pokemon = await controllers.searchPokemon(name);
        return res.status(200).json(pokemon);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const { name, health, attack, defense, speed, height, weight, image, front } = req.body;
    try {
        const pokemon = await controllers.addPokemon(name, health, attack, defense, speed, height, weight, image, front);
        return res.status(201).json(pokemon);
    } catch (error) {
        next(error);
    }
});

router.post('/:pokemonId/type/:typeId', async (req, res, next) => {
    const { pokemonId, typeId } = req.params;
    try {
        const pokemon = await controllers.setPokemonType(pokemonId, typeId);
        return res.status(200).json(pokemon);
    } catch (error) {
        next(error);
    }
});

module.exports = router;