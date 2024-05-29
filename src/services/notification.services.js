import { DatabaseError, NotFoundError } from "../Error/customError.js";
import { pool } from "../core/database/db.js";
import { getPagination } from "../utils/getPagination.js";

export const createNotification = async (
  notificationObjectId,
  notifier_id,
  status
) => {
  const query = ` INSERT INTO notification (notification_object_id, notifier_id, status)
VALUES ($1, $2, $3)
RETURNING *`;
  //notifier id can be 1,2,3 so on
  try {
    const values = await pool.query(query, [
      notificationObjectId,
      notifier_id,
      status,
    ]);
  } catch (error) {
    throw new DatabaseError("error in creating notification");
  }
};
export const createBroadCastNotification = async (
  notificationObjectId,
  group_id,
  status
) => {
  const query = ` INSERT INTO notification (notification_object_id,broadcast_id, status,broadcast,notifier_id)
  VALUES ($1, $2, $3,$4,$5)
  RETURNING *`;
  //notifier id can be 1,2,3 so on
  try {
    const values = await pool.query(query, [
      notificationObjectId,
      group_id,
      status,
      true,
      0,
    ]);
  } catch (error) {
    console.log(error);
    throw new DatabaseError("error in creating notification");
  }
};
export const createNotificationObject = async (
  entity_type,
  entity_id,
  status,
  entity_group
) => {
  //entity_group->letter and poilyc
  //entity_type->notif type
  //enity id->like document id ,letter id that trigger notification
  //status ->1
  const query = `INSERT INTO notification_object (entity_type,entity_id,status,entity_group)
    VALUES ($1, $2, $3,$4)
    RETURNING * `;
  try {
    const values = await pool.query(query, [
      entity_type,
      entity_id,
      status,
      entity_group,
    ]);
    return values.rows[0].id;
    //get notification object id
  } catch (error) {
    console.log(error);
    throw new DatabaseError("error in creating notification");
  }
};
//this is for saving who trigger what notification actor id->created by whom
export const createNotificationChange = async (
  notification_object_id,
  actor_id
) => {
  const query = `INSERT INTO notification_change (notification_object_id,actor_id)
    VALUES ($1, $2)
    RETURNING * `;
  try {
    const values = await pool.query(query, [notification_object_id, actor_id]);
    return values.rows[0].id;
    //get notification object id
  } catch (error) {
    console.log(error);
    throw new DatabaseError("error in creating notification");
  }
};
export const getNotification = async (userId, group_id) => {
  const query = `
  SELECT 
    n.*, 
    CASE 
        WHEN no.entity_group LIKE 'LETTER' THEN l.filepath 
        WHEN no.entity_group LIKE 'POLICY' THEN p.title
        ELSE 'Unknown Entity'
    END AS entity_name,
    no.entity_type, 
    no.entity_id,
    nc.actor_id,
    u.first_name,
    u.last_name
FROM 
    notification n
JOIN 
    notification_object no ON n.notification_object_id = no.id
JOIN
    notification_change nc ON n.notification_object_id = nc.notification_object_id
JOIN
    user_table u ON nc.actor_id = u.id
LEFT JOIN
    letters l ON no.entity_id = l.id AND no.entity_group = 'LETTER'
LEFT JOIN
    document p ON no.entity_id = p.id AND no.entity_group = 'POLICY'
WHERE 
    (n.notifier_id = $1 OR n.broadcast = true)
    OR
    (n.broadcast = true AND n.broadcast_id=$2)
ORDER BY 
    n.id DESC;
  `;
  try {
    const notifications = await pool.query(query, [userId, group_id]);
    console.log("notification are", notifications.rows);
    return notifications.rows;
  } catch (error) {
    console.log(error);
    throw new DatabaseError("some error in getting notification");
  }
};

export const add_notification = async (
  entity_type,
  entity_id,
  entity_group,
  notifier_id,
  actor_id,
  group_id = null
) => {
  try {
    const notificationObjectId = await createNotificationObject(
      entity_type,
      entity_id,
      1,
      entity_group
    );

    await createNotificationChange(notificationObjectId, actor_id);
    if (group_id) {
      // Broadcast notification
      await createBroadCastNotification(notificationObjectId, group_id, 1);
    } else {
      // Direct notification
      await createNotification(notificationObjectId, notifier_id, 1);
    }

    return "Notification generated successfully";
  } catch (error) {
    // Handle errors
    console.error("Error generating notification:", error.message);
    throw error;
  }
};
