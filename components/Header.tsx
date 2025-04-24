"use client";

import { Button } from "@/components/ui/button";
import { PanelRightClose, Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <nav className="md:hidden">
        <Button variant="ghost" onClick={toggleSidebar}>
          <PanelRightClose className="h-6 w-6 text-gray-600" />
        </Button>
      </nav>
      <div className="flex items-center justify-end w-full">
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="relative" size="icon">
                <span className="animate-pulse w-2 h-2 absolute top-2 right-2 rounded-full bg-red-600"></span>
                <Bell className="h-5 w-5 text-gray-600 " />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-white">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Notifications</h4>
                <p className="text-sm text-gray-600">
                  You have 3 new notifications.
                </p>
                <div className="text-sm text-gray-600">
                  - KYC Verification completed
                  <br />
                  - New user signed up
                  <br />
                  - Withdrawal request pending
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Select defaultValue="blessing">
            <SelectTrigger className="w-[180px] border-purple-600 text-purple-600">
              <SelectValue placeholder="Switch User" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="blessing">Blessing</SelectItem>
              <SelectItem value="maxwell">Maxwell Smith</SelectItem>
              <SelectItem value="adeati">Adeati Samuel</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}