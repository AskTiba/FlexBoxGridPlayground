"use client";

import { useState } from "react";

const pages = [
  {
    title: "Layout",
    key: "layout",
    children: [
      {
        title: "Basic Layout",
        key: "basicLayout",
        sections: [
          {
            id: "intro",
            title: "Introduction to Layout",
            content: "This is the introduction to layout.",
          },
          {
            id: "flow",
            title: "Normal Document Flow",
            content: "Explains how normal document flow works.",
          },
        ],
      },
      {
        title: "Responsive Layouts",
        key: "responsiveLayouts",
        sections: [
          {
            id: "mediaQueries",
            title: "Responsive Layouts with Media Queries",
            content: "Learn about media queries for responsiveness.",
          },
          {
            id: "gridLayouts",
            title: "Grid-Based Responsive Layouts",
            content: "Details on grid responsiveness.",
          },
        ],
      },
    ],
  },
  {
    title: "Flexbox",
    key: "flexbox",
    children: [
      {
        title: "Basics of Flexbox",
        key: "flexboxBasics",
        sections: [
          {
            id: "intro",
            title: "Introduction to Flexbox",
            content: "Introduction to the Flexbox layout model.",
          },
          {
            id: "flexDirection",
            title: "Flex Direction",
            content: "Defines the direction of flex items in a container.",
          },
        ],
      },
      {
        title: "Advanced Flexbox",
        key: "flexboxAdvanced",
        sections: [
          {
            id: "justifyContent",
            title: "Justify Content",
            content: "Explains how to align items along the main axis.",
          },
          {
            id: "alignItems",
            title: "Align Items",
            content: "Covers alignment of items along the cross axis.",
          },
        ],
      },
    ],
  },
  {
    title: "Grid",
    key: "grid",
    children: [
      {
        title: "Grid Basics",
        key: "gridBasics",
        sections: [
          {
            id: "intro",
            title: "Introduction to Grid",
            content: "Introduction to the Grid layout system.",
          },
          {
            id: "gridTemplate",
            title: "Grid Template Areas",
            content: "Covers how to define grid templates.",
          },
        ],
      },
      {
        title: "Advanced Grid",
        key: "gridAdvanced",
        sections: [
          {
            id: "gap",
            title: "Gap and Spacing",
            content: "Explains how to manage spacing between grid items.",
          },
          {
            id: "autoPlacement",
            title: "Auto Placement",
            content: "Learn about automatic placement in CSS Grid.",
          },
        ],
      },
    ],
  },
];

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<
    (typeof pages)[0]["children"][0] | null
  >(null);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  // Toggle category expansion
  const toggleExpand = (key: string) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="min-h-screen grid grid-cols-[30%_50%_20%] gap-4 p-4">
      {/* Left Column: Navigation Links */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-4">Reference Links</h2>
        <ul>
          {pages.map((category) => (
            <li key={category.key} className="mb-4">
              {/* Top-level category: clickable arrow + text */}
              <button
                onClick={() => toggleExpand(category.key)}
                className="flex items-center w-full text-left text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <span className="mr-2">
                  {expandedKeys.includes(category.key) ? "▼" : "►"}
                </span>
                <span className="font-semibold">{category.title}</span>
              </button>
              {/* Sub-options */}
              {expandedKeys.includes(category.key) && (
                <ul className="ml-6 mt-2">
                  {category.children.map((child) => (
                    <li key={child.key} className="mb-2">
                      <button
                        onClick={() => setCurrentPage(child)}
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        {child.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Column: Dynamic Content */}
      <div className="p-4  overflow-y-auto">
        {currentPage ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">{currentPage.title}</h1>
            {currentPage.sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-xl font-bold">Select a page from the left</h2>
        )}
      </div>

      {/* Right Column: Sub-Content Links */}
      <div className="-l p-4">
        <h2 className="font-bold text-lg mb-4">Sub-Content Links</h2>
        {currentPage && currentPage.sections.length > 0 ? (
          <ul>
            {currentPage.sections.map((section) => (
              <li key={section.id} className="mb-2">
                <a
                  href={`#${section.id}`}
                  className="text-blue-500 underline hover:text-blue-700"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No sub-content available</p>
        )}
      </div>
    </div>
  );
}
