import * as Minio from "minio";

export const minioClient = new Minio.Client({
  endPoint: "127.0.0.1",
  port: 9000,
  accessKey: "xIGx00otHjtU3J7YC3dl",
  useSSL: false,
  secretKey: "LW8xz62r1YOkL1ZDJJmdforQTgwvg04iVvrT8lSR",
});
const checkMinioConnection = async () => {
  try {
    await minioClient.bucketExists("ipvms-dev");
    console.log("MinIO connection verified successfully.");
  } catch (error) {
    console.error("Error connecting to MinIO:", error);
  }
};

checkMinioConnection();
