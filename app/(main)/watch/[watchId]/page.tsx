import { getStreamLink } from "@/actions/GetFromApi";
import VideoPlayer from "@/components/costume/VideoPlayer";


const WatchPage = async () => {
  const Data = await getStreamLink();

  const { data, success } = Data;

  return (
    <>
   this is watch page
    </>
  );
};

export default WatchPage;
