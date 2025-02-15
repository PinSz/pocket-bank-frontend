import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";
import LoaderModal from "@/components/LoaderModal";

export const metadata = {
  title: "Pocket Bank",
  description: "Banking app built with Next.js and MUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
          <LoaderModal />
        </ThemeRegistry>
      </body>
    </html>
  );
}
