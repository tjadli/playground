
export const messageEntity = (messageServer) => {
  if (messageServer) {
    return {
      id: messageServer.id,
      value: messageServer.value,
      isPublic: messageServer.isPublic
    };
  }
  return {
    id: '',
    value: '',
    isPublic: false
  };
};

export const messagesEntity = (messagesServer) => {
  if (messagesServer && messagesServer.length) {
    return messagesServer.map(msg => messageEntity(msg))
  }
  return [];
};