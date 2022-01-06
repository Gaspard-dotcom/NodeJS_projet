import {getCategoriesSchema,
  getCategorySchema,
  addCategorySchema,
  updateCategorySchema,
  deleteCategorySchema} from '../controllers/schemas/categories.js';

import {getCategoriesHandler,getCategoryHandler,
  addCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler} from '../controllers/handlers/categories.js';

const getCategoriesOpts = {
  schema: getCategoriesSchema,
  handler: getCategoriesHandler,
};

const getCategoryOpts = {
  schema: getCategorySchema,
  handler: getCategoryHandler,
};

const addCategoryOpts = {
  schema: addCategorySchema,
  handler: addCategoryHandler,
};

const updateCategoryOpts = {
  schema: updateCategorySchema,
  handler: updateCategoryHandler,
};

const deleteCategoryOpts = {
  schema: deleteCategorySchema,
  handler: deleteCategoryHandler,
};

/**
 * @type { import('fastify').FastifyPluginCallback }
 */
 export async function routes(app) {
  app.get('/categories', getCategoriesOpts);
  

  // get a Category
  app.get('/categories/:id', getCategoryOpts);

  // create a new Category
  app.post('/categories/new', addCategoryOpts);

  // update a Category
  app.put('/categories/edit/:id', updateCategoryOpts);

  // delete a Category
  app.delete('/categories/:id', deleteCategoryOpts);

 }


