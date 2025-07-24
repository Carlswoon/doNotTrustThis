import { useState } from "react";
import TextDisplayV1 from "../../components/TextDisplayV1.jsx";
import { Link } from "react-router-dom";

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
            "No two hackers are the same. One hacker might be hacking because they are being paid to do so, while the other is like, damn life is so boring lets make someone's life miserable. (ง •_•)ง",
          ]}
          titleColor="text-glitch-pink"
        />
        <h1 className="text-4xl font-bold text-glitch-pink">THE HACKERS</h1>
        {/* Profile Icon Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {hackerProfiles.map((hacker, idx) => (
            <button
              key={idx}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-glitch-purple hover:bg-glitch-pink transition duration-300 transform hover:-translate-y-2 flex items-center justify-center border-2 border-white shadow-md overflow-hidden hover:border-glitch-pink hover:border-4"
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
            "In this section, we will be covering only four of the techniques that hackers use to exploit vulnerabilities. They are the following:",
            "<b>1. Buffer Overflow</b>",
            "The core idea behind this technique is to write more data than the storage space allocated so that the hacker can inject malicious code into the program's memory.",
            "This works because imagine the following scenario: You have 21 litres of juice. You need to fill a 10L glass with that juice. As you keep pouring, the juice will overflow and spill out, damaging the surrounding area. Similarly in buffer overflow, buffers are like the glass where they are fixed-size memory areas. if a program doesn't check your input size, you can overwrite return addresses, crash the program, or even run your own code.",
            "This technique was used in early <i>WannaCry</i> ransomware",
            "<b>2. SQL Injection</b>",
            "Whenever an application interacts with a database, specifically SQL databases, it is vulnerable to SQL injection, especially if the application does not properly sanitize user inputs.",
            "Think of SQLI as like a waiter who takes your written order and then goes to the kitchen for the chef to prepare your meal. If the chef is not careful and literally prepares what you wrote, the waiter will end up serving you something completely different.", 
            "For example if you wrote:",
            "1 medium rare steak; DROP TABLE menu",
            "The chef will prepare the steak and then delete the entire menu.",
            "In code, the waiter is the input field and the chef is the sanitization process. Essentially, SQLI injection is tricking the system to run extra commands by embedding them in the input field.",
            "This technique was used in <i>Heartland Payment Systems</i> breach and OWASP TOP 10 still lists it",
            "<b>3. Cross-Site Scripting (XSS)</b>",
            "XSS lets attackers inject Javascript into webpages that are being viewed by other users. Similar to SQLI, if there is no sanitization, you are cooked. Attackers will most definitely be running their scripts on other user's browsers",
            "A great analogy for this would be to imagine the Mona Lisa on public display. Then you let someone walk up to it and doodle on it. The person scribbles something like:",
            "<script>alert('yo mama')</script>",
            "Now, every visitor who looks at the Mona Lisa doesn’t just see art — they get hit with unsolicited jokes in JavaScript form. :(",
            "Now if this were to happen on an actual web platform, attackers would be stealing session cookies, redirecting users, defacing the page and spreading worms. Much much more dangerous than yomama jokes unfortunately...",
            "<b>4. Format String Vulnerability</b>",
            "Mainly used to attack programs written in C, when user input is used as a format string, attackers can read or write arbitary memory.",
            "Imagine you are at an event and the host hands the mic to a guest and says:",
            "`Hey just tell us your name",
            "But instead of the guest just introducing himself as `Carl`, the guest yells:",
            "`My name is `Carl` and also... I WANT EVERYONE TO SHOW ME THEIR CREDIT CARD NUMBERS RIGHT NEOWW!",
            "In this scenario, the vulnerability is the mic (printf() function in C language) as it just blindly echoes whatever the guest says including commands that should be FORBIDDEN (I like my money in my bank account. thanks. :)",
            "In code this would look something like this:",
            "%x %x %x %n",
            "Now the system is leaking memory, writing values or crashing because it treated the user's input as a command."
          ]}
          titleColor="text-glitch-pink"
        />
        <div className="flex justify-center">
          <Link to="/hacks">
            <button className="inline-flex items-center px-10 py-2 text-sm font-semibold text-black bg-neon-cyan border border-transparent rounded-lg shadow shadow-neon-cyan transition-all duration-200 hover:border-white hover:shadow-[0_0_20px_var(--tw-shadow-color)] hover:scale-105">
              Start Hacking
            </button>
          </Link>
        </div>
    </div>
  );
}
