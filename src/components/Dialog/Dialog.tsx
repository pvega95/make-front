import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { IMovie } from "../../interface/movies";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: IMovie;
  onClose: () => void;
}

export const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedValue?.title}</DialogTitle>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={selectedValue?.images["Poster Art"].url} />
        </ListItemAvatar>
        <ListItemText
          primary={ 'Release Year: ' + selectedValue?.releaseYear}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
              >
                {selectedValue?.description}
              </Typography>
            </>
          }
        />
      </ListItem>
      </List>
    </Dialog>
  );
};
