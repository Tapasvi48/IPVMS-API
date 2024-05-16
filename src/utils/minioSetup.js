import * as Minio from "minio";

export const minioClient = new Minio.Client({
  endPoint: "minio-endpoint.skilldify.ai",
  port: 443,
  useSSL: true,
  accessKey: "037UPKHTR2OlYlZW",
  secretKey: "caB5V71k1dBmYhhUN8PqlBNkJRJk6UR4",
});
