import nodemailer from "nodemailer";
import { template } from "./Template/template.js";
import path from "path";
import dotenv from "dotenv";
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, "./.env") });
export const sendEmail = async (email, token) => {
  if (!email || !token) {
    return;
  }
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const htmlTemp = template(
      `http://127.0.0.1:5501/frontend/index.html?token=${token}#resetpassword`,
      new Date().toLocaleDateString()
    );
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset",
      html: htmlTemp,
    });
  } catch (error) {
    console.log(error, "email not sent");
  }
};

export const sendLetterEmail = async (pdfFile) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const htmlTemp = letterTemplate();
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset",
      html: letterTemplate,
      attachments: [
        {
          filename: "letter.pdf",
          content: new ArrayBuffer(pdfFile, "utf-8"),
        },
      ],
    });
  } catch (error) {
    console.log(error, "email not sent");
  }
};
