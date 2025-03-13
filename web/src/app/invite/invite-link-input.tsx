import { Link, Copy } from "lucide-react";
import { IconButton } from "../components/icon-button";
import { InputRoot, InputIcon, InputField } from "../components/input";

export function InviteLinkInput() {
    return(
        <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>

        <InputField
          readOnly
          defaultValue="https://localhost:3000/invite/192837u1298827132"
        />

        <IconButton className="ml-2">
          <Copy className="-mr-2" />
        </IconButton>
      </InputRoot>
    )
}