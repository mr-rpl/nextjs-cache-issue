import { PropsWithChildren } from "react";

interface LayoutParams {
  category: string;
}

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function generateStaticParams(): LayoutParams[] {
  return [
    {
      category: "one",
    },
    {
      category: "two",
    },
  ];
}
