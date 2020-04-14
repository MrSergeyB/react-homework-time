import React from "react";
import Video from "./Video";

function VideoList(props) {
  return props.list.map((item, id) => (
    <Video key={id} url={item.url} date={item.date} />
  ));
}

export default VideoList;
