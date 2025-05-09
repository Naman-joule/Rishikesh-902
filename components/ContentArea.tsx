"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Paragraph {
  id: number;
  text: string;
}

interface ContentAreaProps {
  title: string;
  currentParas: Paragraph[];
  currentPage: number;
  totalPages: number;
  currentPersonIndex: number;
  names: string[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
  parasPerPage: number;
  indices?: string[];
}

const ContentArea = ({
  title,
  currentParas,
  currentPage,
  totalPages,
  currentPersonIndex,
  names,
  handlePrevPage,
  handleNextPage,
  parasPerPage,
  indices,
}: ContentAreaProps) => {
  const isMobile = useIsMobile();

    // Function to scroll to top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Handle navigation with scroll to top
  const handlePrevWithScroll = () => {
    handlePrevPage();
    scrollToTop();
  };

  const handleNextWithScroll = () => {
    handleNextPage();
    scrollToTop();
  };

  // Image mapping based on title
  const getImageForTitle = (title: string) => {
    const key = title.toLowerCase();
    if (key.includes("vishnu")) {
      return "/vishnu.png";
    } else if (key.includes("shiva")) {
      return "/shiva.png";
    } else if (key.includes("ganesha") || key.includes("ganesh")) {
      return "/ganesha.png";
    } else if (key.includes("lakshmi")) {
      return "/lakshmi.png";
    } else if (key.includes("durga") || key.includes("devi")) {
      return "/durga.png";
    } else if (key.includes("hanuman")) {
      return "/hanuman.png";
    } else if (key.includes("krishna")) {
      return "/krishna.png";
    } else if (key.includes("ram") || key.includes("rama")) {
      return "/rama.png";
    } else {
      return "/om-symbol.png";
    }
  };

  const imgSrc = getImageForTitle(title);

  return (
    <div className="flex flex-col bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* Responsive header */}
      <header className="sticky top-0 z-10 flex flex-col sm:flex-row h-auto sm:h-16 items-center gap-2 sm:gap-4 border-b border-orange-300 bg-gradient-to-r from-orange-600 to-red-600 px-3 sm:px-6 py-2 sm:py-0 lg:h-[60px]">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-yellow-100 flex items-center justify-center">
            <span className="text-orange-700 font-bold text-sm sm:text-base">ॐ</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-yellow-100">{title}</h1>
        </div>
        {names.length > 0 && (
          <div className="ml-0 sm:ml-auto text-xs sm:text-sm bg-yellow-100/20 px-2 sm:px-3 py-1 rounded-full mt-1 sm:mt-0">
            <span className="font-medium text-yellow-100">वर्तमान पाठक: </span>
            <span className="text-yellow-200 font-semibold">
              {names[currentPersonIndex]}
            </span>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-auto p-2 sm:p-4">
        <div className="mx-auto max-w-4xl">
          <div className="sticky top-16 sm:top-20 left-0 right-0 z-20 flex justify-center pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-yellow-100/50 to-orange-200/30 rounded-full blur-xl"></div>
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full animate-pulse opacity-30"></div> */}
            </div>
          </div>

          <div className="relative">
            {/* Responsive content area */}
            <div className="space-y-3 sm:space-y-5 max-h-[calc(100vh-160px)] sm:max-h-[calc(100vh-200px)] overflow-y-auto pr-1 pl-1 sm:pr-2 sm:pl-2 pt-16 sm:pt-24 pb-6 sm:pb-10 px-2 sm:px-6 md:px-10 mt-2 sm:mt-4">
              {title === "dasavatara" && (
                <div className="rounded-lg overflow-hidden border-2 sm:border-4 border-orange-400 shadow-lg mb-4 sm:mb-6">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/Z3h71JsZjT0"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {isMobile ? (
                // Show all content for mobile
                currentParas.map((para, idx) => (
                  <Card
                    key={para.id}
                    className="border-2 border-orange-300 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
                    <CardContent className="p-3 sm:p-6">
                      {indices?.[idx] && (
                        <div className="mb-1 sm:mb-2 text-orange-800 font-semibold text-sm sm:text-base">
                          श्लोक {indices[idx]}
                        </div>
                      )}
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-loose font-normal text-orange-900">
                        {para.text}
                      </p>
                      <div className="mt-2 sm:mt-3 text-right text-xs sm:text-sm text-orange-700">
                        पैराग्राफ {para.id}/{currentParas.length}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                // Show paginated content for desktop
                currentParas
                  .slice(
                    currentPage * parasPerPage,
                    currentPage * parasPerPage + parasPerPage
                  )
                  .map((para, idx) => (
                    <Card
                      key={para.id}
                      className="border-2 border-orange-300 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
                      <CardContent className="p-3 sm:p-6">
                        {indices?.[currentPage * parasPerPage + idx] && (
                          <div className="mb-1 sm:mb-2 text-orange-800 font-semibold text-sm sm:text-base">
                            श्लोक {indices[currentPage * parasPerPage + idx]}
                          </div>
                        )}
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-loose font-normal text-orange-900">
                          {para.text}
                        </p>
                        <div className="mt-2 sm:mt-3 text-right text-xs sm:text-sm text-orange-700">
                          पैराग्राफ {para.id}/{currentParas.length}
                        </div>
                      </CardContent>
                    </Card>
                  ))
              )}
            </div>
          </div>

          {/* Navigation controls - only show on desktop */}
          {!isMobile && (
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-2 sm:px-0">
              <Button
                onClick={handlePrevWithScroll}
                disabled={currentPage === 0}
                variant="outline"
                className="border-2 border-orange-400 text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-medium px-4 sm:px-6 py-1 sm:py-2 h-auto rounded-full group w-full sm:w-auto"
              >
                <ChevronLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
                पिछला पृष्ठ
              </Button>

              <div className="text-center order-first sm:order-none mb-2 sm:mb-0">
                {/* ... keep existing code (page information) */}
              </div>

              <Button
                onClick={handleNextWithScroll}
                disabled={currentPage >= totalPages - 1}
                variant="outline"
                className="border-2 border-orange-400 text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-medium px-4 sm:px-6 py-1 sm:py-2 h-auto rounded-full group w-full sm:w-auto"
              >
                अगला पृष्ठ
                <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </main>

      <footer className="py-2 sm:py-3 text-center text-xs sm:text-sm text-orange-700 border-t border-orange-200 bg-amber-50">
        <p>॥ हरि ॐ तत्सत् ॥</p>
      </footer>
    </div>
  );
};

export default ContentArea;