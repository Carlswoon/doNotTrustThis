export default function Table({ data, title, col1, col2 }) {
  return (
    <div className="max-w-5xl mx-auto px-4 overflow-x-auto mb-16">
      <h3 className="text-3xl font-bold text-glitch-pink mb-4">
        {title}
      </h3>
      <table className="min-w-full border border-gray-600 text-left text-gray-200 text-sm md:text-base">
        <thead className="bg-glitch-purple text-white">
          <tr>
            <th className="py-3 px-4 border-b border-gray-600">{col1}</th>
            <th className="py-3 px-4 border-b border-gray-600">{col2}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="hover:bg-[#1d2b3a] transition-colors duration-150"
            >
              <td className="py-3 px-4 border-b border-gray-700 font-semibold text-neon-cyan">
                {item.name}
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                {item.definition}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
