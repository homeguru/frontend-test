export const login = async () => {
  return await fetch(`/logar`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: {},
  });
};
