import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
import { Button } from "#components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "#components/ui/dropdown-menu";
import useAuth from "../../hooks/useAuth";

export default function ProfileAvatar() {
    const { user } = useAuth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full cursor-pointer"
                    >
                        <Avatar size="lg">
                            <AvatarImage src={user?.photoURL} alt="shadcn" />
                            <AvatarFallback>
                                {user?.displayName.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                }
            />
            <DropdownMenuContent className="w-48 mt-1" align="end">
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-base">
                        Hello, {user?.displayName}
                    </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="text-base font-light">
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-base font-light">
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-base font-light">
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
