export default function FlexboxPage() {
  const sections = [
    {
      id: "intro",
      title: "Introduction to Flexbox",
      content: "Lorem ipsum...".repeat(10),
    },
    {
      id: "flexDirection",
      title: "Flex Direction",
      content: "Lorem ipsum...".repeat(15),
    },
    {
      id: "justifyContent",
      title: "Justify Content",
      content: "Lorem ipsum...".repeat(20),
    },
    {
      id: "alignItems",
      title: "Align Items",
      content: "Lorem ipsum...".repeat(25),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Flexbox Concepts</h1>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="mb-12">
          <h2 className="text-xl font-bold mb-2">{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}
