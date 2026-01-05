import { Router } from "express";
import { passportAuthenticateJwt } from "../config/passport.config";
import { getAllgropuMembers, getUsersController,getGroupMember,removeUser} from "../controllers/user.controller";

const userRoutes = Router()
  .use(passportAuthenticateJwt)
  .get("/all", getUsersController);

userRoutes.get("/allGroup/:name",getAllgropuMembers)  
userRoutes.post("/addGroupMember",getGroupMember)
userRoutes.post("/removeUser",removeUser)

export default userRoutes;
