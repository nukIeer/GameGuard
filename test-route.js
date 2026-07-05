import { createMemoryRouter, matchRoutes } from 'react-router-dom';

const routes = [
  {
    path: "/",
    children: [
      { index: true },
      { path: "game/:slug" },
      { path: "favorites" },
      { path: "shield" },
      { path: "privacy" },
      { path: "terms" },
      { path: "kvkk" },
      { path: "dmca" },
      { path: "about" },
      { path: "*" }
    ]
  }
];

console.log(matchRoutes(routes, "/privacy"));
