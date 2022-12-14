import React from "react";
import {
  CardActions,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  const username = "<>";
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {username}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Kay Dev Homie"
          subheader="September 06, 2023"
        />
        <CardMedia
          component="img"
          height="550px"
          image="https://source.unsplash.com/random/"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;

// import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
// import {
//   Avatar,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Checkbox,
//   IconButton,
//   Typography,
// } from "@mui/material";
// const Post = () => {
//   return (
//     <Card sx={{ margin: 5 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVert />
//           </IconButton>
//         }
//         title="John Doe"
//         subheader="September 14, 2022"
//       />
//       <CardMedia
//         component="img"
//         height="20%"
//         image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <Checkbox
//             icon={<FavoriteBorder />}
//             checkedIcon={<Favorite sx={{ color: "red" }} />}
//           />
//         </IconButton>
//         <IconButton aria-label="share">
//           <Share />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;
