import "@fontsource/sofia/400.css";
import '@/styles/books.css';
import books from "./lib/data/books";
import { Gallery, BookDetails, Search } from "./components";
import { ChangeEvent, useState } from "react";

function App() {
  const [filteredBooks, setBooks] = useState(books);

  const searchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value.toLowerCase();

    setBooks(books.filter(book => (book.name.toLowerCase().includes(query)) || (book.author.toLowerCase().includes(query))));
  };

  return (
    <main className="w-full p-2 md:w-5/6 m-auto flex flex-col justify-center items-center my-10 gap-10">
      <h1 className="bg-gradient-to-t from-yellow-900 via-yellow-600 to-yellow-200 bg-clip-text text-transparent text-4xl md:text-8xl">DÜNYA KLASİKLERİ</h1>
      <p className="text-yellow-100">
        Zengin içerikli Dünya klasiklerini bulmanın hızlı adresi. Aradığınız kitabı bulamıyor iseniz aşağıdaki arama kısmına kitap ismini veya yazarının adını yazmanız size istediğiniz sonucu verecektir. Keyifli okumalar.
      </p>
      <Search onChange={(e) => searchQuery(e)} />
      <Gallery key="gallery">
        {filteredBooks.map((book) => (
          <div className="flex flex-col md:flex-row" data-title={book.name}>
            <BookDetails book={book} />
          </div>
        ))}
      </Gallery>
    </main>
  );
}

export default App;
