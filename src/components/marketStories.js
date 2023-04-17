export default function MarketStories() {
  const stories = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/BSE_-_Bombay_Stock_Exchange_Building.jpg",
    },
  ];
  return (
    <div>
      <h2 className="uppercase font-semibold text-red-500 text-2xl">
        Market stories
      </h2>
      <div className="grid grid-cols-auto-fit gap-10">
        {stories.map((story) => (
          <div key={story.id} className="">
            <img src={story.img} className="rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// gap: 1em;
