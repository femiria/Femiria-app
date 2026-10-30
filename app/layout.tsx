import './globals.css';

export const metadata = {
  title: 'Femiria-app',
  description: 'Built on mobile with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
