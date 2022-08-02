import { Router } from "express";
import {getUserById} from "../controllers/getUserById.js";
import {login} from "../controllers/login.controllers.js";
import {
  getPost,
  createPost,
  updatePost,
  removePost,
  getPosts,
} from "../controllers/posts.controllers.js";
import {register} from "../controllers/register.controllers.js";

import {verifyToken} from "../middlewares/verifyToken.js"

const router = Router();

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.post("/posts", createPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", removePost);
router.get("/post/user", verifyToken, getUserById);
router.post("/post/register", register);
router.post("/post/login", login);

export default router;
