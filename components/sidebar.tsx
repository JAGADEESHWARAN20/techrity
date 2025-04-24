"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { LayoutDashboard, ListChecks, Activity, Users, Megaphone, DollarSign as CurrencyDollar, Gift, Presentation, Settings, LogOut, PanelRight,  ShieldUser, CircleCheckBig, CircleX } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  comingSoon?: boolean;
}

interface SidebarProps {
  onClose: () => void;
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: ListChecks, label: "Programs", href: "/programs" },
  { icon: Activity, label: "Activities", href: "/activities" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: Megaphone, label: "Forums", href: "/forums" },
  { icon: CurrencyDollar, label: "Finances", href: "/finances" },
  { icon: Gift, label: "Rewards", href: "/rewards" },
  { icon: Presentation, label: "Analytics", href: "/analytics", comingSoon: true },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: LogOut, label: "Log Out", href: "/logout" },
];

const Sidebar = ({ onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-[#2A0D4F] justify-start h-screen px-4 py-6 gap-6">
      {/* Header Section */}
      <div className="font-bold w-full  justify-between text-xl flex flex-row items-center text-white">
        <span className="lowercase">techrity</span>
        <PanelRight onClick={onClose} className="w-5 h-5 cursor-pointer text-white" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col relative w-full gap-1">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={index}
              variant="ghost"
              className={`justify-start w-full gap-3 rounded-lg relative py-2 px-4 text-sm uppercase ${isActive
                  ? "bg-white text-[#2A0D4F] hover:bg-white"
                  : "text-white hover:bg-[#3A1B6F]"
                }`}
              asChild
            >
              <Link href={item.href}>
                <item.icon
                  className={`w-5 h-5 relative  ${isActive ? "text-[#2A0D4F]" : "text-white"}`}
                />
                <span className="text-left flex-1">{item.label}</span>
                {item.comingSoon && (
                  <span className="text-[.6em] bg-blue-600 absolute top-0 right-0 text-white px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* Separator */}
      <Separator className="my-4 bg-gray-500" />
      <div className=" flex flex-col gap-2">
      {/* Help Section */}
        <div className="relative flex flex-col items-start justify-between gap-2 text-sm text-gray-300 bg-[#3A1B6F] p-4 w-full rounded-lg">
          
          <ShieldUser className="w-5 h-5 text-white" />
            <p className="font-semibold text-white">
              Got some questions, enquiries or need help?
            </p>
            <Link href="#" className="text-[#FFD700] underline">
              Visit Mently Help Desk Here
            </Link>
          
        </div>

      {/* Switch to Classic Mode */}
      <div className="flex items-center justify-between mt-auto text-white gap-3 w-full text-xs">
          <Label htmlFor="switch-mode">Switch to Classic Mode</Label>
          <Switch
            className="data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-white"
            checkedIcon={<CircleCheckBig size={16} color="green" className="ml-1 mt-1 bg-black text-white" />}  // change the icons based on your need
            uncheckedIcon={<CircleX size={16} color="gray" className="ml-1 mt-1 bg-white text-black" />} // all the icons are taken from **react-icons** npm library
          />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;