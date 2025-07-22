export default function TextDisplayV1({ title, textBlocks }) {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-16 text-left text-gray-200 space-y-4">
      <h2 className="text-3xl font-bold text-neon-cyan mb-4">{title}</h2>
      {textBlocks.map((paragraph, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
}
