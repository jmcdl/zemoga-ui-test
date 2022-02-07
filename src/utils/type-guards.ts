import { CelebrityDocument, ViewSelection } from "../shared/interfaces";

export const isCelebrityDocument = (obj: unknown): obj is CelebrityDocument =>
  typeof obj !== "undefined" &&
  typeof obj !== null &&
  Object.prototype.hasOwnProperty.call(obj, "name") &&
  Object.prototype.hasOwnProperty.call(obj, "description") &&
  Object.prototype.hasOwnProperty.call(obj, "category") &&
  Object.prototype.hasOwnProperty.call(obj, "imgUrls") &&
  Object.prototype.hasOwnProperty.call(obj, "votes");

export const isViewSelectValue = (value: string): value is ViewSelection =>
  value === "grid" || value === "list";
