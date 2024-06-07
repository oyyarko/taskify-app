export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-16 max-sm:p-5 dark:bg-slate-800 bg-stone-50 flex flex-wrap justify-center items-center">
      {children}
    </div>
  );
}
