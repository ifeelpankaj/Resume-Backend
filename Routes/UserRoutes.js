import express from "express";

import { isAuthenticated } from "../Middlewares/auth.js";
import { addCertification, addProject, addSkill, deleteCertification, deleteProject, deleteSkill, getUser, login, logout, myProfile, updateUser } from "../Controllers/UserController.js";
export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/admin/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/skills/add").post(isAuthenticated, addSkill);

userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

userRouter.route("/admin/skills/:id").delete(isAuthenticated, deleteSkill);

userRouter.route("/admin/certificate/add").post(isAuthenticated, addCertification);

userRouter.route("/admin/certificate/:certificationId").delete(isAuthenticated, deleteCertification);




