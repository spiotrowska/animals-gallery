import { ImageList } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
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
import { fetchImages } from "./../../store/features/images/fetchImages";
import { useAppDispatch } from "./../../store/hooks";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";

function GalleryInfinityScrollImages() {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);
  const page = useAppSelector(selectImagesPage);
  const rowsPerPage = useAppSelector(selectImagesRowsPerPage);
  const totalCount = useAppSelector(selectImagesTotalCount);
  const spieces = useAppSelector(selectImagesSpieces);
  const prevSpieces = usePrevious(spieces);
  const [imagesArrayMerged, setImagesArrayMerged] = useState<Image[]>(images);
  const [loadMoreData, setLoadMoreData] = useState(true);
  const imageCols = useResponsiveImageCols();

  useEffect(() => {
    setImagesArrayMerged((i) => [...i, ...images]);
  }, [images]);

  useEffect(() => {
    if (prevSpieces && prevSpieces !== spieces) {
      setImagesArrayMerged([]);
    }
  }, [spieces, prevSpieces]);

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
      loader={<CircularProgress />}
      style={{ overflowY: "hidden" }}
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
