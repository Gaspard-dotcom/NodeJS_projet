import  categories from '../../datastreaming/categories.js';

const getCategoriesHandler = (req, reply) => {
  reply.send(categories);
};

const getCategoryHandler = (req, reply) => {
  const { id } = req.params;

  const category = categories.filter((category) => {
    return category.id === id;
  })[0];

  if (!category) {
    return reply.status(404).send(new Error('Category not found'));
  }

  return reply.send(category);
};

const addCategoryHandler = (req, reply) => {
  const { name, numberoffilms } = req.body; 

  const id = categories.length + 1; 
  categories.push({ id, name, numberoffilms });

  reply.send('Category added');
};

const updateCategoryHandler = (req, reply) => {
  const { name, numberoffilms } = req.body;
  const { id } = req.params;

  const category = categories.filter((category) => {
    return category.id === id;
  })[0];

  if (!categories) {
    return reply.status(404).send(new Error("Category doesn't exist"));
  }

  category.name = name;
  category.numberoffilms = numberoffilms;

  return reply.send('Category updated');
};

const deleteCategoryHandler = (req, reply) => {
  const { id } = req.params;

  const categoryIndex = categories.findIndex((category) => {
    return category.id === id;
  });

  if (categoryIndex === -1) {
    return reply.status(404).send(new Error("Category doesn't exist"));
  }

  categories.splice(categoryIndex, 1);

  return reply.send('Category deleted');
};

export {
    getCategoriesHandler,
    getCategoryHandler,
    addCategoryHandler,
    updateCategoryHandler,
    deleteCategoryHandler,
};