import express from "express";
import { getNotification } from "../services/notification.services.js";
import { generateNotificationMessage } from "../utils/generateNotification.js";

const notificationRouter = express.Router();

notificationRouter.get("/getNotification/:id", async (req, res, next) => {
  const userId = req.params.id;
  const groupId = req.query.role;
  //   console.log(userId, groupId);
  try {
    const notification = await getNotification(userId, groupId);
    let messages = [];
    notification.forEach((item) => {
      const entity_type = item?.entity_type;
      const user_name = item?.first_name;
      const entity_name = item?.entity_name;
      console.log(entity_type, entity_name, user_name);
      messages.push(
        generateNotificationMessage({ entity_type, user_name, entity_name })
      );
    });
    console.log(messages);
    return res.status(200).json({ success: true, notification: messages });
  } catch (error) {
    next(error);
  }
});

export default notificationRouter;
