export const metadata = {
  title: "The Wild Oasis",
  description: "The wild oasis customer app",
};
import Navigation from "./(components)/Navigation";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Fake footer</footer>
      </body>
    </html>
  );
}
