import React from "react";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/material";

export default function SkeletonLoading({ count }) {
  const skeletonArray = Array.from({ length: count }, (_, index) => index);
  return (
    <>
      {skeletonArray.map((index) => (
        <Box key={index} className="w-[350px] shadow-lg rounded" mb={2}>
          <Skeleton variant="rectangular" width={350} height={220} />
          <Box className="flex justify-center items-center flex-col p-2">
            <Skeleton width="50%" height={30} />
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
          </Box>
        </Box>
      ))}
    </>
  );
}
