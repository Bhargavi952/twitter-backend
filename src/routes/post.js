import express from "express";
const router = express.Router();
import {getPosts , createPost , deletePost} from '../controllers/post.js'

router.post('/',createPost);
router.get('/', getPosts);
router.delete('/:id' , deletePost);

export default router;