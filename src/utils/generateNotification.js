import { Entity_Group } from "../constants/notificationsConstants.js";
import { entityTypeActions } from "./notification.config.js";

export const generateNotificationMessage = (notificationData) => {
  const { entity_type, user_name, entity_name } = notificationData;

  const actions = entityTypeActions(user_name, entity_name);
  const messageTemplate = actions[entity_type];

  if (messageTemplate) {
    let message = messageTemplate.toString();
    console.log(message, "message is");
    return message;
  } else {
    console.error("Invalid entity_type provided");
    return null;
  }
};
