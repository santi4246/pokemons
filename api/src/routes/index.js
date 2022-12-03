const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonMiddleware = require('./pokemon.js');
const typeMiddleware = require('./type.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonMiddleware);
router.use('/types', typeMiddleware);

module.exports = router;