export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="container max-w-5xl mx-auto px-4">{children}</div>;
}