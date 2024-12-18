import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nathan Foo",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/static/favicon.png" />
      <SmoothScroll>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
        </SmoothScroll>
    </html>
  );
}
