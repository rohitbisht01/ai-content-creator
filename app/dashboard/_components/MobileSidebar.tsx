import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoComponent, NavigationLinks } from "./Sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function MobileSidebar({
  isOpen,
  setIsOpen,
}: MobileSidebarProps) {
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side={"left"} className="flex flex-col">
          <SheetHeader className="flex-1">
            <LogoComponent />
            <NavigationLinks />
          </SheetHeader>

          <div className="flex gap-4 items-center mx-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <h2 className="text-sm w-full text-center text-white bg-orange-500 rounded-md p-2 cursor-pointer hover:bg-orange-600 font-medium shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              ✨ Join Membership
            </h2>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
