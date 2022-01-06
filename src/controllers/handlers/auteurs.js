import  auteurs from '../../datastreaming/auteurs.js';

const getAuthorsHandler = (req, reply) => {
  reply.send(auteurs);
};

const getAuthorHandler = (req, reply) => {
  const { id } = req.params;

  const auteur = auteurs.filter((auteur) => {
    return auteur.id === id;
  })[0];

  if (!auteur) {
    return reply.status(404).send(new Error('Auteur not found'));
  }

  return reply.send(auteur);
};

const addAuthorHandler = (req, reply) => {
  const { name, surname } = req.body; 

  const id = auteurs.length + 1; 
  auteurs.push({ id, name, surname });

  reply.send('Auteur added');
};

const updateAuthorHandler = (req, reply) => {
  const { name, surname } = req.body;
  const { id } = req.params;

  const auteur = auteurs.filter((auteur) => {
    return auteur.id === id;
  })[0];

  if (!auteurs) {
    return reply.status(404).send(new Error("Auteur doesn't exist"));
  }

  auteur.name = name;
  auteur.surname = surname;

  return reply.send('Auteur updated');
};

const deleteAuthorHandler = (req, reply) => {
  const { id } = req.params;

  const auteurIndex = auteurs.findIndex((auteur) => {
    return auteur.id === id;
  });

  if (auteurIndex === -1) {
    return reply.status(404).send(new Error("Auteur doesn't exist"));
  }

  auteurs.splice(auteurIndex, 1);

  return reply.send('Auteur deleted');
};

export {
    getAuthorsHandler,
    getAuthorHandler,
    addAuthorHandler,
    updateAuthorHandler,
    deleteAuthorHandler,
};