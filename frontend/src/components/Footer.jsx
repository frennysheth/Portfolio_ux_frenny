export default function Footer() {
  return (
    <footer className="relative bg-[#241E1B] text-[#F2E0D2] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        <div>
          <div className="font-display text-3xl">frenny.</div>
          <div className="font-hand text-xl text-[#F2E0D2]/60 mt-1">est. 2024</div>
        </div>
        <div className="font-serif italic text-[#F2E0D2]/80 text-lg md:text-center">
          “Design less. Listen more. Repeat.”
        </div>
        <div className="md:text-right text-xs uppercase tracking-[0.3em] text-[#F2E0D2]/60">
          © {new Date().getFullYear()} Frenny Sheth · Handmade in Ahmedabad
        </div>
      </div>
    </footer>
  );
}
