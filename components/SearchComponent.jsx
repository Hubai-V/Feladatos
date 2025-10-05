import { useState, useEffect } from "react";

export default function SearchComponent({ items }) {
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const lower = filter.toLowerCase();
    setFilteredItems(items.filter(item => item.toLowerCase().includes(lower)));
  }, [filter, items]);

  return (
    <div>
      <input
        type="text"
        placeholder="Keresés..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="border p-2 mb-3 w-full"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} className="border-b py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
