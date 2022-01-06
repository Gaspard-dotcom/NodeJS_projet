const typeString = { type: 'string' }; 
const typeNumber = { type: 'number' }; 

const category = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: typeString,
    numberoffilms: typeNumber,
  },
};

const getCategoriesSchema = {
  response: {
    200: {
      type: 'array',
      items: category,
    },
  },
};

const getCategorySchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: category,
  },
};

const addCategorySchema = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: typeString,
      numberoffilms: typeNumber,
    },
  },
  response: {
    200: typeString, // sending a simple message as string
  },
};

const updateCategorySchema = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: typeString,
      numberoffilms: typeNumber,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, // a simple message will be sent
  },
};

const deleteCategorySchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

export  {
    getCategoriesSchema,
  getCategorySchema,
  addCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
};