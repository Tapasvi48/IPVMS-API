import express from "express";
import { getNotification } from "../services/notification.services.js";
import { generateNotificationMessage } from "../utils/generateNotification.js";
import { DatabaseError, ValidationError } from "../Error/customError.js";
import { pool } from "../core/database/db.js";

const notificationRouter = express.Router();

//get 7 days unread noitification for user
//status->notification_status table

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
    // console.log(messages);
    return res.status(200).json({ success: true, notification: messages });
  } catch (error) {
    next(error);
  }
});

notificationRouter.post("/markAllAsRead", async (req, res, next) => {
  const userId = req.query.userId;
  try {
    if (!userId) {
      throw new ValidationError("user id is null");
    }
    const query =
      "UPDATE notification_status SET read_status=true where user_id=$1";
    try {
      const result = await pool.query(query, [userId]);
    } catch (error) {
      console.log(error);
      throw new DatabaseError("error in querying throw db");
    }

    return res.status(200).json({ message: "marked notification as read" });
  } catch (error) {
    next(error);
  }
});

export default notificationRouter;
