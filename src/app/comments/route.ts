import { comment } from "./data";

export async function Get() {
  return Response.json(comment);
}
