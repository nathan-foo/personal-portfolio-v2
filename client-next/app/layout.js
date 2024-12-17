import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Nathan Foo",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
