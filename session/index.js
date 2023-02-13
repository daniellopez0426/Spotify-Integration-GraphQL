const tokenToUsersMap = {
  "abc": { name: "Jorney" },
  "cba": { name: "Daniel" },
};

export const getSessionFromToken = (token) => tokenToUsersMap[token];
