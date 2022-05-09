import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req,res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

export const createPost = async (req,res) => {

  const body = req.body;
  const newPost = new PostMessage(body)
  try {
    await newPost.save();
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({error: error.message})

  }
}

export const updatePost = async (req,res) => {

  const {id : _id} = req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post for this ID") 

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new:true})
  res.json(updatedPost)
  // try {
  //   await newPost.save();
  //   res.status(201).json(newPost)
  // } catch (error) {
  //   res.status(409).json({error: error.message})

  // }
}