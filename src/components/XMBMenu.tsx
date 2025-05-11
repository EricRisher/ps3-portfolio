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
  subheading?: string;
  photos?: { src: string; label: string; subheading: string }[];
  videos?: string[];
  music?: string[];
  games?: string[];
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
        content: "",
        subheading: "Navigate using the arrow keys and select with Enter.",
      },
      {
        id: "home3",
        label: "Eric",
        url: "ericrisher.com",
        icon: "/icons/user.svg",
        content: "",
        subheading: "Learn more about me and my work.",
      },
      {
        id: "home4",
        label: "Create New User",
        url: "",
        icon: "/icons/create-user.svg",
        content: "",
      },
      {
        id: "home2",
        label: "Turn Off System",
        url: "",
        icon: "/icons/power.svg",
        content: "",
      },
      {
        id: "home5",
        label: "Settings",
        url: "",
        icon: "/icons/info.svg",
        content: "",
      },
      {
        id: "home6",
        label: "Help",
        url: "",
        icon: "/icons/info.svg",
        content: "",
      },
      {
        id: "home7",
        label: "About",
        url: "",
        icon: "/icons/info.svg",
        content: "",
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
        subheading:
          "CaliGo is a community-driven platform where users find and share hidden places and experiences off the beaten path.",
      },
      {
        id: "proj2",
        label: "Driveway Blasters",
        url: "www.drivewayblaster.com",
        icon: "/icons/drivewayblasters.png",
        content: "",
        subheading:
          "Designed for a fast, responsive experience across all devices, optimized for search engines using niche keywords to enhance visibility and attract targeted traffic.",
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
        label: "Belle",
        url: "",
        icon: "/icons/folder.svg",
        content: "",
        subheading: "8 Images",
        photos: [
          {
            src: "/photos/belle (1).jpg",
            label: "Belle 1",
            subheading: "A beautiful photo of Belle.",
          },
          {
            src: "/photos/belle (2).jpg",
            label: "Belle 2",
            subheading: "Another stunning shot of Belle.",
          },
        ],
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
  const [activeSubmenu] = useState<string | null>(null); // Track the active submenu
  const [isPhotoListActive, setIsPhotoListActive] = useState(false); // Track if photo list is active
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Track the currently selected photo

  const currentSubSelected = subSelectedMapping[menuItems[selected].id] ?? 0;

  const itemWidth = 230;
  const containerWidth = 1000;
  const centerOffset = containerWidth / 5 - itemWidth / 2;

  function navigateTo(url: string): void {
    if (typeof window !== "undefined") {
      if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
      }
      window.open(url, "_blank");
    }
  }

  const getYOffset = (childIndex: number, selectedStep: number) => {
    
    // The offsets are based on the index of the child element
    const offsetConfig = {
      0: [0, 0, 0, 0, 0, 0, 0],
      1: [-240, -95, -95, -95, -95, -95, -95],
      2: [-335, -335, -190, -190, -190, -190, -190],
      3: [-430, -430, -430, -285, -285, -285, -285],
      4: [-525, -525, -525, -525, -380, -380, -380],
      5: [-620, -620, -620, -620, -620, -475, -475],
      6: [-715, -715, -715, -715, -715, -715, -570],
      7: [-810, -810, -810, -810, -810, -810, -810],
    };
    const offsets = offsetConfig[selectedStep as keyof typeof offsetConfig];
    if (offsets && offsets[childIndex] !== undefined) {
      return offsets[childIndex];
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentCategoryId = menuItems[selected].id;
    let newSubIndex: number | null = null;
    let shouldPlaySound = false;

    if (isPhotoListActive) {
      switch (e.key) {
        case "ArrowDown":
          if (
            menuItems[selected].submenu &&
            menuItems[selected].submenu![currentSubSelected]?.photos
          ) {
            const photos =
              menuItems[selected].submenu && menuItems[selected].submenu[currentSubSelected]?.photos || [];
            if (currentPhotoIndex < photos.length - 1) {
              setCurrentPhotoIndex(currentPhotoIndex + 1);
            }
          }
          break;
        case "ArrowUp":
          if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
          }
          break;
        case "Enter":
          console.log(
            `Selected photo: ${
              menuItems[selected].submenu![currentSubSelected]?.photos![
                currentPhotoIndex
              ].label
            }`
          );
          break;
        case "Escape":
          setIsPhotoListActive(false);
          break;
        default:
          break;
      }
    } else {
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
            const currentItem =
              menuItems[selected].submenu![currentSubSelected];
            if (currentItem.photos && currentItem.photos.length > 0) {
              setIsPhotoListActive(true);
              setCurrentPhotoIndex(0);
            } else if (currentItem.url && currentItem.url.trim() !== "") {
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
              console.log(
                `Selected main category: ${menuItems[selected].label}`
              );
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
                  opacity: Math.abs(selected - index) > 2 ? 0.3 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={item.icon}
                  alt={item.label}
                  width={80}
                  height={80}
                  style={{ maxHeight: 60 }}
                  className={`transition ${
                    selected === index
                      ? "opacity-100 scale-110 filter drop-shadow-glow"
                      : "opacity-50"
                  }`}
                  animate={{
                    scale: selected === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="mt-2 text-white text-2xl drop-shadow-glow"
                  animate={{ opacity: selected === index ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {item.label}
                </motion.span>

                {selected === index && item.submenu && (
                  <div className="absolute ml-12 mt-32 flex flex-col items-start z-50 w-[34vw] left-[-10px] gap-[20px]">
                    {item.submenu.map((sub, subIndex) => (
                      <motion.div
                        key={sub.id}
                        className={`flex flex-row items-center cursor-pointer relative z-50 m-2 ${
                          activeSubmenu === item.id &&
                          currentSubSelected !== subIndex
                            ? "hidden"
                            : ""
                        }`}
                        onClick={() => navigateTo(sub.url)}
                        animate={{
                          y: getYOffset(subIndex, currentSubSelected),
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

                        <motion.div className="flex flex-col">
                          <motion.span
                            className={`mt-1 text-white text-2xl whitespace-nowrap ${
                              currentSubSelected === subIndex
                                ? "submenu-glow"
                                : ""
                            }`}
                            animate={{
                              opacity:
                                currentSubSelected === subIndex ? 1 : 0.8,
                            }}
                          >
                            {sub.label}
                          </motion.span>

                          {currentSubSelected === subIndex &&
                            sub.subheading && (
                              <motion.span
                                className="mt-1 text-gray-300 text-sm leading-4"
                                animate={{
                                  opacity: 1,
                                }}
                                initial={{
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                              >
                                {sub.subheading}
                              </motion.span>
                            )}
                        </motion.div>

                        {currentSubSelected === subIndex && currentContent && (
                          <motion.div className="flex flex-col">
                            <motion.div
                              className="absolute top-0 ml-100 bg-[#000e55ad] border p-6 rounded-md shadow-lg text-white w-[400px] z-50"
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
                            {currentSubSelected === subIndex &&
                              sub.subheading && (
                                <motion.span
                                  className="mt-1 text-gray-300 text-sm leading-4"
                                  animate={{
                                    opacity: 1,
                                  }}
                                  initial={{
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 0.2,
                                  }}
                                >
                                  {sub.subheading}
                                </motion.span>
                              )}
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

        {isPhotoListActive &&
          menuItems[selected].submenu &&
          menuItems[selected].submenu![currentSubSelected]?.photos && (
            <div className="absolute top-130 left-100 w-auto h-full overflow-y-auto bg-[#000e55ad] border p-6 rounded-md shadow-lg text-white z-50">
              {menuItems[selected].submenu![currentSubSelected]?.photos!.map(
                (photo, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center p-4 cursor-pointer ${
                      currentPhotoIndex === index
                        ? "bg-blue-500 text-white"
                        : "bg-transparent text-gray-300"
                    }`}
                    animate={{
                      scale: currentPhotoIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      width={60}
                      height={60}
                      className="rounded-md mr-4"
                    />

                    <div className="flex flex-col">
                      <span className="text-lg font-bold">{photo.label}</span>
                      <span className="text-sm">{photo.subheading}</span>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          )}
      </div>
    </>
  );
}
