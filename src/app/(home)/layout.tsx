import NavBar from "@/components/ui/navbar";
import Navbar from "@/components/ui/navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Sticky Navbar */}
            <Navbar />
            {/* Content */}
            <main className="flex-1 p-6 bg-secondary md:p-12">{children}</main>
            {/* Footer */}
            {/*<Footer />*/}
        </div>
    );
}