import  videos from '../../datastreaming/videos.js';

const getVideosHandler = (req, reply) => {
  reply.send(videos);
};

const getVideoHandler = (req, reply) => {
  const { id } = req.params;

  const video = videos.filter((video) => {
    return video.id === id;
  })[0];

  if (!video) {
    return reply.status(404).send(new Error('video not found'));
  }

  return reply.send(video);
};

const addVideoHandler = (req, reply) => {
  const { name, description, author, category} = req.body; 

  const id = videos.length + 1; 
  videos.push({ id, name,  description, author, category});

  reply.send('video added');
};

const updateVideoHandler = (req, reply) => {
  const { name,  description, author, category } = req.body;
  const { id } = req.params;

  const video = videos.filter((video) => {
    return video.id === id;
  })[0];

  if (!videos) {
    return reply.status(404).send(new Error("video doesn't exist"));
  }

  video.name = name;
  video.description = description;
  video.author = author;
  video.category = category;

  return reply.send('video updated');
};

const deleteVideoHandler = (req, reply) => {
  const { id } = req.params;

  const videoIndex = videos.findIndex((video) => {
    return video.id === id;
  });

  if (videoIndex === -1) {
    return reply.status(404).send(new Error("video doesn't exist"));
  }

  videos.splice(videoIndex, 1);

  return reply.send('video deleted');
};

export {
    getVideosHandler,
    getVideoHandler,
    addVideoHandler,
    updateVideoHandler,
    deleteVideoHandler,
};