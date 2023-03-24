import { Box, ImageList, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  selectImages,
  selectImagesPage,
  selectImagesRowsPerPage,
  selectImagesSpieces,
  selectImagesTotalCount,
} from "../../store/features/images/imagesSlice";
import { FetchImagesPayload, Image } from "../../store/features/images/types";
import { useAppSelector } from "../../store/hooks";
import ImageBox from "./../../components/ImageBox/ImageBox";
import usePrevious from "./../../hooks/usePrevious";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";
import { fetchImages } from "./../../store/features/images/fetchImages";
import { selectImagesStatus } from "./../../store/features/images/imagesSlice";
import { useAppDispatch } from "./../../store/hooks";

function GalleryInfinityScrollImages() {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);
  const page = useAppSelector(selectImagesPage);
  const rowsPerPage = useAppSelector(selectImagesRowsPerPage);
  const totalCount = useAppSelector(selectImagesTotalCount);
  const spieces = useAppSelector(selectImagesSpieces);
  const prevSpieces = usePrevious(spieces);
  const [imagesArrayMerged, setImagesArrayMerged] = useState<Image[]>([]);
  const imageCols = useResponsiveImageCols();
  const imagesStatus = useAppSelector(selectImagesStatus);
  const [loadMoreData, setLoadMoreData] = useState(true);

  useEffect(() => {
    setImagesArrayMerged((i) => [...i, ...images]);
  }, [images]);

  useEffect(() => {
    if (prevSpieces && prevSpieces !== spieces) {
      setImagesArrayMerged([]);
    }
  }, [spieces, prevSpieces]);

  useEffect(() => {
    if (imagesStatus === "rejected") setLoadMoreData(false);
  }, [imagesStatus]);

  function fetchMoreImages() {
    if (imagesArrayMerged.length >= totalCount) {
      setLoadMoreData(false);
      return;
    }
    const payload: FetchImagesPayload = {
      spieces: spieces,
      page: page + 1,
      rowsPerPage: rowsPerPage,
    };
    dispatch(fetchImages(payload));
  }

  return (
    <InfiniteScroll
      dataLength={imagesArrayMerged.length * rowsPerPage}
      next={fetchMoreImages}
      hasMore={loadMoreData}
      loader={
        <Box sx={{ textAlign: "center" }}>
          Loading...{" "}
          <LinearProgress
            color="primary"
            sx={{ width: "300px", mb: 3, mx: "auto" }}
          />
        </Box>
      }
    >
      <ImageList cols={imageCols}>
        {imagesArrayMerged.map((image, index) => (
          <ImageBox key={index} image={image} />
        ))}
      </ImageList>
    </InfiniteScroll>
  );
}

export default GalleryInfinityScrollImages;
