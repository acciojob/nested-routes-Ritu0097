// Topic.js
import React from "react";
import { useParams } from "react-router-dom";

export default function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <p>{topicId}</p>
    </div>
  );
}
