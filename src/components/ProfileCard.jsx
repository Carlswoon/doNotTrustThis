import { useState } from "react";

export default function ProfileCard({
  cyberSecTech = "Jane Doe",
  guardName = "Doe",
  imgSrc = "/banner home page.png",
  group = "Group Name",
  joined = "Joined January 2019",
  role = "Position/Role",
  location = "City, Country",
  bio = "This is a brief bio of the profile. It can be a short description of the person's role or expertise in cybersecurity.",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex w-[800px] h-[300px] rounded-xl overflow-hidden shadow-lg bg-white"
    >
      {/* Left image panel */}
      <div className="w-1/4 bg-glitch-purple flex items-center justify-center">
        <img
          src={imgSrc}
          alt="profile art"
          className="max-w-[80%] max-h-[80%] object-contain rounded-md shadow-md"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative w-3/4 overflow-hidden">
        {/* White fallback (default) */}
        <div className="absolute inset-0 z-10 p-8 bg-white text-black transition-all duration-500">
          <h1 className="text-3xl font-bold mb-4">{guardName}</h1>
          <p className="text-base text-gray-800 whitespace-pre-line">{bio}</p>
          <span className="absolute bottom-4 right-4 text-sm text-gray-500">
            Mouse over the card for more info
          </span>
        </div>

        {/* Red sliding panel */}
        <div
          className={`absolute inset-0 z-20 p-8 text-white bg-glitch-purple transform transition-transform duration-500 ${
            hovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-3xl font-bold mb-2">{cyberSecTech}</h1>
          <div className="flex justify-between text-sm mb-2">
            <span>{group}</span>
            <span>{joined}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>{role}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
