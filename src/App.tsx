import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Layout, ClipboardList, User, Package } from 'lucide-react';

// --- Constants & Styles ---
const COLORS = {
  bg: '#f5e1c0',
  border: '#5d4037',
  widget: '#fff9c4',
  dialog: '#ffffff',
  button: '#ffe082',
  text: '#5d4037',
  progress: '#d32f2f',
};

// --- Components ---

const PixelBox = ({ children, className = '', bgColor = COLORS.widget, borderSize = 'border-4' }: { children: React.ReactNode, className?: string, bgColor?: string, borderSize?: string }) => (
  <div className={`relative ${borderSize} border-[#5d4037] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(93,64,55,0.2)] ${className}`} style={{ backgroundColor: bgColor }}>
    {children}
  </div>
);

const ActionButton = ({ label, onClick }: { label: string, onClick?: () => void }) => (
  <motion.button
    whileTap={{ scale: 0.95, translateY: 2 }}
    onClick={onClick}
    className="flex-1 py-3 px-4 bg-[#ffe082] border-4 border-[#5d4037] rounded-2xl font-black text-[#5d4037] shadow-[0_4px_0_0_#5d4037] active:shadow-none transition-all flex items-center justify-center gap-2"
  >
    <span className="text-lg">{label}</span>
  </motion.button>
);

const NavButton = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    className={`flex-1 flex flex-col items-center justify-center gap-1 p-3 border-4 border-[#5d4037] rounded-2xl shadow-[0_4px_0_0_#5d4037] active:shadow-none transition-all ${active ? 'bg-[#ffca28]' : 'bg-[#ffe082]'}`}
  >
    <div className="p-2 bg-white/30 rounded-lg">
      <Icon size={28} color={COLORS.text} strokeWidth={3} />
    </div>
    <span className="font-black text-sm text-[#5d4037]">{label}</span>
  </motion.button>
);

