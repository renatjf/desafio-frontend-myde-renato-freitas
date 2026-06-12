import Provider from "@/providers/ReactQueryProvider";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>
          <div suppressHydrationWarning>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
