type Props = {
  params: Promise<{ animeId: string }>;
};

const InfoPage = async ({ params }: Props) => {
  const { animeId } = await params;

  return (
    <div>
      <h1>info page   {animeId}</h1>
    </div>
  );
};

export default InfoPage;
