import React from "react";
import { ICONS, IconProps } from "./@type";
import { AddUser } from "./add-user";
import { ArrowDownFilled } from "./arrow-down-filled";
import { ArrowDown } from "./arrow-down";
import { ArrowLeft } from "./arrow-left";
import { ArrowRight } from "./arrow-right";
import { ArrowUpFilled } from "./arrow-up-filled";
import { ArrowUp } from "./arrow-up";
import { Bell } from "./bell";
import { Calendar } from "./calendar";
import { Chart } from "./chart";
import { Check } from "./check";
import { CloseSquareFilled } from "./close-square-filled";
import { Close } from "./close";
import { Dashboard } from "./dashboard";
import { Document } from "./document";
import { DoubleArrowLeft } from "./double-arrow-left";
import { Ellipsis } from "./ellipsis";
import { EyeClosed } from "./eye-closed";
import { Filter } from "./filter";
import { Hamburger } from "./hamburger";
import { InfoSquare } from "./info-square";
import { Minus } from "./minus";
import { PaperUpload } from "./paper-upload";
import { Plus } from "./plus";
import { Profile } from "./profile";
import { Search } from "./search";
import { Settings } from "./settings";
import { ShieldDone } from "./shield-done";
import { Sort } from "./sort";
import { Support } from "./support";
import { ThreeUsers } from "./three-users";
import { TickSquareFilled } from "./tick-square-filled";
import { TwoUsers } from "./two-users";
import { Warning } from "./warning";
import { Work } from "./work";
import { DuotoneDocument } from "./duotone-icons/duotone-document";
import { DuotonePaper } from "./duotone-icons/duotone-paper";
import { DuotoneProfile } from "./duotone-icons/duotone-profile";
import { DuotoneUsers } from "./duotone-icons/duotone-users";
import { DuotoneRevenue } from "./duotone-icons/duotone-revenue";
import { Logout } from "./logout";

interface Props extends IconProps {
  type: ICONS;
}

export function Icon({ type, color, size }: Props) {
  switch (type) {
    case ICONS.AddUser:
      return <AddUser color={color} size={size} />;

    case ICONS.ArrowDownFilled:
      return <ArrowDownFilled color={color} size={size} />;

    case ICONS.ArrowDown:
      return <ArrowDown color={color} size={size} />;

    case ICONS.ArrowLeft:
      return <ArrowLeft color={color} size={size} />;

    case ICONS.ArrowRight:
      return <ArrowRight color={color} size={size} />;

    case ICONS.ArrowUpFilled:
      return <ArrowUpFilled color={color} size={size} />;

    case ICONS.ArrowUp:
      return <ArrowUp color={color} size={size} />;

    case ICONS.Bell:
      return <Bell color={color} size={size} />;

    case ICONS.Calendar:
      return <Calendar color={color} size={size} />;

    case ICONS.Chart:
      return <Chart color={color} size={size} />;

    case ICONS.Check:
      return <Check color={color} size={size} />;

    case ICONS.CloseSquareFilled:
      return <CloseSquareFilled color={color} size={size} />;

    case ICONS.Close:
      return <Close color={color} size={size} />;

    case ICONS.Dashboard:
      return <Dashboard color={color} size={size} />;

    case ICONS.Document:
      return <Document color={color} size={size} />;

    case ICONS.DoubleArrowLeft:
      return <DoubleArrowLeft color={color} size={size} />;

    case ICONS.Ellipsis:
      return <Ellipsis color={color} size={size} />;

    case ICONS.EyeClosed:
      return <EyeClosed color={color} size={size} />;

    case ICONS.Filter:
      return <Filter color={color} size={size} />;

    case ICONS.Hamburger:
      return <Hamburger color={color} size={size} />;

    case ICONS.InfoSquare:
      return <InfoSquare color={color} size={size} />;

    case ICONS.Logout:
      return <Logout color={color} size={size} />;

    case ICONS.Minus:
      return <Minus color={color} size={size} />;

    case ICONS.PaperUpload:
      return <PaperUpload color={color} size={size} />;

    case ICONS.Plus:
      return <Plus color={color} size={size} />;

    case ICONS.Profile:
      return <Profile color={color} size={size} />;

    case ICONS.Search:
      return <Search color={color} size={size} />;

    case ICONS.Settings:
      return <Settings color={color} size={size} />;

    case ICONS.ShieldDone:
      return <ShieldDone color={color} size={size} />;

    case ICONS.Sort:
      return <Sort color={color} size={size} />;

    case ICONS.Support:
      return <Support color={color} size={size} />;

    case ICONS.ThreeUsers:
      return <ThreeUsers color={color} size={size} />;

    case ICONS.TickSquareFilled:
      return <TickSquareFilled color={color} size={size} />;

    case ICONS.TwoUsers:
      return <TwoUsers color={color} size={size} />;

    case ICONS.Warning:
      return <Warning color={color} size={size} />;

    case ICONS.Work:
      return <Work color={color} size={size} />;

    // DUOTONE ICONS
    case ICONS.DUOTONE_DOCUMENT:
      return <DuotoneDocument color={color} size={size} />;

    case ICONS.DUOTONE_PAPER:
      return <DuotonePaper color={color} size={size} />;

    case ICONS.DUOTONE_PROFILE:
      return <DuotoneProfile color={color} size={size} />;

    case ICONS.DUOTONE_REVENUE:
      return <DuotoneRevenue color={color} size={size} />;

    case ICONS.DUOTONE_USERS:
      return <DuotoneUsers color={color} size={size} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
