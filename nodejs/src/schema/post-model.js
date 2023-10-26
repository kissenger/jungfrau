const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  postDate: {type: Date, default: Date.now},
  postedBy: {type: String},
  postContent: {type: String},
  postTitle: {type: String},
  instaLink: {type: String}

});

// dataSchema.index({ geometry: "2dsphere" });

const Post = mongoose.model('posts',postSchema);

module.exports = {
  Post
}
