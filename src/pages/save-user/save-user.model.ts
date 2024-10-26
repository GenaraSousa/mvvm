import { useForm } from "react-hook-form";
import { SchemaSaveUserType } from "./save-user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaSaveUser } from "./save-user.schema";
import { useState } from "react";
import { toast } from "sonner";
import { SAVE_USER_MESSAGES } from "./save-user.messages";
import { ICreateUserService } from "@/services/user/create-user.service";

type SaveUserModelProps = {
  createUser: ICreateUserService;
};

export function useSaveUserModel({ createUser }: SaveUserModelProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<SchemaSaveUserType>({
    resolver: zodResolver(SchemaSaveUser),
  });

  async function onSubmit(data: SchemaSaveUserType) {
    try {
      setLoading(true);
      await createUser.exec(data);
      toast.success(SAVE_USER_MESSAGES.SUCCESS);
    } catch (error) {
      toast.error(SAVE_USER_MESSAGES.ERROR);
    } finally {
      setLoading(false);
    }
  }

  return {
    onSubmit,
    form,
    loading,
  };
}
