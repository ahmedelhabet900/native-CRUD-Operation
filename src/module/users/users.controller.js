import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "users.json");

const readdata = async (file) => {
  return json.parse(await fs.readFile(file, "utf-8"));
};

const writedata = async (data) => {
  await fs.writeFile(JSON.stringify(data));
};

export const getUsers = async (req, res) => {
  try {
    const users = await readdata();
    res.satatus(200).json(data.users);
  } catch (error) {
    res.status(500).json({ message: "Error reading users data" });
  }
};

// Implement other controller functions (getUser, createUser, updateUser, deleteUser) similarly

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = users.find((u) => u.id === id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error reading users data" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    } else {
      const newUser = { id, name, email };
      users.push(newUser);
      await writedata(users);
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const user = users.find((u) => u.id === id);
    if (user) {
      user.name = name;
      user.email = email;
      await writedata(users);
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
};

//
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    await writedata(users);
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
