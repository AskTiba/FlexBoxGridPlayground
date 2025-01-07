export default function GridPage() {
  const sections = [
    {
      id: "intro",
      title: "Introduction to Grid",
      content: "Lorem ipsum...".repeat(10),
    },
    {
      id: "gridTemplate",
      title: "Grid Template Areas",
      content: "Lorem ipsum...".repeat(15),
    },
    {
      id: "gap",
      title: "Gap and Spacing",
      content: "Lorem ipsum...".repeat(20),
    },
    {
      id: "autoPlacement",
      title: "Auto Placement",
      content: "Lorem ipsum...".repeat(25),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CSS Grid Techniques</h1>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="mb-12">
          <h2 className="text-xl font-bold mb-2">{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}
