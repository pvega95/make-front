import { FC, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IMovie } from "../../interface/movies";
import { ECCard } from "./styles";
import { SimpleDialog } from "../Dialog/Dialog";

interface ECCardProps {
  movie: IMovie;
}

export const CardCustom: FC<any> = ({ movie }: ECCardProps) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);

  const handleClickOpen = (movie: IMovie) => {
    setSelectedValue(movie)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ECCard
        sx={{ maxWidth: 345 }}
        onClick={() => {
          handleClickOpen(movie);
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={movie.images["Poster Art"].url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </ECCard>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};
