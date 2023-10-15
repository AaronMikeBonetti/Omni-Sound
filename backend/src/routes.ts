import Router from "express";
import bodyParser from "body-parser";

const router = Router();

router.get("/", (req, res) => {
    res.send("hello world")
})
// router.get("/", (req, res) => {

// });

// router.post("/", bodyParser.json(), (req, res) => {
//   res.json({
//     status: "success",
//     term: req.body
//   });
// });

// router.delete("/:term", (req, res) => {
//   res.json({
//     status: "success",
//     removed: req.params.term,
//     newLength: skiTerms.length
//   });
// });

export default router;
