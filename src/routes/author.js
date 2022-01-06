import {getAuthorsSchema,
  getAuthorSchema,
  addAuthorSchema,
  updateAuthorSchema,
  deleteAuthorSchema} from '../controllers/schemas/auteurs.js';

import {getAuthorsHandler,getAuthorHandler,
  addAuthorHandler,
  updateAuthorHandler,
  deleteAuthorHandler} from '../controllers/handlers/auteurs.js';

const getAuthorsOpts = {
  schema: getAuthorsSchema,
  handler: getAuthorsHandler,
};

const getAuthorOpts = {
  schema: getAuthorSchema,
  handler: getAuthorHandler,
};

const addAuthorOpts = {
  schema: addAuthorSchema,
  handler: addAuthorHandler,
};

const updateAuthorOpts = {
  schema: updateAuthorSchema,
  handler: updateAuthorHandler,
};

const deleteAuthorOpts = {
  schema: deleteAuthorSchema,
  handler: deleteAuthorHandler,
};

/**
 * @type { import('fastify').FastifyPluginCallback }
 */
 export async function routes(app) {
  app.get('/auteurs', getAuthorsOpts);
  

  // get a Author
  app.get('/auteurs/:id', getAuthorOpts);

  // create a new Author
  app.post('/auteurs/new', addAuthorOpts
  , console.log('ca marche')
  );

  // update a Author
  app.put('/auteurs/edit/:id', updateAuthorOpts);

  // delete a Author
  app.delete('/auteurs/:id', deleteAuthorOpts);

 }



