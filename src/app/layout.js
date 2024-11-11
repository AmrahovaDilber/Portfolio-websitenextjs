import "@/app/globals.css";

export const metadata = {
  title: "Portfolio Website",
  description:
    "Dilber's portfolio website.Which describes her skills,education,experience and personal work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
