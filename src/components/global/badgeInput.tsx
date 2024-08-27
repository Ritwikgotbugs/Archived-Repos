'use client';
import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { toast } from "sonner";
import { useBadgeStore } from '../../store'; 
import { Badge } from "../ui/badge";

export default function BadgeInput() {
  const [text, setText] = useState<string>("");
  const badges = useBadgeStore((state) => state.badges);
  const addBadge = useBadgeStore((state) => state.addBadge);
  const removeBadge = useBadgeStore((state) => state.removeBadge);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && text.trim()) {
      e.preventDefault();
      if (badges.length < 3) {
        addBadge(text.trim());
        setText("");
      } else {
        toast.info("You can only add up to 3 badges.");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="pb-5">
      <textarea
        className="w-full p-2 border-teal-900 border-2 rounded-md resize-none"
        rows={1}
        placeholder="Write here and press Enter..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="space-x-2 space-y-2 flex-col items-center justify-center">
        {badges.map((badge, index) => (
          <Badge key={index} variant={"secondary"} className="hover:bg-teal-100 inline-block items-center justify-between bg-teal-100 text-teal-900 rounded-full px-3 py-1 text-xl">
            <span>{badge}</span>
            <button
              className="ml-5 text-teal-900 hover:text-red-600 font-bold text-xl"
              onClick={() => removeBadge(index)}
            >
              &times;
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
