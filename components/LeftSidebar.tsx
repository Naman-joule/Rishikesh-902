import {
  MoonIcon as Om,
  NotebookIcon as Lotus,
  BookText,
  BookOpen,
  Flame,
  Info,
  Bell,
  Video,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Custom Om symbol component
const OmSymbol = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79 4-4 4z" />
  </svg>
);

interface LeftSidebarProps {
  activeContent: "gita" | "vishnu" | "dasavatara";
  setActiveContent: (content: "gita" | "vishnu" | "dasavatara") => void;
}

const LeftSidebar = ({ activeContent, setActiveContent }: LeftSidebarProps) => {
  return (
    <Sidebar className="border-r border-orange-200 bg-gradient-to-b from-amber-50 to-orange-50">
      <SidebarHeader className="flex h-16 items-center border-b border-orange-200 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="flex items-center gap-2 font-bold text-lg text-yellow-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
            <span className="text-orange-700 text-xl">ॐ</span>
          </div>
          <span>पवित्र ग्रंथ</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Decorative element - top */}
        <div className="h-4 w-full bg-[url('/border-top.png')] bg-repeat-x"></div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-800 font-semibold">
            <div className="flex items-center gap-2">
              <Lotus className="h-4 w-4 text-orange-600" />
              <span>पवित्र ग्रंथ</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveContent("gita")}
                  isActive={activeContent === "gita"}
                  className={`${
                    activeContent === "gita"
                      ? "bg-orange-100 border-l-4 border-orange-600 text-orange-900"
                      : "hover:bg-orange-50 text-orange-800"
                  } transition-colors`}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>गीता माहात्म्य</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveContent("vishnu")}
                  isActive={activeContent === "vishnu"}
                  className={`${
                    activeContent === "vishnu"
                      ? "bg-orange-100 border-l-4 border-orange-600 text-orange-900"
                      : "hover:bg-orange-50 text-orange-800"
                  } transition-colors`}
                >
                  <BookText className="h-4 w-4" />
                  <span>भगवद्गीता: अध्याय 12</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                {/* <SidebarMenuButton 
                  className="hover:bg-orange-50 text-orange-800"
                >
                  <Flame className="h-4 w-4" />
                  <span>उपनिषद</span>
                </SidebarMenuButton> */}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Decorative mandala divider */}
        <div className="flex justify-center my-2">
          <div className="h-px w-3/4 bg-orange-200"></div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-800 font-semibold">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-orange-600" />
              <span>Vidoes</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={`hover:bg-orange-50 text-orange-800 ${
                    activeContent === "dasavatara" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveContent("dasavatara")}
                >
                  <Video className="h-4 w-4" />
                  <span>श्री दशावतार स्तोत्र</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-orange-50 text-orange-800">
                  <Bell className="h-4 w-4" />
                  <span>सूचनाएँ</span>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Decorative element - bottom */}
        <div className="h-4 w-full bg-[url('/border-bottom.png')] bg-repeat-x mt-auto"></div>

        {/* Footer with Om symbol */}
        <div className="p-4 text-center">
          <div className="text-orange-700 text-sm">॥ हरि ॐ तत्सत् ॥</div>
        </div>
      </SidebarContent>
      <SidebarRail className="border-r border-orange-200 bg-amber-50" />
    </Sidebar>
  );
};

export default LeftSidebar;
