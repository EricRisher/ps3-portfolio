"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./XMBMenu.css";

const menuItems = [
  {
    id: "home",
    label: "Home",
    icon: "/icons/home.svg",
    submenu: [
      {
        id: "home1",
        label: "Info",
        icon: "/icons/info.svg",
        content: "Navigate through my portfolio using the arrow keys.",
      },
      {
        id: "home2",
        label: "Eric",
        icon: "/icons/user.svg",
        content: "Learn more about me and my work.",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: "/icons/projects.svg",
    submenu: [
      {
        id: "proj1",
        label: "Web Dev",
        icon: "/icons/info.svg",
        content: "Web Development Projects",
      },
      {
        id: "proj2",
        label: "Design",
        icon: "/icons/info.svg",
        content: "Design Projects",
      },
      {
        id: "proj3",
        label: "AI",
        icon: "/icons/info.svg",
        content: "AI Projects",
      },
    ],
  },
  {
    id: "Photo",
    label: "Photo",
    icon: "/icons/camera.svg",
    submenu: [
      {
        id: "cam1",
        label: "Photos",
        icon: "/icons/info.svg",
        content: "Photo Gallery",
      },
      {
        id: "cam2",
        label: "Videos",
        icon: "/icons/info.svg",
        content: "Video Gallery",
      },
    ],
  },
  {
    id: "music",
    label: "Music",
    icon: "/icons/music.svg",
    submenu: [
      {
        id: "music1",
        label: "Songs",
        icon: "/icons/info.svg",
        content: "My Music Collection",
      },
      {
        id: "music2",
        label: "Albums",
        icon: "/icons/info.svg",
        content: "My Albums Collection",
      },
    ],
  },
  {
    id: "videos",
    label: "Videos",
    icon: "/icons/video.svg",
    submenu: [
      {
        id: "vid1",
        label: "Movies",
        icon: "/icons/info.svg",
        content: "My Movie Collection",
      },
      {
        id: "vid2",
        label: "Shows",
        icon: "/icons/info.svg",
        content: "My TV Shows Collection",
      },
    ],
  },
  {
    id: "games",
    label: "Games",
    icon: "/icons/games.svg",
    submenu: [
      {
        id: "skill1",
        label: "Programming",
        icon: "/icons/info.svg",
        content: "Programming Languages and Frameworks",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    icon: "/icons/contact.svg",
  },
];

export default function XMBMenu() {
  const [selected, setSelected] = useState(0);
  const [subSelected, setSubSelected] = useState(0);

  const itemWidth = 230;
  const containerWidth = 1000;
  const centerOffset = containerWidth / 5 - itemWidth / 2;

  const getYOffset = (childIndex: number, selectedStep: number) => {
    switch (selectedStep) {
      case 0:
        // For step 0, define individual offsets per child.
        if (childIndex === 0) return 20;
        if (childIndex === 1) return 60;
        if (childIndex === 2) return 100;
        break;
      case 1:
        // For step 1, adjust positions so that items wrap.
        if (childIndex === 0) return -220;
        if (childIndex === 1) return -40;
        if (childIndex === 2) return 20;
        break;
      case 2:
        // For step 2, further adjust positions.
        if (childIndex === 0) return -300;
        if (childIndex === 1) return -280;
        if (childIndex === 2) return -100;
        break;
      default:
        return (childIndex - selectedStep) * 80;
    }
    return (childIndex - selectedStep) * 80;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // add nav sound effect on key press
    const audio = new Audio("/sounds/nav.mp3");
    if (e.key === "ArrowRight") {
      if (selected < menuItems.length - 1) {
        setSelected(selected + 1);
        setSubSelected(0);
        audio.play();
      }
    } else if (e.key === "ArrowLeft") {
      if (selected > 0) {
        setSelected(selected - 1);
        setSubSelected(0);
        audio.play();
      }
    } else if (e.key === "ArrowDown") {
      if (menuItems[selected].submenu) {
        setSubSelected((prev) =>
          Math.min(prev + 1, menuItems[selected].submenu.length - 1)
        );
        audio.play();
      }
    } else if (e.key === "ArrowUp") {
      if (menuItems[selected].submenu) {
        setSubSelected((prev) => Math.max(prev - 1, 0));
      }
      audio.play();
    } else if (e.key === "Enter") {
      if (menuItems[selected].submenu) {
        console.log(
          `Selected submenu item: ${menuItems[selected].submenu[subSelected].label}`
        );
      } else {
        console.log(`Selected main category: ${menuItems[selected].label}`);
      }
    } else if (e.key === "Escape") {
      setSubSelected(0);
    }
  };

  const currentContent =
    menuItems[selected].submenu?.[subSelected]?.content ||
    menuItems[selected].content ||
    "";

  return (
    <div
      className="outline-none flex flex-col items-center h-screen relative overflow-visible"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative w-full overflow-visible mt-[calc(100vh/3)]">
        <motion.div
          className="flex space-x-20 overflow-visible"
          animate={{ x: centerOffset - selected * itemWidth }}
          transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id + index}
              className="category relative flex flex-col justify-between items-center cursor-pointer min-w-[150px] transition-transform duration-300 ease-in-out"
              animate={{
                scale: selected === index ? 1.1 : 1,
                opacity: Math.abs(selected - index) > 2 ? 0.3 : 1,
              }}
              transition={{ duration: 0.15 }}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={80}
                height={80}
                max-height={60}
                className={`transition ${
                  selected === index
                    ? "opacity-100 scale-125 filter drop-shadow-glow"
                    : "opacity-50"
                }`}
              />
              <motion.span
                className="mt-1 text-white text-sm"
                animate={{ opacity: selected === index ? 1 : 0 }}
                transition={{ duration: 0.15 }}
              >
                {item.label}
              </motion.span>
              {/* Update the submenu container to use a spring transition with higher stiffness for a snappier feel */}
              {selected === index && item.submenu && (
                <div className="absolute ml-12 mt-32 flex flex-col items-start z-50">
                  {item.submenu.map((sub, subIndex) => (
                    <motion.div
                      key={sub.id}
                      className="flex flex-row items-center cursor-pointer relative z-50"
                      animate={{
                        y: getYOffset(subIndex, subSelected),
                        scale: subSelected === subIndex ? 1.2 : 1,
                        opacity: subSelected === subIndex ? 1 : 0.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <Image
                        src={sub.icon}
                        alt={sub.label}
                        width={60}
                        height={60}
                        className="transition mr-4"
                      />
                      <motion.span
                        className="submenu-h1 text-white text-sm whitespace-nowrap"
                        animate={{
                          opacity: subSelected === subIndex ? 1 : 0.5,
                        }}
                      >
                        {sub.label}
                      </motion.span>
                      {subSelected === subIndex && currentContent && (
                        <motion.div
                          className="absolute top-0 ml-40 bg-[#000e55ad] border p-6 rounded-md shadow-lg text-white w-[400px] z-50"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        >
                          {currentContent}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
