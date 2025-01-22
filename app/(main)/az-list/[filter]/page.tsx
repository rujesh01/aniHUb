type Props = {
  params: Promise<{ filter: string }>;
};

async function page({ params }: Props) {
  const { filter } = await params;
  return <div>{filter}</div>;
}

export default page;