export default function App() {
  const [day, setDay] = useState(1);
  const [heart, setHeart] = useState(20);
  const [dialogue, setDialogue] = useState("Librarian: Welcome! Can I help you find a book today?");

  return (
    <div className="min-h-screen bg-[#f5e1c0] font-mono flex flex-col items-center p-4 select-none overflow-hidden">
      {/* --- TOP BAR --- */}
      <div className="w-full max-w-md flex justify-between items-center gap-4 mb-4">
        <PixelBox className="flex items-center gap-3 px-4 py-2 flex-1">
          <div className="p-1 bg-white/50 rounded-lg">
            <Calendar size={24} color={COLORS.text} strokeWidth={3} />
          </div>
          <span className="font-black text-lg text-[#5d4037]">第{day}/52天</span>
        </PixelBox>

        <PixelBox className="flex items-center gap-3 px-4 py-2 flex-1">
          <Heart size={24} fill={COLORS.progress} color={COLORS.progress} />
          <div className="flex-1 h-6 bg-[#5d4037]/20 rounded-full overflow-hidden border-2 border-[#5d4037] relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${heart}%` }}
              className="h-full bg-[#d32f2f]"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white drop-shadow-md">
              {heart}/100
            </span>
          </div>
        </PixelBox>
      </div>

      {/* --- MAIN SCENE (LIBRARY) --- */}
      <div className="flex-1 w-full max-w-md relative mb-4">
        <PixelBox bgColor="transparent" borderSize="border-0" className="w-full h-full relative">
          {/* Stylized Library Background Placeholder */}
          <div className="absolute inset-0 bg-[#e0c9a6] rounded-3xl border-4 border-[#5d4037] overflow-hidden shadow-inner">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5d4037 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            {/* Bookshelves (Isometric look) */}
            <div className="absolute top-8 right-8 w-40 h-72 bg-[#8d6e63] border-4 border-[#5d4037] grid grid-rows-5 gap-1 p-1 shadow-2xl">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-[#5d4037]/20 flex gap-1">
                  {[...Array(8)].map((_, j) => (
                    <div key={j} className="flex-1" style={{ backgroundColor: ['#4caf50', '#2196f3', '#f44336', '#ffeb3b', '#9c27b0'][ (i+j)%5 ] }} />
                  ))}
                </div>
              ))}
            </div>

            <div className="absolute top-12 right-52 w-32 h-64 bg-[#8d6e63] border-4 border-[#5d4037] grid grid-rows-4 gap-1 p-1 shadow-2xl">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-[#5d4037]/20 flex gap-1">
                  {[...Array(6)].map((_, j) => (
                    <div key={j} className="flex-1" style={{ backgroundColor: ['#ff9800', '#795548', '#607d8b', '#e91e63'][ (i+j)%4 ] }} />
                  ))}
                </div>
              ))}
            </div>
            
            {/* Librarian Desk */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-28 bg-[#a1887f] border-4 border-[#5d4037] rounded-lg shadow-2xl flex flex-col items-center justify-center">
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#f5e1c0] border-4 border-[#5d4037] rounded-full flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 bg-[#5d4037]/10 rounded-full flex items-center justify-center">
                  <User size={40} color={COLORS.text} strokeWidth={3} />
                </div>
              </div>
              <div className="mt-8 bg-white/30 px-3 py-1 rounded-full border-2 border-[#5d4037] text-[10px] font-black text-[#5d4037]">LIBRARIAN</div>
            </div>

            {/* Tables & Students */}
            <div className="absolute bottom-16 left-12 w-36 h-24 bg-[#a1887f] border-4 border-[#5d4037] rounded-lg shadow-xl flex items-center justify-center">
               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-[#5d4037]">
                 <User size={24} color={COLORS.text} />
               </div>
            </div>
            
            <div className="absolute bottom-32 right-16 w-36 h-24 bg-[#a1887f] border-4 border-[#5d4037] rounded-lg shadow-xl flex items-center justify-center">
               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-[#5d4037]">
                 <User size={24} color={COLORS.text} />
               </div>
            </div>
            
            {/* Lamps */}
            <div className="absolute top-1/4 left-1/3 w-4 h-16 bg-[#5d4037]" />
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-6 w-12 h-10 bg-[#fff176] border-4 border-[#5d4037] rounded-t-full shadow-[0_0_20px_rgba(255,241,118,0.5)]" />

            <div className="absolute bottom-1/4 right-1/4 w-4 h-12 bg-[#5d4037]" />
            <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-4 w-10 h-8 bg-[#fff176] border-4 border-[#5d4037] rounded-t-full shadow-[0_0_20px_rgba(255,241,118,0.5)]" />
            
            {/* Windows */}
            <div className="absolute top-12 left-8 w-20 h-32 bg-[#bbdefb] border-4 border-[#5d4037] rounded-t-full flex flex-col">
              <div className="flex-1 border-b-2 border-[#5d4037]" />
              <div className="flex-1 flex">
                <div className="flex-1 border-r-2 border-[#5d4037]" />
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </PixelBox>
      </div>

      {/* --- DIALOGUE BOX --- */}
      <div className="w-full max-w-md mb-4">
        <PixelBox bgColor={COLORS.dialog} className="p-6 flex flex-col gap-6">
          <div className="text-[#5d4037] font-black text-xl leading-relaxed min-h-[4rem]">
            {dialogue}
          </div>
          
          <div className="flex gap-3">
            <ActionButton label="Borrow" onClick={() => setDialogue("Librarian: Which book would you like to borrow?")} />
            <ActionButton label="Return" onClick={() => setDialogue("Librarian: Thank you for returning the book!")} />
            <ActionButton label="Chat" onClick={() => setDialogue("Librarian: It's a lovely day for reading, isn't it?")} />
          </div>
        </PixelBox>
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <div className="w-full max-w-md flex gap-3">
        <NavButton icon={Layout} label="场景" active />
        <NavButton icon={ClipboardList} label="任务" />
        <NavButton icon={User} label="状态" />
        <NavButton icon={Package} label="道具" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        body {
          font-family: 'VT323', monospace;
          background-color: #f5e1c0;
          color: #5d4037;
        }
        .font-black {
          font-weight: 900;
        }
        * {
          image-rendering: pixelated;
        }
      `}</style>
    </div>
  );
}
