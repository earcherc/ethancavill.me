export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <div className="prose prose-slate mx-auto min-h-screen mt-32">{children}</div>;
}
