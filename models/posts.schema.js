import { mongoose } from "../index.js";
var { Schema } = mongoose;

const postSchema = Schema({
  // userCreator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

export const Post = mongoose.model("Post", postSchema);
