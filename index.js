require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "hsatya",
  id: 26687659,
  node_id: "MDQ6VXNlcjI2Njg3NjU5",
  avatar_url: "https://avatars.githubusercontent.com/u/26687659?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hsatya",
  html_url: "https://github.com/hsatya",
  followers_url: "https://api.github.com/users/hsatya/followers",
  following_url: "https://api.github.com/users/hsatya/following{/other_user}",
  gists_url: "https://api.github.com/users/hsatya/gists{/gist_id}",
  starred_url: "https://api.github.com/users/hsatya/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/hsatya/subscriptions",
  organizations_url: "https://api.github.com/users/hsatya/orgs",
  repos_url: "https://api.github.com/users/hsatya/repos",
  events_url: "https://api.github.com/users/hsatya/events{/privacy}",
  received_events_url: "https://api.github.com/users/hsatya/received_events",
  type: "User",
  site_admin: false,
  name: "Harshit Satya",
  company: "Systango",
  blog: "",
  location: "Indore, Madhya Pradesh, India",
  email: null,
  hireable: null,
  bio: "I am a Full Stack developer and a teacher.",
  twitter_username: "HarshitSatya",
  public_repos: 52,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2017-03-26T10:49:03Z",
  updated_at: "2024-01-10T06:45:56Z",
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Twitter</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Ants</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => console.log(`Server Listening on port ${port}`));
