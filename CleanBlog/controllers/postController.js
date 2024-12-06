const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
  } catch (err) {
    console.error('Post bulunamadı:', err);
    res.status(404).send('Post bulunamadı');
  }
};

exports.updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`);
  } catch (err) {
    console.error('Post güncellenemedi:', err);
    res.status(500).send('Post güncellenemedi');
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error('Post silinemedi:', err);
    res.status(500).send('Post silinemedi');
  }
}; 