export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="main-height">
        <main className="w-full">{children}</main>
      </div>
    </>
  )
}
