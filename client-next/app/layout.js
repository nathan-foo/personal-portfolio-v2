import "./globals.css";

export const metadata = {
  title: "Nathan Foo",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
