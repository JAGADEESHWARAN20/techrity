"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet"; // Use Sheet components
import { X } from "lucide-react";

interface ManageWidgetsSheetProps {
  availableWidgets: { id: string; title: string }[];
  selectedWidgets: string[];
  onSave: (selectedIds: string[]) => void;
}

const ManageWidgetsSheet = ({
  availableWidgets,
  selectedWidgets,
  onSave,
}: ManageWidgetsSheetProps) => {
  const [widgetSelections, setWidgetSelections] = useState<string[]>(selectedWidgets);

  const handleCheckboxChange = (id: string) => {
    setWidgetSelections((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-white h-full">
      {/* Header with Title and Close Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-900">Manage Widgets</h2>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close manage widgets sheet"
          >
            <X className="h-5 w-5 text-gray-600" />
          </Button>
        </SheetClose>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6">
        Personalize your dashboard by managing widgets, add, remove, or reorder them to fit your workflow.
      </p>

      {/* Widget List */}
      <div className="space-y-3">
        {availableWidgets.map((widget) => (
          <div key={widget.id} className="flex items-center">
            <input
              type="checkbox"
              id={widget.id}
              checked={widgetSelections.includes(widget.id)}
              onChange={() => handleCheckboxChange(widget.id)}
              className="mr-3 h-5 w-5 text-purple-600 rounded focus:ring-purple-600"
            />
            <label htmlFor={widget.id} className="text-gray-800">{widget.title}</label>
          </div>
        ))}
      </div>

      {/* Footer with Buttons */}
      <SheetFooter className="mt-6 flex justify-end gap-3">
        <SheetClose asChild>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            Reset to Default
          </Button>
        </SheetClose>
        <Button
          onClick={() => onSave(widgetSelections)}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          Save Changes
        </Button>
      </SheetFooter>
    </div>
  );
};

export default ManageWidgetsSheet;