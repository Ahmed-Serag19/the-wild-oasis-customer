import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased bg-primary-950 relative min-h-screen text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="px-8 flex-1 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <footer className="flex justify-center items-center h-20 bg-primary-950 border-t border-primary-900">
          Fake footer
        </footer>
      </body>
    </html>
  );
}
