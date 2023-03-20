import TablePagination from "@mui/material/TablePagination";
import {
  selectImagesPage,
  selectImagesTotalCount,
  setPage,
  setRowsPerPage,
} from "../../store/features/images/imagesSlice";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import { selectImagesRowsPerPage } from "./../../store/features/images/imagesSlice";

export default function GalleryPagination() {
  const dispatch = useAppDispatch();
  const page: number = useAppSelector(selectImagesPage);
  const rowsPerPage: number = useAppSelector(selectImagesRowsPerPage);
  const totalCount: number = useAppSelector(selectImagesTotalCount);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  return (
    <TablePagination
      component="div"
      count={Number(totalCount)}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[10, 20, 50]}
    />
  );
}
