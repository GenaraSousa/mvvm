import { CreateUserService } from "@/services/user/create-user.service";
import { useSaveUserModel } from "./save-user.model";
import { SaveUserView } from "./save-user.view";

export function SaveUser() {
  const createUser = new CreateUserService();
  const methods = useSaveUserModel({
    createUser,
  });
  return <SaveUserView {...methods} />;
}
