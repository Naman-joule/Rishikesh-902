import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Users, User, PlusCircle } from 'lucide-react';

interface ReaderSidebarProps {
  names: string[];
  setNames: (names: string[]) => void;
  currentPersonIndex: number;
  currentParas: { id: number; text: string }[];
  parasPerPerson: number;
}

const ReaderSidebar = ({
  names,
  setNames,
  currentPersonIndex,
  currentParas,
  parasPerPerson,
}: ReaderSidebarProps) => {
  const [newName, setNewName] = useState("");

  const handleAddName = () => {
    if (newName.trim() && names.length < 21) {
      setNames([...names, newName.trim()]);
      setNewName("");
    }
  };

  return (
    <div className="hidden border-l border-orange-200 md:block bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="flex h-full flex-col">
        <div className="border-b border-orange-200 p-4 bg-gradient-to-r from-orange-600 to-red-600">
          <h2 className="font-bold text-yellow-100 flex items-center gap-2">
            <Users className="h-5 w-5" />
            पाठक सूची
          </h2>
          <p className="text-sm text-yellow-100/80">आप अधिकतम 21 पाठक जोड़ सकते हैं</p>
        </div>
        
        {/* Decorative element - top */}
        <div className="h-4 w-full bg-[url('/border-top.png')] bg-repeat-x"></div>
        
        <div className="p-4">
          <div className="flex gap-2">
            <Input
              placeholder="पाठक का नाम"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              disabled={names.length >= 21}
              className="border-orange-200 focus-visible:ring-orange-400"
            />
            <Button
              onClick={handleAddName}
              disabled={!newName.trim() || names.length >= 21}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <PlusCircle className="h-4 w-4 mr-1" />
              जोड़ें
            </Button>
          </div>
          {names.length >= 21 && (
            <p className="mt-2 text-xs text-red-500">पाठकों की अधिकतम संख्या पहुंच गई</p>
          )}
        </div>
        
        <Separator className="bg-orange-200" />
        
        <div className="flex-1 overflow-auto p-4">
          <h3 className="mb-3 font-medium text-orange-800 flex items-center gap-2">
            <User className="h-4 w-4 text-orange-600" />
            पाठक ({names.length}/21)
          </h3>
          
          <div className="space-y-3">
            {names.map((name, index) => (
              <div
                key={index}
                className={`rounded-md p-3 ${
                  index === currentPersonIndex 
                    ? "bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300 shadow-sm" 
                    : "bg-white/60 border border-orange-100 hover:bg-orange-50 transition-colors"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-sm">
                    {name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-orange-900">{name}</p>
                    <p className="text-xs text-orange-700/80">
                      श्लोक {index * parasPerPerson + 1} -{" "}
                      {Math.min((index + 1) * parasPerPerson, currentParas.length)}
                    </p>
                  </div>
                  {index === currentPersonIndex && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
            
            {names.length === 0 && (
              <div className="text-center p-6 border border-dashed border-orange-200 rounded-md bg-orange-50/50">
                <div className="text-orange-400 flex justify-center mb-2">
                  <Users className="h-10 w-10" />
                </div>
                <p className="text-sm text-orange-800">अभी तक कोई पाठक नहीं जोड़ा गया है</p>
                <p className="text-xs text-orange-600 mt-1">पाठक जोड़ने के लिए ऊपर दिए गए फॉर्म का उपयोग करें</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative element - bottom */}
        <div className="h-4 w-full bg-[url('/border-bottom.png')] bg-repeat-x mt-auto"></div>
        
        {/* Footer with Om symbol */}
        <div className="p-3 text-center border-t border-orange-200">
          <div className="text-orange-700 text-sm">॥ शुभं भवतु ॥</div>
        </div>
      </div>
    </div>
  );
};

export default ReaderSidebar;
