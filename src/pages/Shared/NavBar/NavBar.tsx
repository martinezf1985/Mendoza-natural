import { Disclosure } from "@headlessui/react";
import React, { useRef, useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Guidelines", href: "#guidelines" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Disclosure as="nav" className={`border ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-end h-16">
                <div className="hidden sm:block flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-green-500 hover:bg-green-400 hover:text-white focus:bg-green-400 focus:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;



