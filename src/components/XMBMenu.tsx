"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./XMBMenu.css";
import PS3Header from "./PS3Header";

interface MenuSubItem {
  id: string;
  label: string;
  url: string;
  icon: string;
  content: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  url?: string;
  content?: string;
  submenu?: MenuSubItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/icons/home.svg",
    submenu: [
      {
        id: "home1",
        label: "Info",
        url: "",
        icon: "/icons/info.svg",
        content: "Navigate through my portfolio using the arrow keys.",
      },
      {
        id: "home2",
        label: "Turn Off System",
        url: "",
        icon: "/icons/power.svg",
        content: "",
      },
      {
        id: "home3",
        label: "Create New User",
        url: "",
        icon: "/icons/create-user.svg",
        content: "",
      },
      {
        id: "home4",
        label: "Eric",
        url: "",
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
        label: "CaliGo",
        url: "www.caligo.site",
        icon: "/icons/caligo.svg",
        content: "",
      },
      {
        id: "proj2",
        label: "Driveway Blasters",
        url: "www.drivewayblaster.com",
        icon: "/icons/drivewayblasters.png",
        content: "",
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
        url: "",
        icon: "/icons/info.svg",
        content: "Photo Gallery",
      },
      {
        id: "cam2",
        label: "Videos",
        url: "",
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
        url: "",
        icon: "/icons/info.svg",
        content: "My Music Collection",
      },
      {
        id: "music2",
        label: "Albums",
        url: "",
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
        url: "",
        icon: "/icons/info.svg",
        content: "My Movie Collection",
      },
      {
        id: "vid2",
        label: "Shows",
        url: "",
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
        url: "",
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
  const [subSelectedMapping, setSubSelectedMapping] = useState<{
    [key: string]: number;
  }>({});

  const currentSubSelected = subSelectedMapping[menuItems[selected].id] ?? 0;

  const itemWidth = 230;
  const containerWidth = 1000;
  const centerOffset = containerWidth / 5 - itemWidth / 2;

  function navigateTo(url: string): void {
    if (typeof window !== "undefined") {
      // Prepend "https://" if the url doesn't start with http or https
      if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
      }
      window.open(url, "_blank");
    }
  }

  const getYOffset = (childIndex: number, selectedStep: number) => {
    switch (selectedStep) {
      case 0:
        // For step 0, define individual offsets per child.
        if (childIndex === 0) return 20;
        if (childIndex === 1) return 40;
        if (childIndex === 2) return 60;
        if (childIndex === 3) return 80;
        if (childIndex === 4) return 100;
        break;
      case 1:
        // For step 1, adjust positions so that items wrap.
        if (childIndex === 0) return -240;
        if (childIndex === 1) return -60;
        if (childIndex === 2) return 20;
        if (childIndex === 3) return 60;
        if (childIndex === 4) return 80;
        break;
      case 2:
        // For step 2, further adjust positions.
        if (childIndex === 0) return -320;
        if (childIndex === 1) return -310;
        if (childIndex === 2) return -140;
        if (childIndex === 3) return -20;
        if (childIndex === 4) return 0;
        break;
      case 3:
        // For step 3, adjust positions for wrapping.
        if (childIndex === 0) return -460;
        if (childIndex === 1) return -440;
        if (childIndex === 2) return -420;
        if (childIndex === 3) return -220;
        if (childIndex === 4) return -120;
        break;
      case 4:
        // For step 4, adjust positions for wrapping.
        if (childIndex === 0) return -460;
        if (childIndex === 1) return -440;
        if (childIndex === 2) return -360;
        if (childIndex === 3) return -280;
        if (childIndex === 4) return -200;
        break;
      case 5:
        // For step 5, adjust positions for wrapping.
        if (childIndex === 0) return -540;
        if (childIndex === 1) return -520;
        if (childIndex === 2) return -440;
        if (childIndex === 3) return -360;
        if (childIndex === 4) return -280;
        break;
      default:
        return (childIndex - selectedStep) * 80;
    }
    return (childIndex - selectedStep) * 80;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentCategoryId = menuItems[selected].id;
    let newSubIndex: number | null = null;
    let shouldPlaySound = false;

    switch (e.key) {
      case "ArrowRight":
        if (selected < menuItems.length - 1) {
          setSelected(selected + 1);
          shouldPlaySound = true;
        }
        break;
      case "ArrowLeft":
        if (selected > 0) {
          setSelected(selected - 1);
          shouldPlaySound = true;
        }
        break;
      case "ArrowDown":
        if (menuItems[selected].submenu) {
          const maxIndex = menuItems[selected].submenu!.length - 1;
          if (currentSubSelected < maxIndex) {
            newSubIndex = currentSubSelected + 1;
            shouldPlaySound = true;
          }
        }
        break;
      case "ArrowUp":
        if (menuItems[selected].submenu && currentSubSelected > 0) {
          newSubIndex = currentSubSelected - 1;
          shouldPlaySound = true;
        }
        break;
      case "Enter":
        if (menuItems[selected].submenu) {
          const currentItem = menuItems[selected].submenu![currentSubSelected];
          if (currentItem.url && currentItem.url.trim() !== "") {
            navigateTo(currentItem.url);
          } else {
            console.log(`Selected submenu item: ${currentItem.label}`);
          }
        } else {
          if (
            menuItems[selected].url &&
            menuItems[selected].url.trim() !== ""
          ) {
            navigateTo(menuItems[selected].url);
          } else {
            console.log(`Selected main category: ${menuItems[selected].label}`);
          }
        }
        shouldPlaySound = true;
        break;
      case "Escape":
        newSubIndex = 0;
        shouldPlaySound = true;
        break;
      default:
        break;
    }

    if (newSubIndex !== null) {
      setSubSelectedMapping((prev) => ({
        ...prev,
        [currentCategoryId]: newSubIndex,
      }));
    }

    if (shouldPlaySound) {
      const audio = new Audio("/sounds/nav.mp3");
      audio.play();
    }
  };

  const currentContent =
    menuItems[selected].submenu?.[currentSubSelected]?.content ||
    menuItems[selected].content ||
    "";

  return (
    <>
      <PS3Header />

      <div
        className="outline-none flex flex-col h-screen relative overflow-visible"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full overflow-visible mt-[calc(100vh/3)]">
          <motion.div
            className="category-container flex space-x-20 overflow-visible"
            animate={{ x: centerOffset - selected * itemWidth }}
            transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id + index}
                className="category relative flex flex-col justify-between items-center cursor-pointer min-w-[150px] transition-transform duration-300 ease-in-out"
                animate={{
                  scale: selected === index ? 1.2 : 1,
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
                      ? "opacity-100 scale-110 filter drop-shadow-glow"
                      : "opacity-50"
                  }`}
                />
                <motion.span
                  className="mt-2 text-white text-sm drop-shadow-glow"
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
                        className="flex flex-row items-center cursor-pointer relative z-50 m-2"
                        onClick={() => navigateTo(sub.url)}
                        animate={{
                          y: getYOffset(subIndex, currentSubSelected),
                          scale: currentSubSelected === subIndex ? 1.6 : 1,
                          opacity: currentSubSelected === subIndex ? 1 : 0.5,
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
                          className="submenu-icon transition mr-12"
                        />
                        <motion.span
                          className="mt-1 text-white text-2xl whitespace-nowrap"
                          animate={{
                            opacity: currentSubSelected === subIndex ? 1 : 0.8,
                          }}
                        >
                          {sub.label}
                        </motion.span>
                        {currentSubSelected === subIndex && currentContent && (
                          <motion.div
                            className="absolute top-0 ml-60 bg-[#000e55ad] border p-6 rounded-md shadow-lg text-white w-[400px] z-50"
                            initial={{ opacity: 0, x: 100 }}
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
    </>
  );
}
