const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3");
const router = require("express").Router();

router.post("/", singleMulterUpload("bubblebop"), async (req, res, next) => {
  try {
    const urlOnS3 = await singlePublicFileUpload(req.file);
    console.log(urlOnS3);
    res.json({ message: "Hi :)" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
