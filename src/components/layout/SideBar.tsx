import { sideBarLink } from "@/constants/general.const";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SideBar = () => {
  const { pathname } = useRouter();
  return (
    <div className="bg-grayFc p-4 pt-[25px]">
      {sideBarLink.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`flex gap-x-[10px] items-center px-[23px] py-4 font-bold text-base rounded-xl text-gray80 transition-all hover:bg-primary hover:text-grayFc ${
            pathname === item.path && "bg-primary text-grayFc"
          }`}
        >
          <img src={item.icon} alt={item.title} />
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
