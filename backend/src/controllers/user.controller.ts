import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import groups from "./../models/chat.model"
import users from "./../models/user.model"
import { getUsersService } from "../services/user.service";

export const getUsersController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const users = await getUsersService(userId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Users retrieved successfully",
      users,
    });
  }
);

export const getAllgropuMembers = asyncHandler(async(req: Request,res:Response) =>{
const name = req.params.name;
if (!name) return;

const response =  await groups.findOne({groupName:name})
if (!response) return;
const getId = response.participants;
const Users = await users.find({_id:getId})
return res.status(200).json({
 message:"group users retrived sucessfully", 
  Users,response})
})

export const getGroupMember = asyncHandler(
  async (req: Request, res: Response) => {
    const { groupName, gname } = req.body;

    const user = await users.findOne({ name: gname });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const result = await groups.updateOne(
      { groupName },
      {
        $addToSet: { 
          participants: user._id,
        },
      }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Group not found" })
    } 
    return res.status(200).json({
      message: "User added to group successfully",
    });
  }
);


export const removeUser = asyncHandler(async(req:Request,res:Response)=>{
const{groupName,id} = req.body;
const response = await groups.updateOne({groupName},{$pull:{participants:id}})
if (response.matchedCount === 0) {
  return res.status(404).json({message:"remove user"})
}
return res.status(200).json("user remove sucessfully")
})