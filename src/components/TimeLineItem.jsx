export default function TimelineItem({ date, title, description, link, secretMessage, image }) {
  return (
    <li className="relative sm:pl-8 mb-12">
      {/* TimeLineDot */}
      <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-neon-cyan shadow-[0_0_8px_var(--tw-shadow-color)] shadow-neon-cyan" />

      {/* Content */}
      <div className="space-y-2">
        <div className="flex flex-col space-y-1">
          <time className="text-sm text-gray-400">{date}</time>
          <h3 className="relative group w-fit text-xl font-semibold text-glitch-purple cursor-pointer transition duration-200 hover:text-glitch-pink hover:scale-105">
            {title}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1.5 bg-terminal-bg text-sm text-gray-200 rounded-lg border border-neon-cyan shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              {secretMessage}
            </span>
          </h3>
        </div>

        {/* Paragraph Text */}
        <div className="text-base text-gray-200 space-y-2">
          {description.split("\n").map((line, idx) => (
            <p key={idx}>{line.trim()}</p>
          ))}
        </div>

        {/* Optional Image */}
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Timeline visual"
              className="w-full max-w-md rounded-lg border border-glitch-purple shadow-lg shadow-glitch-purple"
            />
          </div>
        )}

        {/* Optional Link */}
        {link && (
          <a
            href={link.href}
            className="inline-flex items-center px-4 py-2 mt-2 text-sm font-semibold text-black bg-neon-cyan border border-transparent rounded-lg shadow shadow-neon-cyan transition-all duration-200 hover:border-white hover:shadow-[0_0_20px_var(--tw-shadow-color)] hover:scale-105"
          >
            {link.text}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
      </div>
    </li>
  );
}
