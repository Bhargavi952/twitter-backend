import express from "express";
const router = express.Router();
import {getPosts , createPost ,updatePost,likePost , deletePost} from '../controllers/post.js'

router.post('/',createPost);
router.get('/', getPosts);
router.patch('/:id' , updatePost);
router.delete('/:id' , deletePost);
router.patch('/:id/likePost', likePost);

export default router;