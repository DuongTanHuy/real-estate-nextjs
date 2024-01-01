import { ISideBarLink } from "./../types/general.types";

const sideBarLink: ISideBarLink[] = [
  {
    title: "Dashboard",
    icon: "/assets/icons/ic_dashboard.svg",
    path: "/",
  },
  {
    title: "Property",
    icon: "/assets/icons/ic_property.svg",
    path: "/property",
  },
  {
    title: "Agent",
    icon: "/assets/icons/ic_agent.svg",
    path: "/agent",
  },
  {
    title: "Review",
    icon: "/assets/icons/ic_review.svg",
    path: "/review",
  },
  {
    title: "Message",
    icon: "/assets/icons/ic_message.svg",
    path: "/message",
  },
  {
    title: "My Profile",
    icon: "/assets/icons/ic_profile.svg",
    path: "/my-profile",
  },
];

export { sideBarLink };
