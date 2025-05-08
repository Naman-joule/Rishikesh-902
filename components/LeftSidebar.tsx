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
  SidebarTrigger,
  SidebarProvider
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

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

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={window.innerWidth >= 768}>
      <div className="flex min-h-svh w-full">
        {children}
      </div>
    </SidebarProvider>
  );
}

const LeftSidebar = ({ activeContent, setActiveContent }: LeftSidebarProps) => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <Sidebar 
        variant={isMobile ? "floating" : "sidebar"}
        collapsible={isMobile ? "offcanvas" : "icon"}
        className="border-r border-orange-200 bg-gradient-to-b from-amber-50 to-orange-50 z-50"
      >
        <SidebarHeader className="flex h-16 items-center border-b border-orange-200 px-4 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="flex items-center gap-2 font-bold text-lg text-yellow-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
              <span className="text-orange-700 text-xl">ॐ</span>
            </div>
            <span className="transition-opacity duration-200 whitespace-nowrap">पवित्र ग्रंथ</span>
            {isMobile && (
              <div className="ml-auto">
                <SidebarTrigger className="text-yellow-100 hover:text-white" />
              </div>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent className="overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent">
          {/* Decorative element - top */}
          <div className="h-4 w-full bg-[url('/border-top.png')] bg-repeat-x"></div>

          <SidebarGroup>
            <SidebarGroupLabel className="text-orange-800 font-semibold">
              <div className="flex items-center gap-2">
                <Lotus className="h-4 w-4 text-orange-600" />
                <span className="transition-opacity duration-200">पवित्र ग्रंथ</span>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveContent("gita")}
                    isActive={activeContent === "gita"}
                    tooltip="गीता माहात्म्य" // For collapsed state
                    className={`${
                      activeContent === "gita"
                        ? "bg-orange-100 border-l-4 border-orange-600 text-orange-900"
                        : "hover:bg-orange-50 text-orange-800"
                    } transition-colors py-3 md:py-2`}
                  >
                    <BookOpen className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="transition-opacity duration-200">गीता माहात्म्य</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveContent("vishnu")}
                    isActive={activeContent === "vishnu"}
                    tooltip="भगवद्गीता: अध्याय 12" // For collapsed state
                    className={`${
                      activeContent === "vishnu"
                        ? "bg-orange-100 border-l-4 border-orange-600 text-orange-900"
                        : "hover:bg-orange-50 text-orange-800"
                    } transition-colors py-3 md:py-2`}
                  >
                    <BookText className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="transition-opacity duration-200">भगवद्गीता: अध्याय 12</span>
                  </SidebarMenuButton>
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
                <span className="transition-opacity duration-200">Videos</span>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className={`hover:bg-orange-50 text-orange-800 py-3 md:py-2 ${
                      activeContent === "dasavatara" 
                        ? "bg-orange-100 border-l-4 border-orange-600 text-orange-900" 
                        : ""
                    }`}
                    tooltip="श्री दशावतार स्तोत्र" // For collapsed state
                    onClick={() => setActiveContent("dasavatara")}
                    isActive={activeContent === "dasavatara"}
                  >
                    <Video className="h-5 w-5 md:h-4 md:w-4" />
                    <span className="transition-opacity duration-200">श्री दशावतार स्तोत्र</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
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
      
      {/* Mobile menu trigger - visible only on small screens */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-40">
          <SidebarTrigger 
            className="bg-orange-600 text-yellow-100 hover:bg-orange-700 hover:text-white rounded-full shadow-lg h-10 w-10"
          />
        </div>
      )}
    </>
  );
};

export default LeftSidebar;