import mongoose from "mongoose";
import videoRouter from "../routers/videoRouter";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLegth: 80 },
  description: { type: String, required: true, minLength: 20 },
  creatdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;
