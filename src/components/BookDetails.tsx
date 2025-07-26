import { BooksType } from "@/lib/data";

function BookDetails({ book }: { book: BooksType }) {
    return (
        <div className="rounded shadow-lg p-1 w-full md:w-96 h-96 overflow-scroll outline-4 outline-black bg-yellow-100 flex justify-center items-start">
            <img width={96} height={96} src={`/img/book/${book.image}`} alt={book.name} />
            <div className="flex flex-col gap-2">
                <div className="p-2">
                    <BookDetail title="Eser:" text={book.name} />
                    <BookDetail title="Yazar:" text={book.author} />
                    <BookDetail title="Sayfa Sayısı:" text={book.page.toString()} />
                </div>
                <BookDetail title="" text={book.subject} />
            </div>
        </div>
    );
}

export function BookDetail({ title, text }: { title: string; text: string; }) {
    return (
        <div className="flex gap-4">
            <div className="font-bold">{title}</div>
            <div>{text}</div>
        </div>
    );
}

export default BookDetails;