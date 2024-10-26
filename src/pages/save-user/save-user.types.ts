import { z } from "zod";
import { SchemaSaveUser } from "./save-user.schema";

export type SchemaSaveUserType = z.infer<typeof SchemaSaveUser>;

export type MESSAGE_SAVE_USER_TYPES = "ERROR" | "SUCCESS";

export type SaveUserResultProps = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};
