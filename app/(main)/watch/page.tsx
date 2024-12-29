import { getStreamLink } from "@/actions/GetFromApi";
import VideoPlayer from "@/components/costume/VideoPlayer";

const WatchPage = async () => {
  const Data = await getStreamLink();

  const { data, success } = Data;

  return (
    <>
      <h1>this is watch page</h1>
      <div className="border-white border w-screen h-[500px]">
        <VideoPlayer videoData={data} />
      </div>
    </>
  );
};

export default WatchPage;
