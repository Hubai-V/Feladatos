import SearchComponent from "../components/SearchComponent";

export default function BookSearch() {
  const books = [
    "A Gyűrűk Ura",
    "Harry Potter",
    "A kis herceg",
    "Az alkimista",
    "Star Wars: A Jedi visszatér"
  ];

  return (
    <div>
      <h2>Könyv kereső</h2>
      <SearchComponent items={books} />
    </div>
  );
}
