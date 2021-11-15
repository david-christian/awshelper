const AWS = require('aws-sdk');
const accessKeyId = process.env.ACCESSKEYID
const secretAccessKey = process.env.SECRETACCESSKEY
const region = process.env.REGION

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region
});
s3 = new AWS.S3({apiVersion: '2006-03-01'});
module.exports = s3