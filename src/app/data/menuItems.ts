export type MenuItem = {
  id: string;
  label: string;
  icon: string;
  url?: string;
  content?: string;
  subheading?: string;
  submenu?: MenuItem[];
  photos?: { src: string; label: string; subheading: string }[];
  videos?: { src: string; label: string; subheading: string }[];
  music?: { src: string; label: string; subheading: string }[];
  isDisc?: boolean;
};

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
        label: "Little Big Planet 1 & 2",
        url: "",
        icon: "/icons/lbp-disc.png",
        content: "",
        subheading: "4 Tracks",
        music: [
          {
            src: "/music/Passion Pit - Sleepyhead.mp4",
            label: "Little Big Planet Theme",
            subheading: "Songs from Little Big Planet.",
          },
          {
            src: "/music/The Orb Of Dreamers.mp4",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
          {
            src: "/music/Ferry Corsten - Rock Your Body Rock.mp4",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
          {
            src: "/music/Trüby Trio - A Go Go.mp4",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
        ],
        isDisc: true,
      },
      {
        id: "music2",
        label: "disc 1",
        url: "",
        icon: "/icons/disc.png",
        content: "",
        subheading: "1 Track",
        music: [
          {
            src: "/music/little-big-planet.mp3",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
        ],
        isDisc: true,
      },
      {
        id: "music3",
        label: "disc 2",
        url: "",
        icon: "/icons/disc.png",
        content: "",
        subheading: "1 Track",
        music: [
          {
            src: "/music/little-big-planet.mp3",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
        ],
        isDisc: true,
      },
      {
        id: "music4",
        label: "disc 3",
        url: "",
        icon: "/icons/disc.png",
        content: "",
        subheading: "1 Track",
        music: [
          {
            src: "/music/little-big-planet.mp3",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
        ],
        isDisc: true,
      },
      {
        id: "music5",
        label: "disc 4",
        url: "",
        icon: "/icons/disc.png",
        content: "",
        subheading: "1 Track",
        music: [
          {
            src: "/music/little-big-planet.mp3",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
        ],
        isDisc: true,
      },
      {
        id: "music6",
        label: "disc 5",
        url: "",
        icon: "/icons/disc.png",
        content: "",
        subheading: "1 Track",
        music: [
          {
            src: "/music/little-big-planet.mp3",
            label: "Little Big Planet Theme",
            subheading: "The theme song from Little Big Planet.",
          },
        ],
        isDisc: true,
      },
    ],
  },
  {
    id: "videos",
    label: "Videos",
    icon: "/icons/video.svg",
    submenu: [
      {
        id: "little-big-planet",
        label: "Little Big Planet Tutorials",
        url: "",
        icon: "/icons/folder-lbp.png",
        content: "",
        subheading: "4 Videos",
        videos: [
          {
            src: "/videos/Little Big Planet 2 Introduction -  Orb of Dreamers .mp4",
            label: "LBP 2 Introduction",
            subheading: "Introduction to LBP 2.",
          },
          {
            src: "/videos/lbp-stuck.mp4",
            label: "LBP Stuck",
            subheading: "Tutorial on getting unstuck in LBP.",
          },
          {
            src: "/videos/lbp-controls.mp4",
            label: "LBP Controls",
            subheading: "Tutorial on controls in LBP.",
          },
          {
            src: "/videos/lbp-acting.mp4",
            label: "LBP Acting",
            subheading: "Tutorial on acting in LBP.",
          }
        ],
      },
      {
        id: "desert-1",
        label: "Desert Trip",
        url: "",
        icon: "/icons/folder-desert.png",
        content: "",
        subheading: "1 Video",
        videos: [
          {
            src: "/videos/4runner.mov",
            label: "4Runner",
            subheading: "A video of the 4Runner in the desert.",
          },
        ],
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

export default menuItems;
