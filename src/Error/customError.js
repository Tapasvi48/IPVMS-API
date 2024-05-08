export class DatabaseError extends Error {
  constructor(message) {
    super(message || "Internal Server error happened");
    this.name = "Database Error";
    this.statusCode = 500;
    this.success = false;
  }
}
export class ValidationError extends Error {
  constructor(message) {
    super(message || "Invalid Credentials here");
    this.name = "Validation Error";
    this.error = message;
    this.statusCode = 400;
    this.success = false;
  }
}
export class NotFoundError extends Error {
  constructor(message) {
    super(message || "Data was not found");
    this.name = "Not Found Error";
    this.statusCode = 404;
    this.error = message;
    this.success = false;
  }
}

export class AuthorizationError extends Error {
  constructor(message) {
    super(message || "User is not Authorized to access the resource");
    this.name = "Authorization Error";
    this.statusCode = 401;
    this.error = message;
    this.success = false;
  }
}

export class ConflictError extends Error {
  constructor(message) {
    super(message || "Resource Already Exists");
    this.name = "Conflict Error";
    this.statusCode = 409;
    this.error = message;
    this.success = false;
  }
}
export class InvalidTokenError extends Error {
  constructor(message) {
    super(message || "");
    this.name = "Invalid";
    this.statusCode = 498;
    this.error = message;
    this.success = false;
  }
}
export class ForbiddenAccessError extends Error {
  constructor(message) {
    super(message);
    this.name = "Forbidden Access";
    this.statusCode = 403;
    this.error = message;
    this.success = false;
  }
}
export class BadGatewayError extends Error {
  constructor(message) {
    super(message);
    this.name = "Bad Gateway";
    this.statusCode = 403;
    this.error = message;
    this.success = false;
  }
}
export class AccountSetupError extends Error {
  constructor(message) {
    super(message);
    this.name = "User account is not setup";
    this.statusCode = 418;
    this.error = message;
    this.success = false;
  }
}
