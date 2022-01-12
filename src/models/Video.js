import mongoose from "mongoose";
import videoRouter from "../routers/videoRouter";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  creatdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;
