export default function Gallery({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-wrap gap-4 justify-center" id="gallery">
            {children}
        </div>
    );
}