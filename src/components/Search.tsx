import { FormEvent, ChangeEvent } from "react";

function Search({ onChange }: { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    const search_book = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        console.log("book searching...", data);
    }
    
    return (
        <div className="w-full flex justify-center">
            <form id="kitap_ara" onSubmit={(e) => search_book(e)}>
                <input onChange={onChange} className="rounded" type="text" placeholder="Kitap ara..." />
                <button className="rounded" type="submit">Ara</button>
            </form>
        </div>
    );
}

export default Search;