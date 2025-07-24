import TimelineItem from "../../components/TimeLineItem";
import CommentSection from "../../components/CommenSection.jsx";

const timelineData = [
  // link: { text: "Learn more", href: "#" },
  {
    date: "1940-1960",
    title: "01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100",
    description:
      "The era where computing began computing.\n Between 1943 and 1945 in the University of Pennsylvania, the Electronic Numerical Integrator and Computer (ENIAC) came to life which was the first ever fully electronic, general-purpose computer. It could be programmed to solve problems like weather predictions and ballistics... but there was a catch: \n It consumed ~150 kilowatts of power! This is so much energy that it can keep 100–150 modern homes lit! \n Around the same time, the Colossus was developed in Britain which was the world’s first programmable digital computer. Unlike ENIAC, Colossus was built with one goal: to crack Nazi Germany’s Lorenz cipher. It played a vital role in helping the Allies shorten World War II. \n And as the decade closed, a huge milestone dropped: ARPANET was born in 1969. Known as the prototype of the modern internet, it was the first operational packet-switching network. The first message ever sent was just “LO”. They tried typing “LOGIN”, but ARPANET decided to crashout. Very unfortunate. :(",
    secretMessage: "Binary?",
    image: "/timeline1.png",
  },
  {
    date: "1970-1980",
    title: "Wkh Ulvh ri Kdfnlqj & Iluvw Wkuhdwv",
    description:
      "In 1971, phone phreaking exploded! This was a technique that let people make free long-distance calls. Shame on these scammers! The reason it blew up? A toy whistle from Cap’n Crunch cereal boxes that, when blown, produced a perfect 2600 Hz tone which coincidentally was the same frequency AT&T used to signal that a phone line was idle. This discovery let phreakers trick the system and connect calls for free. Thanks Captain Crunch (a.k.a John Draper) for popularizing this exploit! \n Later in 1983, the film WarGames dropped, introducing the idea of computer hacking to mainstream pop culture. The movie terrified the U.S. government so much that it directly inspired the Computer Fraud and Abuse Act (CFAA) in 1986 — the first major U.S. law to criminalize unauthorized access to computer systems. \n But the real wake-up call came in 1988 with the release of the Morris Worm. Intended as a “harmless” experiment to measure the size of the internet, it accidentally reinfected machines endlessly, slowing them down and eventually causing full system crashes — they were cooked. Over 6,000 machines (out of ~60,000 total) were infected. That’s >10% of the entire internet at the time causing around $100,000 to $10 million in damages. Its creator, Robert Tappan Morris, a 23-year-old Cornell grad student, became the first person convicted under the CFAA. His sentence? 3 years of probation, 400 hours of community service, and a $10,050 fine. No jail, but a clear message: cybersecurity ain’t just for decoration anymore.",
    secretMessage: "Caesar cipher shift +3",
    image: "/timeline2.png",
  },
  {
    date: "1990's",
    title: "RMGVIMVG YLLN, GSIVZ YLLN",
    description:
      "The 1990s marked the true boom of personal computing. More users were getting computers at home and in offices, and with them came new digital threats. Viruses like Jerusalem, Cascade, and Michelangelo started making headlines, pushing computer security into the spotlight. This was also the era when antivirus software became mainstream. Early tools like McAfee VirusScan and Norton Antivirus offered basic protection by scanning files for known virus signatures. \n At the same time, the web was rapidly evolving. The introduction of JavaScript brought interactivity to websites, but it also introduced new risks. Browser-based attacks, such as malicious pop-ups and cross-site scripting, began to emerge. \n In 1999, the Melissa virus caused widespread disruption. It was a macro-based malware that spread through Microsoft Word documents attached to emails. Once opened, it hijacked the user’s Outlook and sent itself to the first 50 contacts in their address book. The typical subject line read: \n ”Important Message from [username]” \n And the body text said: \n ”Here is the document you asked for. Don’t show anyone else.”\n This simple but effective use of social engineering resulted in over one million infections and an estimated $80 million in damages. Companies like Microsoft and Intel were forced to shut down their mail servers temporarily. The creator of this virus, David L. Smith, later claimed he named the virus after a stripper he met in Florida, a reminder that bad judgment mixed with code can have serious consequences.",
    secretMessage: "Atbash",
    image: "/timeline3.png",
  },
  {
    date: "2000's",
    title: "Dpvos; Rmhorrrtoh Smf Vunrt Vto,r ",
    description:
      "During this era, the world was hit by the ILOVEYOU worm, a social engineering masterclass disguised as a love letter. Created by a student in the Philippines, the worm arrived via email with the subject line ’ILOVEYOU’ and an attachment named ’LOVE-LETTER-FOR-YOU.txt.vbs.’ Many users didn’t notice the suspicious file extension and assumed it was a harmless message from a secret admirer. \n But once opened, it was game over. The worm overwrote files, spread itself to all Outlook contacts, and installed a password-stealing Trojan. It caused an estimated $10 billion in damage, impacting government agencies, corporations, and millions of everyday users. \n Social engineering didn’t stop there. In 2005, the ChoicePoint data breach became one of the earliest large-scale identity theft cases. By tricking employees through social engineering, attackers gained access to personal records of over 163,000 individuals — proving that security breaches don’t always require technical hacks. \n Then in 2007, the first-ever nation-scale cyberattack unfolded in Estonia. As one of the most digitally advanced countries at the time, Estonia was heavily reliant on online infrastructure which made it vulnerable. After political tensions with Russia, the country was hit with sustained DDoS attacks targeting government websites, banks, news outlets, and emergency services. Systems were overwhelmed for weeks, leaving citizens unable to vote, bank, or even access emergency info. Estonia was digitally paralyzed. \n From this era, one thing became clear: \n The biggest vulnerability in cybersecurity isn’t the machine - it’s the human.",
    secretMessage: "qwerty",
    image: "/timeline4.png",
  },
  {
    date: "Now",
    title: "Pumasok 今天의 디지털세계",
    description:
      "The world now is fully online. 2010's marked the rise of cyber warefare and ransomware-as-a-business. The Stuxnet worm became the first malware to cuase physical damage, targeting Iranian nuclear centrifuges. By the mid-2010s, attacks like the Sony Hack (by North Korea) and the WannaCry ransomware outbreak (using leaked NSA tools) showed just how powerful and global digital threats had become. \n Then later, in 2017, the Equifax breach leaked personal data from over 147 million people due to a single unpatched vulnerability. By 2023, attackers and defenders alike began adopting AI, generating malicious code, automating phishing, and scaling attacks at unprecedented speed. Now in 2025, we have an entered an era of: \n DO NOT TRUST THIS.",
    secretMessage: "🇰🇷🇨🇳🇵🇭",
    image: "/timeline5.png",
  },
];

export default function HistoryOfCyberSecurity() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10">
      {/* Image banner + title */}
      <div className="w-full flex flex-col items-center justify-center py-12 gap-6">
        <img
          src="/cybersechistory.png"
          alt="Cyber guy illustration"
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_0_25px_#6C1AFF]"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-glitch-purple text-center">
          History of CyberSecurity
        </h2>
      </div>

      {/* Timeline section */}
      <section className="px-6 py-8 max-w-5xl mx-auto">
        <ol className="relative border-s-2 border-neon-cyan">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </ol>
      </section>
      <div className="w-full max-w-5xl mx-auto px-4">
        <CommentSection />
      </div>
    </div>
  );
}
