const typeString = { type: 'string' }; // since i will be using this type a lot

const auteur = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: typeString,
    surname: typeString,
  },
};

const getAuthorsSchema = {
  response: {
    200: {
      type: 'array',
      items: auteur,
    },
  },
};

const getAuthorSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: auteur,
  },
};

const addAuthorSchema = {
  body: {
    type: 'object',
    required: ['name', 'surname'],
    properties: {
      name: typeString,
      surname: typeString,
    },
  },
  response: {
    200: typeString, // sending a simple message as string
  },
};

const updateAuthorSchema = {
  body: {
    type: 'object',
    required: ['name', 'surname'],
    properties: {
      name: typeString,
      surname: typeString,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, // a simple message will be sent
  },
};

const deleteAuthorSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

export  {
    getAuthorsSchema,
  getAuthorSchema,
  addAuthorSchema,
  updateAuthorSchema,
  deleteAuthorSchema,
};