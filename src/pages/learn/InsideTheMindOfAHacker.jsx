import { useState } from "react";
import TextDisplayV1 from "../../components/TextDisplayV1.jsx";

const hackerProfiles = [
  {
    name: "The Mercenary",
    age: "28",
    occupation: "Cyberthief",
    hobby: "Crypto Mining",
    description:
      "Money. Money. MONEY! They are driven by financial gain. Deploys ransomware, steals credit card info, and hijacks resources for cryptomining. Will exploit anything for a payout.",
    image: "/hacker1.png",
  },
  {
    name: "The Explorer",
    age: "9",
    occupation: "Script Kiddie / CTFer",
    hobby: "Breaking into things for fun",
    description:
      "Fueled by curiosity and ego. Hacks for challenge or status. From basic recon to solving CTFs, they see systems as puzzles to crack.",
    image: "/hacker2.png",
  },
  {
    name: "The Idealist",
    age: "35",
    occupation: "Hacktivist",
    hobby: "Leaking corruption",
    description:
      "Believes they’re fighting for justice. Hacks to promote political or social causes. Exposes secrets, embarrasses governments, sparks movements.",
    image: "/hacker3.png",
  },
  {
    name: "The Insider",
    age: "40",
    occupation: "Corporate Mole",
    hobby: "Harvesting secrets",
    description:
      "Hacks for corporate advantage. Targets competitors, steals intellectual property, and manipulates insider knowledge to shift the market.",
    image: "/hacker4.png",
  },
  {
    name: "The Saboteur",
    age: "Unknown",
    occupation: "Malware Engineer",
    hobby: "Destroying systems",
    description:
      "Wants to watch the world burn. Deploys destructive malware like NotPetya. Doesn’t care about money — only chaos.",
    image: "/hacker5.png",
  },
];

export default function InsideTheMindOfAHacker() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10 relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-6">
        <img
          src="/brain.png"
          alt="brain illustration"
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_0_25px_#FF4BF1]"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-glitch-pink text-center">
          Inside the Mind of a Hacker
        </h2>
        <TextDisplayV1
          title="What makes someone want to break into a system?"
          textBlocks={[
            "No two hackers are the same. One hacker might be hacking because they are being paid to do so, while the other is like damn life is so boring lets make someone's life miserable.",
          ]}
          titleColor="text-glitch-pink"
        />
        <h1 className="text-4xl font-bold text-glitch-pink">THE HACKERS</h1>
        {/* Profile Icon Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {hackerProfiles.map((hacker, idx) => (
            <button
              key={idx}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-glitch-purple hover:bg-glitch-pink transition duration-300 transform hover:-translate-y-2 flex items-center justify-center border-2 border-white shadow-md overflow-hidden"
              onClick={() => setSelected(hacker)}
            >
              <img
                src={hacker.image}
                alt={hacker.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Center Modal */}
      {selected && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelected(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-terminal-bg border-2 border-glitch-pink rounded-xl shadow-xl max-w-4xl w-full mx-6 p-6 md:p-10 flex gap-6">
              <button
                className="absolute top-4 right-4 text-glitch-pink font-bold text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-32 h-32 border-4 border-glitch-pink mb-4 object-cover"
                />
                <p className="text-sm text-gray-300 mb-1">Age: {selected.age}</p>
                <p className="text-sm text-gray-300 mb-1">Occupation: {selected.occupation}</p>
                <p className="text-sm text-gray-300">Hobby: {selected.hobby}</p>
              </div>
              <div className="w-2/3 text-left">
                <h3 className="text-3xl font-bold text-glitch-pink mb-4">{selected.name}</h3>
                <p className="text-base text-gray-100 leading-relaxed">{selected.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
      <TextDisplayV1
          title="The Hacker's toolbox: Common Exploits"
          textBlocks={[
            "CrossScripting",
          ]}
          titleColor="text-glitch-pink"
        />
    </div>
  );
}
