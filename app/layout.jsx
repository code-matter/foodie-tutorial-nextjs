import MainHeader from "@/components/main-header/MainHeader";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Next Foodie App",
  description: "Delicious meals, shared by a foodies community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
