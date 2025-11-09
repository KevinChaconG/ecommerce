
export default function TercerLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>El tercer layout</h1>
      {children}
    </div>
  );
}