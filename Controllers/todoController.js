const todoModel = require('../Models/todo');

exports.ajouterTodo = async (req, res) => {//post : client =>data base
  try {
    const todoObj = {
      content: req.body.content,
      date: req.body.date
    };

    const todo = new todoModel(todoObj);
    const createdTodo = await todo.save();

    res.status(200).json({ createdTodo });
  } catch (error) {
    console.error('error:', error);
    res.status(400).json({ error: error.message });
  }
}

exports.supprimerTodo =  async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await todoModel.findByIdAndDelete(id);

    if (todo) {
      return res.status(200).json({ "message": "Tâche supprimée avec succès!" });
    } else {
      return res.status(404).json({ "message": "Tâche non trouvée." });
    }
  } catch (error) {
    return res.status(500).json({ "error": error.message });
  }
}

exports.modifierTodo = async (req, res) => {

  try {
    const id = req.params.id;
    const modifObj={
      content: req.body.content,
      date: req.body.date
    };
    const modifiedtodo = await todoModel.findByIdAndUpdate(id,modifObj);

    if (modifiedtodo) {
      return res.status(200).json({ "message": "Tâche modifiée avec succès!" });
    } else {
      return res.status(404).json({ "message": "Tâche non trouvée." });
    }
  } catch (error) {
    return res.status(500).json({ "error": error.message });
  }
  //res.send('LE CORPS DE FN TODO modifier')
}

exports.listerTodo = async (req, res) => {
  try {
    const listTodo = await todoModel.find({}).exec();
    res.status(200).json({ listTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.TodoById = async (req, res) => {
  

  try {
    const id = req.params.id;
    const todoItem = await todoModel.findById(id).exec();

    if (!todoItem) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }

    return res.status(200).json({ todoItem });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};