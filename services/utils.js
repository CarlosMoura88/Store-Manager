// Fonte: mentoria express com msc

const throwNotFoundError = (message) => { 
  const error = new Error(message);
  error.name = 'NotFoundError';
  throw error;
};

module.exports = throwNotFoundError;