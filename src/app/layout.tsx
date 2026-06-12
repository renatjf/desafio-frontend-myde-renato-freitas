import Provider from "@/providers/ReactQueryProvider";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
