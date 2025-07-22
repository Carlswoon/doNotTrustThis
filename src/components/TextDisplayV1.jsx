export default function TextDisplayV1({ title, textBlocks, imageSrc, alt }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto pb-16">
      <div className="max-w-xl space-y-5 text-left text-gray-200">
        <h2 className="text-3xl font-bold text-neon-cyan mb-4">{title}</h2>
        {textBlocks.map((paragraph, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
      <div>
        <img
          src={imageSrc}
          alt={alt}
          className="max-h-80 w-auto object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
