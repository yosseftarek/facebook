import commentModel from "../../db/models/comment.model.js";
import postModel from "../../db/models/post.model.js";
import userModel from "../../db/models/user.model.js";
export const addComment = async (req, res) => {
  const { content, userId, postId } = req.body;
  const user = await userModel.findOne({
    where: { id: userId, loginStatus: true },
  });
  if (!user) {
    return res.json({ message: "user not fond or not logged in" });
  } else {
    const result = await commentModel.create({ content, userId, postId });
    res.json({ message: "comment added successfully", result });
  }
};

export const readAllComment = async (req, res) => {
  const result = await commentModel.findAll();
  res.json({ Message: "comment fetched successfully", result });
};

export const updateComment = async (req, res) => {
  const { id } = req.query;
  const { content, userId } = req.body;
  const result = await commentModel.update(
    { content },
    {
      where: {
        id,
        userId,
      },
    }
  );
  result > 0
    ? res.json({ message: "comment updated successfully", result })
    : res.json({ message: "invalid comment or not authorized", result });
};

export const deleteComment = async (req, res) => {
  const { id } = req.query;
  const { userId } = req.body;
  const result = await commentModel.destroy({
    where: {
      id,
      userId,
    },
  });
  result > 0
    ? res.json({ message: "comment deleted successfully", result })
    : res.json({ message: "invalid comment or not authorized", result });
};
export const getUserWithPostsAndComments = async (req, res) => {
  const users = await userModel.findAll(
    {
      include: {
        model: postModel,
        attributes: ["title"],
        include: {
          model: commentModel,
          attributes: ["content"],
        },
      },
    })
    res.json({ message: "users and posts and comments", users })
  ;
};
