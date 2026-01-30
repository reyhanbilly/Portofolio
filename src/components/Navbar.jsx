import PillNav from "./PillNav";
import logo from "../assets/react.svg"
import { useState , useEffect } from "react";
export default function Navbar({ sections, activeSection }) {

  const items = sections.map((sec) => ({
  label: sec.charAt(0).toUpperCase() + sec.slice(1),
  href: `#${sec}`,
  }));

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  const handleClick = (e, href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-screen bg-transparent backdrop-blur-lg border-none flex justify-center">
    <PillNav
    logo = {logo}
    items={items}
    activeHref={`#${activeSection}`}
    className="backdrop-blur-lg relative"
    ease="power2.easeOut"
    baseColor="transparent"
    pillColor="#080808ff"
    hoveredPillTextColor="#08efd1ff"
    pillTextColor="#fffefeff"
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    onItemClick={handleClick}

    />
    </nav>
  );
}
