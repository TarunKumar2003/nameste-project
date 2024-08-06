import { original } from "@reduxjs/toolkit";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}

export default MainContainer;
