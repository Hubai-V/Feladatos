import SearchComponent from "../components/SearchComponent";

export default function MovieSearch() {
  const movies = [
    "Star Wars",
    "Matrix",
    "Star Trek",
    "Dune",
    "Inception"
  ];

  return (
    <div>
      <h2>Film kereső</h2>
      <SearchComponent items={movies} />
    </div>
  );
}
