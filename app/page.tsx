"use client"
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { gitaMahatamyaParas, BhagavadGitaChapter12 } from "@/data/sampleTexts";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import ReaderSidebar from "@/components/ReaderSidebar";

// YouTube embed URL for दशावतार स्तोत्र
const dasavataraVideoUrl = "https://www.youtube.com/embed/Z3h71JsZjT0";

const Index = () => {
  const [activeContent, setActiveContent] = useState<"gita" | "vishnu" | "dasavatara">("gita");
  const [names, setNames] = useState<string[]>([]);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const parasPerPerson = 4;
  const parasPerPage = 4;

  const [currentPage, setCurrentPage] = useState(0);
  const currentParas = activeContent === "gita" ? gitaMahatamyaParas : BhagavadGitaChapter12;
  const gitaIndices = activeContent === "gita"
    ? gitaMahatamyaParas.map((_, index) => `G${index + 1}`)
    : [];
  const totalPages = Math.ceil(currentParas.length / parasPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);

      // Update current person based on page
      if (names.length > 0) {
        const startParaIndex = newPage * parasPerPage;
        const newPersonIndex = Math.floor(startParaIndex / parasPerPerson) % names.length;
        setCurrentPersonIndex(newPersonIndex);
      }
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);

      // Update current person based on page
      if (names.length > 0) {
        const startParaIndex = newPage * parasPerPage;
        const newPersonIndex = Math.floor(startParaIndex / parasPerPerson) % names.length;
        setCurrentPersonIndex(newPersonIndex);
      }
    }
  };

  useEffect(() => {
    // Reset page index when switching content
    setCurrentPage(0);
    setCurrentPersonIndex(0);
  }, [activeContent]);

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr_280px]">
        {/* Left Sidebar */}
        <LeftSidebar 
          activeContent={activeContent} 
          setActiveContent={setActiveContent} 
        />

        {/* Main Content */}
        {activeContent === "dasavatara" ? (
          <div className="flex justify-center w-full px-4 py-8">
            <iframe
              className="w-full max-w-3xl aspect-video"
              src={dasavataraVideoUrl}
              title="Shri Dasavatara Stotra"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <ContentArea
            title={activeContent === "gita" ? "गीता माहात्म्य" : "विष्णु पुराण"}
            currentParas={currentParas}
            currentPage={currentPage}
            totalPages={totalPages}
            currentPersonIndex={currentPersonIndex}
            names={names}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            parasPerPage={parasPerPage}
            indices={gitaIndices}
          />
        )}

        {/* Right Sidebar */}
        <ReaderSidebar
          names={names}
          setNames={setNames}
          currentPersonIndex={currentPersonIndex}
          currentParas={currentParas}
          parasPerPerson={parasPerPerson}
        />
      </div>
    </SidebarProvider>
  );
};

export default Index;