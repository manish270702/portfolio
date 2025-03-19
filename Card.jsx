import React, { useEffect, useState, useRef } from 'react';

function Card() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const itemRefs = useRef([]);

  const data = [
    {
      name: "lucid motors",
      year: 2023,
      image: "https://cynthiaugwu.com/images/cover/lucid-motors.webp"
    },
    {
      name: "baron capital",
      year: 2023,
      image: "https://cynthiaugwu.com/images/cover/baron-capital.webp"
    },
    {
      name: "nfl",
      year: 2024,
      image: "https://cynthiaugwu.com/images/cover/nfl.webp"
    },
    {
      name: "place new",
      year: 2024,
      image: "https://cynthiaugwu.com/images/cover/placenew.webp"
    },
    {
      name: "somos",
      year: 2023,
      image: "https://cynthiaugwu.com/images/cover/somos.webp"
    },
  ];

  useEffect(() => {
    const handleCardMove = (e) => {
      if (hoveredItem !== null && itemRefs.current[hoveredItem]) {
        const parentRect = itemRefs.current[hoveredItem].getBoundingClientRect();
        const xOffset = e.clientX - parentRect.left;
        const yOffset = e.clientY - parentRect.top;

        setCardPosition({ x: xOffset, y: yOffset });
      }
    };

    document.addEventListener('mousemove', handleCardMove);

    return () => {
      document.removeEventListener('mousemove', handleCardMove);
    };
  }, [hoveredItem]);

  return (
    <div className="text-white">
      {data.map((item, index) => (
        <div
          className="relative hover:shadow-3xl shadow-amber-50 parent md:py-32 md:w-8/9 group flex justify-between md:h-48 h-24 border-t border-px  items-center"
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h2 className="text-[6.5vw] text-zinc-400 select-none group-hover:text-zinc-800 group-hover:ml-20 duration-700 font-semibold uppercase">
            {item.name}
          </h2>
          <h2 className="mr-8 select-none">{item.year}</h2>

          <img
            className={`rounded-2xl absolute h-full ${
              hoveredItem === index ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
            }`}
            style={{
              top: `${cardPosition.y-100}px`,
              left: `${cardPosition.x-110}px`,
              pointerEvents: "none",
              zIndex: 10,
            }}
            src={item.image}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;