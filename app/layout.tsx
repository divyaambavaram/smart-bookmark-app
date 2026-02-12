export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ fontFamily: 'Arial', padding: '20px' }}>
        <h1>Smart Bookmark App</h1>
        {children}
      </body>
    </html>
  );
}