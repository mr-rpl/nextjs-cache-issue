import { cache } from "react";

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
}

const fetchData = cache(async (id: string) => {
  return new Promise<string>((resolve) => {
    console.log("running expensive function", id);
    setTimeout(() => {
      resolve(id);
    }, 3000);
  });
});

export default async function ({ params }: PageProps) {
  const data = await fetchData(params.slug);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export function generateStaticParams(): PageParams[] {
  return [
    {
      slug: "foo",
    },
    {
      slug: "bar",
    },
  ];
}
