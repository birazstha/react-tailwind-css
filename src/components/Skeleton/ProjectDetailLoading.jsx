import React from "react";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/material";

export default function ProjectDetailLoading() {
  return (
    <>
      <Box className="mt-4 flex flex-col-reverse lg:flex-row">
        <Box className="flex-1 pr-4  rounded">
          <h1 className="text-4xl mb-1">
            <Skeleton width="100%" />
          </h1>
          <p>
            <Skeleton width="100%" />
          </p>

          <h2 className="mt-4">
            <Skeleton width="10%" />
          </h2>
          <p className="text-justify">
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
          </p>
        </Box>
        <Box className="flex-1 shadow-md h-[400px] 2xl:h-[500px] image">
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Box>
      </Box>
    </>
  );
}
