import { useState } from "react";
import ProfileCard from "../../components/ProfileCard.jsx";
import TextDisplayV1 from "../../components/TextDisplayV1.jsx";

const profiles = [
  {
    cyberSecTech: "Firewall",
    guardName: "Bouncer (a.k.a Firewall)",
    imgSrc: "/bouncer.png",
    group: "Cyber Ops",
    joined: "Joined July 1980",
    role: "CTF Lead",
    location: "Sydney, Australia",
    bio: "Only lets legit traffic into the network. You are too drunk? You act rowdy? You're gonna disrupt the current network? Nah fam can’t let you in."
  },
  {
    cyberSecTech: "Anti-Virus",
    guardName: "The Secret Service Agent (a.k.a Anti-Virus)",
    imgSrc: "/anti-virus.png",
    group: "Norton Security",
    joined: "Joined May 1982",
    role: "Digital watchdog",
    location: "Arizona, USA",
    bio: "Protects their host directly. As soon as a threat is detected, they intervene immediately and grant protection."
  },
  {
    cyberSecTech: "IDS (Intrusion Detection System)",
    guardName: "The Surveillance Guy in the Van (a.k.a Intrusion Detection System)",
    imgSrc: "/ids.png",
    group: "Radar Surveillance",
    joined: "Joined May 2021",
    role: "Scout Lookout",
    location: "Shanghai, China",
    bio: "Catches unusual traffic and alerts you when someone's acting sus. Eyes glued to the screen with alert scripts ready to go."
  },
  {
    cyberSecTech: "Penetration Tester",
    guardName: "Undercover Agent (a.k.a Penetration Tester)",
    imgSrc: "/penetration-tester.png",
    group: "Threat Intel",
    joined: "Joined June 2024",
    role: "Packet Sniffer",
    location: "Canberra, Australia",
    bio: "Pretends to be an attacker to test your defenses. They take the role of a hacker to find your most vulnerable points. \n WARNING: This system is going to self destruct in 5 seconds... 4... 3... 2... 1... Just kidding..?"
  },
  {
    cyberSecTech: "MFA (Multi-Factor Authentication)",
    guardName: "The OG Bodyguard (a.k.a Multi-Factor Authentication)",
    imgSrc: "/OGbodyguard.png",
    group: "OG Corporation",
    joined: "Joined since the dawn of time",
    role: "The Original",
    location: "Earth, The Solar System",
    bio: "No one is getting in without showing their ID, scanning their fingerprint, answering the name of their first pet, confirming the verification on their phone, and then doing a backflip. If you can’t do all that, you’re not HIM. fullstop. \nERROR: DENIED ACCESS!"
    },
];

export default function WhatIsCybersecurity() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10 flex flex-col items-center">
       <div className="w-full flex flex-col items-center justify-center py-12 gap-6">
        <img
          src="/whatiscybersec.png"
          alt="Cyber guy illustration"
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_0_25px_#00FFF7]"
        />
        <h1 className="text-6xl font-bold text-neon-cyan mb-4">What is Cybersecurity?</h1>
      </div>
      <TextDisplayV1
        title="Cybersecurity as an analogy"
        textBlocks={[
          "Think of cybersecurity as the bouncer at a club. Doesn’t matter how much aura you radiate. If you look sus, you’re not getting into VIP. And in the digital world? VIP = your private data, and hackers are just trying to snatch it off the snack table.",
          "Just like there are different types of bodyguards in real life, cybersecurity involves a mix of strategies and tools to protect computers, networks, and sensitive data from digital attacks. But here’s the catch: just because there’s a bouncer doesn’t mean you’re invincible. If you wander outside the club (like oversharing online), you’re exposed. Even the best security setup can’t save you if you're giving your personal information like free candy. That’s how you get doxxed.",
          "Essentially, good security always starts with the user first. If you’re not careful, no amount of tech can save you. Let's explore some of the different types of security features you may encounter in the cybersecurity world.",
        ]}
      />

      <h1 className="text-4xl font-bold text-neon-cyan">THE BODYGUARDS</h1>
      <div className="flex items-center justify-center gap-4 mt-4">
       <button
          onClick={prevCard}
          className="text-4xl text-glitch-pink hover:text-neon-cyan transition duration-300"
        >
          &lt;
        </button>

        <ProfileCard {...profiles[currentIndex]} />

        <button
          onClick={nextCard}
          className="text-4xl text-glitch-pink hover:text-neon-cyan transition duration-300"
        >
          &gt;
        </button>
      </div>
        <p className="mt-4 text-glitch-pink text-sm mb-8">
          {currentIndex + 1} / {profiles.length}
        </p>
        <TextDisplayV1
          title="Types of Cybersecurity"
          textBlocks={[
            "Now that we’ve met the bodyguards, let’s break down what areas of the club they protect. Cybersecurity isn’t one-size-fits-all, it comes in different flavors for different threats. Whether it’s locking down the dancefloor, checking IDs at the door, or guarding the VIP lounge, each area needs a different kind of protection.",
            "<b>1. Network Security</b>",
            "As the name suggests, this is all about securing computer networks from unwanted access and threats.",
            "<b>2. Application Security</b>",
            "This is moreso related to software applications and ensuring there are no exploitable vulnerabilities in the software.",
            "<b>3. Information Security</b>",
            "Otherwise known as data security, this is about protecting sensitive data from unauthorized access, and ensuring its integrity.",
            "<b>4. Endpoint Security</b>",
            "An endpoint is any device that has access to a network. Endpoint security is about protecting these devices from threats, such as malware and unauthorized access.",
            "<b>5. Cloud Security</b>",
            "Primarily focused on defending cloud based storage and applications from threats. This is becoming increasingly important as more businesses prefer this option to store their data.",
            "<b>6. Operational Security</b>",
            "This is all about human error and implementations to practice to protect sensitive data from being exposed to the internet. This includes things like password management, data encryption, and access controls.",
            "<b>7. Internet of Things (IoT) Security</b>",
            "Anything that is connected to the internet is considered an IoT device and this is about ensuring that these devices are secure from hackers and do not become entry points for attacks."
          ]}
        />
        <TextDisplayV1
          title="Why Cybersecurity matters"
          textBlocks={[
            "Imagine if the world didn't have guards around. No protection. No security. Just pure chaos. That's what the digital world would be like without cybersecurity. It's not just about ensuring people don't do illegal stuff online, but its also about protecting your own personal information because imagine if your sweet bank account just plummets to debt. yeah... not fun.",
            "Especially in this day and age where everything is being digitized and attacks are becoming more sophisticated, cybersecurity is the silent bodyguard you never knew you needed",
            "So next time you are online, just remember the bouncer analogy - if you’re the one letting shady people in (leaking personal info), no amount of bodyguards can save the party."
          ]}
        />
    </div>
  );
}
