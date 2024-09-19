import { Router } from "express";
import { getQuestions , postQuestions} from "../controllers/controller.js";

import { getResult, postResult } from "../controllers/controller.js";



const router = Router();

// Question route
router.route('/question').get(getQuestions).post(postQuestions);

router.route('/result')
        .get(getResult)
        .post(postResult)

export default router;