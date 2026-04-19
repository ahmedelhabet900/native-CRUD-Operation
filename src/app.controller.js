import userRouter from "./module/users/users.routes";

export const bootstrap = async (express, app) => {
  app.use(express.json());

  // Import and use your routes here
  app.use("/users", userRouter);

  app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });
};
