import { errorHandler } from "../utils/error.js";
import Comment from "../models/comment.model.js";

export const createComment = async (req, res, next) => {
  const userId = req.user.id; // Get userId from req.user, which is set by verifyToken

  try {
    const { content, postId } = req.body;

    if (userId !== req.body.userId) {
      return next(errorHandler(401, "You are not authorized to create a comment"));
    }

    const newComment = new Comment({
      content,
      postId,
      userId
    });

    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};
