CREATE TABLE "user" (
  "id" int PRIMARY KEY NOT NULL,
  "role_id" int,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar NOT NULL,
  "created_at" timestamp,
  "updated_by" int,
  "updated_at" timestamp,
  "password" varchar NOT NULL,
  "is_active" boolean,
  "employee_code" smallint,
  "mobile_number" varchar,
  "password_reset" bool
);

CREATE TABLE "role" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "can_create" bool,
  "can_delete" bool,
  "can_update" bool,
  "can_read" bool,
  "created_at" timestamp,
  "created_by" int,
  "updated_by" int,
  "updated_at" timestamp
);

CREATE TABLE "audit_log" (
  "id" int PRIMARY KEY,
  "tablename" text,
  "user_name" int,
  "action" text,
  "created_at" timestamp,
  "row_id_PK" int,
  "column_changed" text[],
  "old_value" text,
  "new_value" text
);

CREATE TABLE "policy" (
  "id" int PRIMARY KEY,
  "title" varchar,
  "category_id" int,
  "created_at" timestamp,
  "created_by" int,
  "updated_by" int,
  "updated_at" timestamp,
  "htmldata" binary,
  "htmljson" json,
  "is_active" bool,
  "approved_by" int
);

CREATE TABLE "policy_version" (
  "id" int PRIMARY KEY,
  "doc_id" int,
  "delta" json,
  "created_at" timestamp,
  "created_by" int
);

CREATE TABLE "template_version" (
  "id" int PRIMARY KEY,
  "doc_id" int,
  "delta" json,
  "created_at" timestamp,
  "created_by" int
);

CREATE TABLE "template" (
  "id" int PRIMARY KEY,
  "title" varchar,
  "created_at" timestamp,
  "created_by" int,
  "updated_by" int,
  "updated_at" timestamp,
  "htmldata" binary,
  "htmljson" json,
  "mode" template_mode DEFAULT ''DRAFT'::template_mode'
);

CREATE TABLE "category" (
  "id" int PRIMARY KEY,
  "category" varchar NOT NULL,
  "created_at" timestamp,
  "is_active" bool,
  "svg" text,
  "color" varchar[10]
);

CREATE TABLE "letter" (
  "id" int PRIMARY KEY,
  "template_id" int,
  "filepath" varchar,
  "created_at" timestamp,
  "created_by" int,
  "userid" int,
  "status" status DEFAULT ''DRAFT'::status',
  "html_data" binary,
  "recipient_email" varchar,
  "recipient_name" varchar,
  "swift_id" int
);

CREATE TABLE "approval_request" (
  "id" int PRIMARY KEY,
  "request_to" int,
  "request_by" int,
  "doc_id" int,
  "reason" varchar,
  "status" approval_status DEFAULT ''VIEW'::approval_status',
  "created_at" timestamp
);

CREATE TABLE "notification_object" (
  "id" int PRIMARY KEY,
  "notification_type" int,
  "created_at" timestamp,
  "status" smallint,
  "notification_group" varchar
);

CREATE TABLE "notification_actor_info" (
  "id" int PRIMARY KEY,
  "notification_object_id" int,
  "actor_id" int
);

CREATE TABLE "notification_status" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "notification_id" int,
  "read_status" bool
);

CREATE TABLE "notification" (
  "id" int PRIMARY KEY,
  "notification_object_id" int,
  "notifier_id" int,
  "status" smallint,
  "broadcast" bool,
  "broadcast_id" smallint
);

ALTER TABLE "user" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("id");

ALTER TABLE "policy" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "policy" ADD FOREIGN KEY ("created_by") REFERENCES "user" ("id");

ALTER TABLE "policy" ADD FOREIGN KEY ("updated_by") REFERENCES "user" ("id");

ALTER TABLE "policy_version" ADD FOREIGN KEY ("doc_id") REFERENCES "policy" ("id");

ALTER TABLE "template_version" ADD FOREIGN KEY ("doc_id") REFERENCES "template" ("id");

ALTER TABLE "template" ADD FOREIGN KEY ("created_by") REFERENCES "user" ("id");

ALTER TABLE "template" ADD FOREIGN KEY ("updated_by") REFERENCES "user" ("id");

ALTER TABLE "letter" ADD FOREIGN KEY ("template_id") REFERENCES "template" ("id");

ALTER TABLE "letter" ADD FOREIGN KEY ("created_by") REFERENCES "user" ("id");

ALTER TABLE "letter" ADD FOREIGN KEY ("userid") REFERENCES "user" ("id");

ALTER TABLE "approval_request" ADD FOREIGN KEY ("request_to") REFERENCES "user" ("id");

ALTER TABLE "approval_request" ADD FOREIGN KEY ("request_by") REFERENCES "user" ("id");

ALTER TABLE "approval_request" ADD FOREIGN KEY ("doc_id") REFERENCES "policy" ("id");

ALTER TABLE "notification_actor_info" ADD FOREIGN KEY ("notification_object_id") REFERENCES "notification_object" ("id");

ALTER TABLE "notification_actor_info" ADD FOREIGN KEY ("actor_id") REFERENCES "user" ("id");

ALTER TABLE "notification_status" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "notification_status" ADD FOREIGN KEY ("notification_id") REFERENCES "notification" ("id");

ALTER TABLE "notification" ADD FOREIGN KEY ("notification_object_id") REFERENCES "notification_object" ("id");
