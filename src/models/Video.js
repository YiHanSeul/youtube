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
videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});
//middleware 인데 save하기 직전에 hashtag가 배열로 저장되고 formmating을 해줌.
// videoSchema.pre("save", async function () {
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((word) => (word.startsWith("#") ? word : `#${word}`));
// });

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;
