export default function LayoutPage() {
  const sections = [
    {
      id: "intro",
      title: "Introduction to Layout",
      content: "Lorem ipsum...".repeat(10),
    },
    {
      id: "flow",
      title: "Normal Document Flow",
      content: "Lorem ipsum...".repeat(15),
    },
    {
      id: "positioning",
      title: "Positioning Basics",
      content: "Lorem ipsum...".repeat(20),
    },
    {
      id: "mediaQueries",
      title: "Responsive Layouts with Media Queries",
      content: "Lorem ipsum...".repeat(25),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Layout Techniques</h1>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="mb-12">
          <h2 className="text-xl font-bold mb-2">{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}
