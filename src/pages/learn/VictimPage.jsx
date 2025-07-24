import TextDisplayV1 from "../../components/TextDisplayV1";
import Table from "../../components/Table";
import CommentSection from "../../components/CommenSection.jsx";

const data = [
  {
    name: "Authority Bias",
    definition: "Oh! This person outranks me in the power hierarchy. Imma follow their requestions without questioning their actions or legitimacy."
  },
  {
    name: "Familiarity Heuristic",
    definition: "Mhmm. I think I've seen this before. The colour is a different shade but I guess I will trust it."
  },
  {
    name: "Automation Bias",
    definition: "I love routines! The routine is 9AM I check all emails. Oh an email from an unknown sender? I will stick open this because its second nature to me."
  },
  {
    name: "Inattentional Blindness",
    definition: "An email from z558l492@ad.unsw.edu.au? Oh yeah thats legit. But I wonder if thats an ”L” or a ”1”. Eh I trust it."
  },
  {
    name: "Reciprocity Norm",
    definition: "OMG! This person helped me that one time lifting stuff up into the office. I will return the favour and help them by following their instructions sent in this email."
  },
  {
    name: "Urgency Bias",
    definition: "5 SECONDS REMAINING?!!! OK MAKE A DECISION RIGHT NOW! (but this is going to be a bad one). NO WE NEED A DECISION NOW!"
  },
  {
    name: "Social Proof",
    definition: "Everyone else is doing it. This looks sus as hell. But I guess I will just follow the crowd."
  },
  {
    name: "Confirmation Bias",
    definition: "Well out of the 1/10 dot points this person said, one is 100% accurate. So I guess they are spitting facts right now."
  },
  {
    name: "Sunk Cost Fallacy",
    definition: "I've spent so many months of effort. I can see this as my downfall but I can't sacrifice my time and energy I've spent. I will just keep falling..."
  },
  {
    name: "Overconfidence Bias",
    definition: "Pfttt. Scams? Me getting scammed?! Nah. Never in a million years!"
  }
];

export default function VictimPage() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10 relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center py-12 gap-6">
        <img
          src="/victim.png"
          alt="Cyber guy illustration"
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_0_25px_#FF4BF1]"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-glitch-pink text-center">
          You're the weakest link.
        </h2>
      </div>
      <TextDisplayV1
          title="What is Social Engineering?"
          textBlocks={[
            "You answered the call. You clicked the link. You gave up the keys — no malware needed.",
            "Cybersecurity isn’t just about firewalls, viruses, or code. It’s about people and what they unknowningly give away...",
            "Social engineering is the practice of hacking humans. It's the art of psychological manipulation, where attackers exploit trust, fear, or routine behavior to gain access to sensitive data, systems, or even physical locations."
          ]}
          titleColor="text-glitch-pink"
        />
        <TextDisplayV1
          title="Why does it work?"
          textBlocks={[
            "When was the last time you cried? When was the last time you got angry? When was the last time you were happy?", 
            "As you can see, we humans are emotional creatures. Social engineers use that against us. They exploit our emotions and cognitive vulnerabilities to manipulate us into giving up critical information.",
            "These aren’t code flaws — they’re brain flaws. "
          ]}
          titleColor="text-glitch-pink"
        />
        <Table 
          data={data}
          title="Types of Cognitive Vulnerabilities"
          col1="Vulnerability"
          col2="Thought Process" />
        <TextDisplayV1
          title="What can we do to become the strongest link?"
          textBlocks={[
            "We must first learn the common social engineering attacks.",
            "<b>Phishing</b>",
            "This is basically when there are fake emails that impersonate someone. To avoid this? Double check the sender's email address. If it's unrecognisable to you then it most likely is someone you shouldn't be opening their emails.",
            "<b>Vishing</b>",
            "These are scam phone calls pretending to offer support or pretending to be someone you know. Always ask for verification, and if it feels off, TRUST YOUR INSTINCTS.",
            "Bonus tip: Set a secret safe word with your friends in advance to weed out impersonators.",
            "<b>Smishing</b>",
            "This is any suspicious SMS with malicious links. Straight up, don't click on any links that people send you. Even if you are curious. Unless you have a burner phone ( ‵▽′)ψ",
            "<b>Pretexting</b>",
            "When someone makes up a believable scenario or backstory to gain your trust.",
            "For example:",
            "’Hi I'm your boss's friend’",
            "uhhh think again buddy... EVERYTHING NEEDS VERIFICATION. Don’t be afraid to message your boss directly and check.",
            "<b>Tailgating</b>",
            "VROOM VROOM? No. It isn't that. ＞﹏＜",
            "It’s when someone follows you into a secure area without permission. Next time you scan your ID to enter a door, look behind you. Make sure you're not unknowingly giving someone access they shouldn't have.",
            "<b>Baiting</b>",
            "Just like in video games, they're baiting you. Free USBs? Freebies? Nah. That’s malware waiting to happen. Don’t be greedy or click-happy. Otherwise your bank account might go bai bai. 〒▽〒"
          ]}
          titleColor="text-glitch-pink"
        />
        <div className="w-full max-w-5xl mx-auto px-4">
          <CommentSection />
        </div>
    </div>
  )
}
