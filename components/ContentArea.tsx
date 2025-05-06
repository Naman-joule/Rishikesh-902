"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-orange-300 bg-gradient-to-r from-orange-600 to-red-600 px-6 lg:h-[60px]">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
            <span className="text-orange-700 font-bold">ॐ</span>
          </div>
          <h1 className="text-xl font-bold text-yellow-100">{title}</h1>
        </div>
        {names.length > 0 && (
          <div className="ml-auto text-sm bg-yellow-100/20 px-3 py-1 rounded-full">
            <span className="font-medium text-yellow-100">वर्तमान पाठक: </span>
            <span className="text-yellow-200 font-semibold">
              {names[currentPersonIndex]}
            </span>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-4xl">
          <div className="sticky top-20 left-0 right-0 z-20 flex justify-center pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-yellow-100/50 to-orange-200/30 rounded-full blur-xl"></div>
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full animate-pulse opacity-30"></div> */}
            </div>
          </div>

          <div className="relative">
            {/* <div className="absolute top-0 left-0 w-full h-8 bg-[url('/border-top.png')] bg-repeat-x"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[url('/border-bottom.png')] bg-repeat-x"></div>
            <div className="absolute top-0 left-0 w-8 h-full bg-[url('/border-left.png')] bg-repeat-y"></div>
            <div className="absolute top-0 right-0 w-8 h-full bg-[url('/border-right.png')] bg-repeat-y"></div> */}

            <div className="space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 pl-2 pt-24 pb-10 px-10 mt-4">
              {title === "dasavatara" && (
                <div className="rounded-lg overflow-hidden border-4 border-orange-400 shadow-lg mb-6">
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
              {currentParas
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
                    <CardContent className="p-6">
                      {indices?.[currentPage * parasPerPage + idx] && (
                        <div className="mb-2 text-orange-800 font-semibold">
                          श्लोक {indices[currentPage * parasPerPage + idx]}
                        </div>
                      )}
                      <p className="text-3xl leading-loose font-normal text-orange-900">
                        {para.text}
                      </p>
                      <div className="mt-3 text-right text-sm text-orange-700">
                        पैराग्राफ {para.id}/{currentParas.length}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              variant="outline"
              className="border-2 border-orange-400 text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-medium px-6 py-2 h-auto rounded-full group"
            >
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              पिछला पृष्ठ
            </Button>

            <div className="text-center">
              <div className="inline-block bg-orange-100 px-4 py-2 rounded-full border border-orange-300">
                <span className="font-medium text-orange-800">
                  पृष्ठ {currentPage + 1} / {totalPages}
                </span>
              </div>
              {names.length > 0 && (
                <div className="text-orange-700 mt-2">
                  पाठक:{" "}
                  <span className="text-orange-800 font-medium">
                    {names[currentPersonIndex]}
                  </span>
                </div>
              )}
            </div>

            <Button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              variant="outline"
              className="border-2 border-orange-400 text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-medium px-6 py-2 h-auto rounded-full group"
            >
              अगला पृष्ठ
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-3 text-center text-sm text-orange-700 border-t border-orange-200 bg-amber-50">
        <p>॥ हरि ॐ तत्सत् ॥</p>
      </footer>
    </div>
  );
};

export default ContentArea;
