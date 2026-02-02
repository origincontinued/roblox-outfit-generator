export default function OutfitCard({ outfit }) {
  return (
    <div>
      {Object.values(outfit).map((item: any) => (
        <a
          key={item.id}
          href={`https://www.roblox.com/catalog/${item.id}`}
          target="_blank"
        >
          <img src={item.thumbnail?.imageUrl} />
          <p>{item.name}</p>
        </a>
      ))}
    </div>
  );
}
