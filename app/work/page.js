export const metadata = {
    title: "Projects - Timothy Williams",
  };
  
  const sections = [
    {
      title: "Highlights",
      items: [
        "Guardians of the Galaxy",
        "Guardians of the Galaxy: Vol. 2",
        "Pearl",
        "Get Out",
        "Deadpool 2",
      ],
    },
    {
      title: "Upcoming",
      items: ["Mistura"],
    },
    {
      title: "Recent releases",
      items: ["Eye for an Eye", "Locked", "Your Monster", "Mary", "The Bagman"],
    },
    {
      title: "Drama",
      items: [
        "The Swearing Jar",
        "Diablo",
        "Wild Horses",
        "Walking With the Enemy",
        "Southern Gospel",
        "The Butterfly Circus",
        "I’m Not Ashamed",
      ],
    },
    {
      title: "Rom-Com",
      items: ["Finding You", "Gringa", "Intermedium"],
    },
    {
      title: "Action",
      items: ["Fast & Furious Presents: Hobbs & Shaw", "Red Sky", "I.T."],
    },
    {
      title: "Horror",
      items: [
        "Brightburn",
        "We Summon the Darkness",
        "Founders Day",
        "She Came From the Woods",
      ],
    },
    {
      title: "Television",
      items: [
        "Agent Elvis",
        "Creepshow",
        "The Exorcist",
        "Piney: The Lonesome Pine",
        "Richard Lovely (Pilot)",
      ],
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <section className="space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-wide">Projects</h1>
          <div className="h-px w-16 bg-neutral-500" />
        </header>
  
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-wide">
                {section.title}
              </h2>
              <div className="h-px w-10 bg-neutral-700" />
              <ul className="space-y-2 text-neutral-200">
                {section.items.map((item) => (
                  <li key={item} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  