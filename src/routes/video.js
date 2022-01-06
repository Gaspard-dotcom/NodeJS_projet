import {getVideosSchema,
  getVideoSchema,
  addVideoSchema,
  updateVideoSchema,
  deleteVideoSchema} from '../controllers/schemas/videos.js';

import {getVideosHandler,
  getVideoHandler,
  addVideoHandler,
  updateVideoHandler,
  deleteVideoHandler} from '../controllers/handlers/videos.js';

const getVideosOpts = {
  schema: getVideosSchema,
  handler: getVideosHandler,
};

const getVideoOpts = {
  schema: getVideoSchema,
  handler: getVideoHandler,
};

const addVideoOpts = {
  schema: addVideoSchema,
  handler: addVideoHandler,
};

const updateVideoOpts = {
  schema: updateVideoSchema,
  handler: updateVideoHandler,
};

const deleteVideoOpts = {
  schema: deleteVideoSchema,
  handler: deleteVideoHandler,
};

/**
 * @type { import('fastify').FastifyPluginCallback }
 */
 export async function routes(app) {
  app.get('/videos', getVideosOpts);
  

  // get a Videos
  app.get('/videos/:id', getVideoOpts);

  // create a new Videos
  app.post('/videos/new', addVideoOpts);

  // update a Videos
  app.put('/videos/edit/:id', updateVideoOpts);

  // delete a Videos
  app.delete('/videos/:id', deleteVideoOpts);

 }


