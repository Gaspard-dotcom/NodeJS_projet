const typeString = { type: 'string' }; 
const typeNumber = { type: 'number' }; 

const video = {
  type: 'object',
  properties: {
    id: typeNumber,
    name: typeString,
    description: typeString,
    author: typeString,
    category: typeString,

  },
};

const getVideosSchema = {
  response: {
    200: {
      type: 'array',
      items: video,
    },
  },
};

const getVideoSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: video,
  },
};

const addVideoSchema = {
  body: {
    type: 'object',
    required: ['name', 'author','category'],
    properties: {
    name: typeString,
    description: typeString,
    author: typeString,
    category: typeString,
    },
  },
  response: {
    200: typeString, // sending a simple message as string
  },
};

const updateVideoSchema = {
  body: {
    type: 'object',
    required: ['name', 'author','category'],
    properties: {
      name: typeString,
      description: typeString,
      author: typeString,
      category: typeString
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, // a simple message will be sent
  },
};

const deleteVideoSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

export  {
    getVideosSchema,
  getVideoSchema,
  addVideoSchema,
  updateVideoSchema,
  deleteVideoSchema,
};