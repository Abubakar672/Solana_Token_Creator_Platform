import { S3Client } from '@aws-sdk/client-s3';
import { MetaplexPlugin } from "../../types";
export declare const awsStorage: (client: S3Client, bucketName: string) => MetaplexPlugin;
