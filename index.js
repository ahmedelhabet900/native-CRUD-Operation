import express from "express";
import bootstrap from "./src/app.controller.js";

const app = express();

const server = async () => {
  try {
    import.meta.url;
    await bootstrap(express, app);
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

server();
