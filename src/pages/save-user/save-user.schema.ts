import { z } from "zod";

export const SchemaSaveUser = z.object({
  name: z.string().min(2, "Deve ter no mínimo 2 caracteres").trim(),
  email: z.string().email("Deve ser um e-mail válido"),
});
