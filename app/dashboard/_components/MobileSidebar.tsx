import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoComponent, NavigationLinks } from "./Sidebar";

export default function MobileSidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <LogoComponent />
            <NavigationLinks />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
