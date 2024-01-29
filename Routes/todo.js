const express = require('express')

const router =express.Router();

const todoController=require('../Controllers/todoController');


router.get('/lister', todoController.listerTodo );

router.post('/ajouter', todoController.ajouterTodo);

router.get('/:id/supprimer', todoController.supprimerTodo );

router.post('/:id/modifier', todoController.modifierTodo );

router.get('/:id/get', todoController.TodoById );


module.exports = router;

