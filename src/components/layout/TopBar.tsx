import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-grayFc h-[70px] py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-x-[82px] flex-1">
        <Link href="/" className="flex justify-start items-center">
          <img
            src="/assets/images/logo_name.png"
            width={173}
            height={35}
            alt="Logo"
          />
        </Link>
        <div className="px-[10px] rounded-lg bg-grayF4 flex items-center gap-x-2 flex-[0_1_405px] h-[38px]">
          <img src="/assets/icons/ic_search.svg" alt="search" />
          <input
            className="bg-transparent outline-none text-xs font-normal w-full placeholder:text-gray80"
            type="text"
            placeholder="Search property, customer etc"
          />
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center gap-x-5">
        <img src="/assets/icons/ic_bell.svg" alt="notify" />
        <div className="flex items-center gap-x-[10px] flex-shrink-0">
          <img
            src="/assets/images/avatar.png"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="font-semibold">Hawkins Maru</p>
            <p className="text-gray-80">Company Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
