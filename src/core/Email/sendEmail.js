import nodemailer from "nodemailer";
import { template } from "./Template/template.js";
import path from "path";
import dotenv from "dotenv";
import { letterTemplate } from "./Template/letterTemplate.js";
import { BadGatewayError, DatabaseError } from "../../Error/customError.js";
import { invitationTemplate } from "./Template/invitationTemplate.js";
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
      `http://localhost:5555/resetpassword?token=${token}`,
      new Date().toLocaleDateString()
    );
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset",
      html: htmlTemp,
    });
  } catch (error) {
    throw new BadGatewayError("Something Wrong with email services");
  }
};

export const sendLetterEmail = async (pdfFile, email) => {
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
      subject: "Letter Sent",
      html: letterTemplate,
      attachments: [
        {
          filename: "letter.pdf",
          content: new Buffer(pdfFile, "utf-8"),
        },
      ],
    });
  } catch (error) {
    console.log(error, "email not sent");
  }
};
export const sendInvitationEmail = async (email, password) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const action_url = "";
    const htmlTemp = invitationTemplate(email, password, action_url);
    const mail = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "tarora@ex2india.com",
      subject: "Invitation to platform",
      html: htmlTemp,
    });

    return true;
  } catch (error) {
    throw new DatabaseError("email not sent");
  }
};
