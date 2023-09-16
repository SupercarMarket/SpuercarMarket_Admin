import { S3Client } from "@aws-sdk/client-s3";

export const AWS_Configuration = {
    bucketName: process.env.REACT_APP_S3_BUCKET_NAME as string,
    region: process.env.REACT_APP_S3_BUCKET_REGION as string,
    accessKeyId: process.env.REACT_APP_S3_BUCKET_ACCESS as string,
    secretAccessKey: process.env.REACT_APP_S3_BUCKET_SECRET as string,
};

export const AdminS3Client = new S3Client({
    region: AWS_Configuration.region,
    credentials: {
        accessKeyId: AWS_Configuration.accessKeyId,
        secretAccessKey: AWS_Configuration.secretAccessKey,
    },
});
