import fetch from "node-fetch";

const base64Encode = (s) => Buffer.from(s).toString("base64");

const fetchToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body:
      encodeURIComponent("grant_type") +
      "=" +
      encodeURIComponent("client_credentials"),
    headers: {
      //   Authorization: `Basic ${base64Encode(
      //     process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
      //   )}`,
      Authorization: `Basic ${base64Encode(
        "dcffc448ded84ec0a8e99d8941629443:422e3fdda5ee4a0a8c0d5c16d960d286"
      )}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
  return (await response.json()).access_token;
};

let token = "";
export const getResponse = async (url, token) => {
  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const _fetch = async (url) => {
  let response = {};

  if (token) {
    response = await getResponse(url, token);
  }
  if (!token || response.status === 4001) {
    token = await fetchToken();
    response = await getResponse(url, token);
  }
  return await response.json();
};
