import postModel from "../../db/models/post.model.js";
import userModel from "../../db/models/user.model.js";

export const createPost = async (req, res) => {
  const { content, title, author, userId } = req.body;
  const user = await userModel.findOne({
    where: { id: userId, loginStatus: true },
  });
  if (!user) {
    return res.json({ message: "user isn't found or not logged in" });
  } else {
    const result = await postModel.create({ title, content, author,userId });
    res.json({ message: "post is added successfuly", result });
  }
};
export const readPosts = async (req, res) => {
  const result = await postModel.findAll();
  res.json({ Message: "success", result });
};
export const getSpecificPost = async (req, res) => {
  const result = await postModel.findAll({
    include: {
      model: userModel,
      attributes: { exclude: ["password", "loginStatus", "id"] },
    },
  });
  res.json({ Message: "post fetched successfully", result });
};

export const updatePost = async (req, res) => {
  const { id } = req.query;
  const { title, content, userId } = req.body;
  const result = await postModel.update(
    { title, content, userId },
    {
      where: { id, userId },
    }
  );
  return result > 0
    ? res.json({ message: "post updated successfully" , result})
    : res.json({ Message: "post not found or not authorized", result });
};

export const deletePost = async (req, res) => {
  const { id } = req.query;
  const { userId } = req.body;
  const result = await postModel.destroy({
    where: { id, userId },
  });
  return result > 0
    ? res.json({ message: "post deleted successfully" , result})
    : res.json({ Message: "post not found or not authorized", result });
};
