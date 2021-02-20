module.exports = {
  apps: [
    {
      name: "etv",
      script: "dist/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        MONGO_HOST: "cluster0.xe1tm.mongodb.net",
        MONGO_USER: "dperez",
        MONGO_PASSWORD: "dapeor",
        MONGO_DATABASE: "ETV",
        SECRET_KEY: "TOKEN",
        EXPIRE_KEY: "5m",
        PORT: 3000,
      },
    },
  ],
};
