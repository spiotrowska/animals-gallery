import { ImageList, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import ImageBox from "../../components/ImageBox/ImageBox";
import { fetchImages } from "../../store/features/images/fetchImages";
import {
  selectImages,
  selectImagesPage,
  selectImagesRowsPerPage,
  selectImagesSpieces,
  selectImagesStatus,
} from "../../store/features/images/imagesSlice";
import { FetchImagesPayload } from "../../store/features/images/types";
import { selectShowPagination } from "./../../store/features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import GalleryFilters from "./GalleryFilters";
import GalleryInfinityScrollImages from "./GalleryInfinityScrollImages";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";
import NoDataBox from "./../../components/NoDataBox/NoDataBox";

function Gallery() {
  const dispatch = useAppDispatch();
  const imagesStatus = useAppSelector(selectImagesStatus);
  const images = useAppSelector(selectImages);
  const spieces = useAppSelector(selectImagesSpieces);
  const page = useAppSelector(selectImagesPage);
  const rowsPerPage = useAppSelector(selectImagesRowsPerPage);
  const showPagination = useAppSelector(selectShowPagination);
  const imageCols = useResponsiveImageCols();

  useEffect(() => {
    const payload: FetchImagesPayload = {
      spieces: spieces,
      page: page,
      rowsPerPage: rowsPerPage,
    };
    if (imagesStatus === "idle") dispatch(fetchImages(payload));
  }, [dispatch, imagesStatus, spieces, page, rowsPerPage]);

  return (
    <div>
      <GalleryFilters />
      {imagesStatus === "rejected" && <NoDataBox />}
      {imagesStatus === "loading" && showPagination && (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      )}
      {imagesStatus === "fulfilled" && !images?.length && <NoDataBox />}
      {imagesStatus === "fulfilled" && showPagination && (
        <ImageList cols={imageCols}>
          {images.map((image) => (
            <ImageBox key={image.id} image={image} />
          ))}
        </ImageList>
      )}
      {!showPagination && <GalleryInfinityScrollImages />}
    </div>
  );
}

export default Gallery;
