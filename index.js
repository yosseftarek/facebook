import express from "express";
import sequelize from "./db/dbConn.js";
import postRouter from "./modules/posts/posts.routes.js";
import userRouter from "./modules/users/users.routes.js";
import commentRouter from "./modules/comments/comments.routes.js";

const app = express();
app.use(express.json())
sequelize.sync();
app.use('/posts',postRouter)
app.use('/users',userRouter)
app.use('/comments',commentRouter)


app.listen(8080, () => console.log(`server is running`))


