interface Props {
  children: React.ReactNode;
}

export function TableHeader({ children }: Props) {
  return (
    <thead className={`bg-blue-light w-full sticky top-0`}>
      <tr>{children}</tr>
    </thead>
  );
}
