export function Flag({ className = "" }: { className?: string }) {
  return (
    <img
      src="/art/flag.svg"
      alt="Флаг Республики Казахстан"
      className={className}
      draggable={false}
    />
  );
}

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <img
      src="/art/emblem.svg"
      alt="Герб Республики Казахстан"
      className={className}
      draggable={false}
    />
  );
}
