interface InfoItem {
  label: string;
  value: React.ReactNode;
  href?: string;
}

export default function InfoList({ items }: { items: InfoItem[] }) {
  return (
    <dl className="divide-y border-y">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <dt className="eyebrow sm:pt-1">{item.label}</dt>
          <dd className="break-words text-sm text-text-primary sm:text-base">
            {item.href ? (
              <a
                href={item.href}
                className="link"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
