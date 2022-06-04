
const aws = require('aws-sdk');
const { promisify } = require('util');
const crypto = require('crypto');
const randomBytes = promisify(crypto.randomBytes)
const region = "us-east-1"
const bucketName = "amazona-nextjs"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

const generateUploadURL = async () => {
    const rawBytes = await randomBytes(16)
    const imageName = "products/" + rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

exports.generateUploadURL = generateUploadURL;

const deleteObjectFromURL = async (imageURL) => {
    console.log(imageURL)
    let PREFIX = "https://amazona-nextjs.s3.amazonaws.com/";
    await s3.deleteObject({
        Bucket: bucketName,
        Key: imageURL.slice(PREFIX.length)
    }, function (err, data) {
        if (err) {
            return false
            // res.status(500).send(error);
        }
        // res.status(200).send("File has been deleted successfully");

    }).promise()
    return true
}

exports.deleteObjectFromURL = deleteObjectFromURL;