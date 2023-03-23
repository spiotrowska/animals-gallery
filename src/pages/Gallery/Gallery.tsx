import { ImageList, CircularProgress, Grid } from "@mui/material";
import { useEffect } from "react";
import ImageBox from "../../components/ImageBox/ImageBox";
import GalleryPagination from "../../components/Pagination/GalleryPagination";
import StyledInfoBox from "../../components/UI/StyledInfoBox/StyledInfoBox";
import { fetchImages } from "../../store/features/images/fetchImages";
import {
  selectImages,
  selectImagesPage,
  selectImagesRowsPerPage,
  selectImagesSpieces,
  selectImagesStatus,
} from "../../store/features/images/imagesSlice";
import { FetchImagesPayload } from "../../store/features/images/types";
import useResponsiveImageCols from "./../../hooks/useResponsiveImageCols";
import { selectShowPagination } from "./../../store/features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import GalleryFilters from "./GalleryFilters";
import GalleryInfinityScrollImages from "./GalleryInfinityScrollImages";

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
      {imagesStatus === "rejected" && (
        <StyledInfoBox>
          Something went wrong :( You need to refresh the page.
        </StyledInfoBox>
      )}
      {imagesStatus === "loading" && (
        <Grid textAlign="center">
          <CircularProgress />
        </Grid>
      )}
      {imagesStatus === "fulfilled" && <GalleryFilters />}
      {imagesStatus === "fulfilled" && !images?.length && (
        <StyledInfoBox>No data :(</StyledInfoBox>
      )}
      {imagesStatus === "fulfilled" && showPagination && (
        <>
          <ImageList cols={imageCols}>
            {images.map((image) => (
              <ImageBox key={image.id} image={image} />
            ))}
          </ImageList>
          <GalleryPagination />
        </>
      )}
      {!showPagination && <GalleryInfinityScrollImages />}
    </div>
  );
}

export default Gallery;
