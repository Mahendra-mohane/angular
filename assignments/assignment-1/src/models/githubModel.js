const mongoose = require('mongoose');

const githubSchema = new mongoose.Schema({
  id: Number,
  name: String,
  html_url: String,
  description: String,
  created_at: Date,
  open_issues: Number,
  watchers: Number,
  owner: {
    id: Number,
    avatar_url: String,
    html_url: String,
    type: String,
    site_admin: Boolean
  }
});

const Github = mongoose.model('Github', githubSchema);

module.exports = Github;
