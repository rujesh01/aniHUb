import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { ThemeProvider } from "@/components/provider/theme-provider";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-Roboto",
});

export const metadata: Metadata = {
  title: {
    template: "AniHub - %s",
    default: "AniHub",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(" ",font.variable)}>
        <ReactQueryProvider>



          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>



          
        </ReactQueryProvider>
      </body>
    </html>
  );
}
