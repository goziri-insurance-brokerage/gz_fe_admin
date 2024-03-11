"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ICONS, Icon, LogoIcon } from "../../../ui";
import { usePathname } from "next/navigation";
import { useLazyFetchAdminProfileQuery } from "@/apis/profile.api";
import { AsyncFunction } from "@/@Types";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/store/slices/profile.slice";
import { RootState } from "@/store/index.store";
import MobileNav from "@/ui/navigation/mobile-nav";
import { NAVIGATIONS } from "@/constants/navigation.constant";

export default function Header() {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const path = NAVIGATIONS.map((nav) => {
    if (pathName === nav.url) return nav.title;
  });

  const adminProfile = useSelector((state: RootState) => state.profile.data);

  const [isNav, setIsNav] = useState(false);

  const [fetchAdminProfile, {}] = useLazyFetchAdminProfileQuery();

  const handleFetchAdminProfile: AsyncFunction = async () => {
    const response = await fetchAdminProfile({});
    dispatch(setProfile(response.data));
  };

  useEffect(() => {
    handleFetchAdminProfile();
  }, []);

  return (
    <header className="grid grid-flow-col gap-10 justify-between items-center py-4 page-spacing">
      <div className="grid grid-flow-col w-max gap-4 items-center">
        <span className="lg:hidden">
          <LogoIcon size={38} />
        </span>
        <h1 className="text-lg font-bold capitalize lg:hidden">{path}</h1>
      </div>

      <div className="grid grid-flow-col w-max items-center gap-3">
        <MobileNav
          showNav={isNav}
          closeNav={() => {
            setIsNav(false);
          }}
          navigations={NAVIGATIONS}
        />

        <div className="grid-flow-col w-max items-center gap-3 hidden sm:grid">
          <div className="pr-3 border-r border-grey-normal text-sm">
            {adminProfile?.first_name} {adminProfile?.last_name}
          </div>

          <div className="grid grid-flow-col gap-3 items-center">
            <div className="grid-flow-col w-max gap-3 items-center border border-[#D9D9D9] rounded-full p-1">
              <div className="bg-grey-light rounded-full overflow-hidden relative w-7 h-7 grid place-content-center">
                {adminProfile?.photo_uri ? (
                  <Image
                    src={adminProfile?.photo_uri}
                    fill
                    objectPosition="top"
                    objectFit="cover"
                    alt="Profile Image"
                  />
                ) : (
                  <Icon type={ICONS.Profile} size={18} color="#005AFF" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col w-max gap-5 items-center">
          <span className="text-xs sm:hidden">
            <Icon type={ICONS.Bell} size={20} color={"#005AFF"} />
          </span>
          <button
            onClick={() => {
              setIsNav(true);
            }}
            className="text-xs cursor-pointer lg:hidden"
          >
            <Icon type={ICONS.Hamburger} color="#242424" size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
