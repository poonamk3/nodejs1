import { UserRequest } from "../Interface/userInterface";
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');



aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_Id,
    region: 'us-east-1'
});

const s3 = new aws.S3();

const storage = multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'harshita-s3-nodejs-multer3',
    // location: "location",
    // metadata: function (req: UserRequest, file: any, cb: any) {
    //     cb(null, { fieldName: "TESTING_METADATA" });
    // },
    // Body: fs.createReadStream(),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req: UserRequest, file: any, cb: any) {
        const fullPath = `Uploads/${req.user.name}/${req.baseUrl.split('/')[2]}/${new Date().getTime()}_${file.originalname}`
        cb(null, fullPath.replaceAll(" ", "")); //use Date.now() for unique file keys
    }
})


export const upload = multer({ storage: storage })
