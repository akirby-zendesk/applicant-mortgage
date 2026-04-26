interface ChecklistItem {
  title: string;
  description: string;
}

export function ChecklistGrid({ items }: { items: ChecklistItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,42,74,0.1)] transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold font-bold text-sm mb-4">
            {i + 1}
          </div>
          <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
          <p className="text-sm text-slate leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
