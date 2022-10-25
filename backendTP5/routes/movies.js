const express = require('express');

const router = express.Router();

let movies = [{
    user: "Harry Potter",
    id: "0"
}];


// 1ère méthode CRUD : GET -> Afficher/Récuperer

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const user = _.find(movies, ["id", id]);

    res.status(200).json({
        message: 'Film trouvé',
        user
    });
});

// 2ème méthode CRUD : PUT
router.put('/', (req, res) => {
    const { user } = req.body;
    const id = _.uniqueId();
    movies.push({ user, id });
    // Return message
    res.json({
        message: `Just added ${id}`,
        user: { user, id }
    });
});

// 3ème méthode CRUD : DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.remove(movies, ["id", id]);

    res.json({
        message: `Just removed ${id}`
    });
});

// 4ème méthode CRUD : UPDATE
router.post('/:id', (req, res) => {

    const { id } = req.params;
    const { movies } = req.body;
    const userToUpdate = _.find(movies, ["id", id]);
    userToUpdate.movies = movies;

    // Return message
    res.json({
        message: `Just updated ${id} with ${movies}`
    });
});

module.exports = router;