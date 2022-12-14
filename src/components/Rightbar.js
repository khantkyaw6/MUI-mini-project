import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  // const userImg = Math.floor(Math.random() * 100) + 1;
  // const imgLink = `https://randomuser.me/api/portraits/men/${userImg}.jpg`;
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box width={350} position="fixed">
        <Typography mb={2} mt={2} variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Luffy"
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Avatar
            alt="Killua"
            src="https://randomuser.me/api/portraits/men/2.jpg"
          />
          <Avatar alt="Aiden" src="" />
          <Avatar
            alt="Diana"
            src="https://randomuser.me/api/portraits/men/4.jpg"
          />
          <Avatar
            alt="Aiden"
            src="https://randomuser.me/api/portraits/men/3.jpg"
          />
          <Avatar
            alt="Diana"
            src="https://randomuser.me/api/portraits/men/23.jpg"
          />
          <Avatar
            alt="Aiden"
            src="https://randomuser.me/api/portraits/men/3.jpg"
          />
          <Avatar
            alt="Diana"
            src="https://randomuser.me/api/portraits/men/4.jpg"
          />
          <Avatar
            alt="Zorro"
            src="https://randomuser.me/api/portraits/men/5.jpg"
          />
          <Avatar
            alt="Luffy"
            src="https://randomuser.me/api/portraits/men/6.jpg"
          />
          <Avatar
            alt="Tina"
            src="https://randomuser.me/api/portraits/men/7.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList gap={5} cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https:/material-ui.com/static/images/image-list/breakfast.jpg"
              alt="breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https:/material-ui.com/static/images/image-list/burgers.jpg"
              alt="camera"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https:/material-ui.com/static/images/image-list/camera.jpg"
              alt="camera"
            />
          </ImageListItem>
        </ImageList>
        <Typography mt={2} variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https:/material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https:/material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https:/material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

// import {
//   Avatar,
//   AvatarGroup,
//   Box,
//   Divider,
//   ImageList,
//   ImageListItem,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import React from "react";

// const Rightbar = () => {
//   return (
//     <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
//       <Box position="fixed" width={300}>
//         <Typography variant="h6" fontWeight={100}>
//           Online Friends
//         </Typography>
//         <AvatarGroup max={7}>
//           <Avatar
//             alt="Remy Sharp"
//             src="https://material-ui.com/static/images/avatar/1.jpg"
//           />
//           <Avatar
//             alt="Travis Howard"
//             src="https://material-ui.com/static/images/avatar/2.jpg"
//           />
//           <Avatar
//             alt="Cindy Baker"
//             src="https://material-ui.com/static/images/avatar/3.jpg"
//           />
//           <Avatar alt="Agnes Walker" src="" />
//           <Avatar
//             alt="Trevor Henderson"
//             src="https://material-ui.com/static/images/avatar/6.jpg"
//           />
//           <Avatar
//             alt="Trevor Henderson"
//             src="https://material-ui.com/static/images/avatar/7.jpg"
//           />
//           <Avatar
//             alt="Trevor Henderson"
//             src="https://material-ui.com/static/images/avatar/8.jpg"
//           />
//           <Avatar
//             alt="Trevor Henderson"
//             src="https://material-ui.com/static/images/avatar/7.jpg"
//           />
//           <Avatar
//             alt="Trevor Henderson"
//             src="https://material-ui.com/static/images/avatar/8.jpg"
//           />
//         </AvatarGroup>
//         <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
//           Latest Photos
//         </Typography>
//         <ImageList cols={3} rowHeight={100} gap={5}>
//           <ImageListItem>
//             <img
//               src="https://material-ui.com/static/images/image-list/breakfast.jpg"
//               alt=""
//             />
//           </ImageListItem>
//           <ImageListItem>
//             <img
//               src="https://material-ui.com/static/images/image-list/burgers.jpg"
//               alt=""
//             />
//           </ImageListItem>
//           <ImageListItem>
//             <img
//               src="https://material-ui.com/static/images/image-list/camera.jpg"
//               alt=""
//             />
//           </ImageListItem>
//         </ImageList>
//         <Typography variant="h6" fontWeight={100} mt={2}>
//           Latest Conversations
//         </Typography>
//         <List
//           sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
//         >
//           <ListItem alignItems="flex-start">
//             <ListItemAvatar>
//               <Avatar
//                 alt="Remy Sharp"
//                 src="https://material-ui.com/static/images/avatar/3.jpg"
//               />
//             </ListItemAvatar>
//             <ListItemText
//               primary="Brunch this weekend?"
//               secondary={
//                 <React.Fragment>
//                   <Typography
//                     sx={{ display: "inline" }}
//                     component="span"
//                     variant="body2"
//                     color="text.primary"
//                   >
//                     Ali Connors
//                   </Typography>
//                   {" — I'll be in your neighborhood doing errands this…"}
//                 </React.Fragment>
//               }
//             />
//           </ListItem>
//           <Divider variant="inset" component="li" />
//           <ListItem alignItems="flex-start">
//             <ListItemAvatar>
//               <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//             </ListItemAvatar>
//             <ListItemText
//               primary="Summer BBQ"
//               secondary={
//                 <React.Fragment>
//                   <Typography
//                     sx={{ display: "inline" }}
//                     component="span"
//                     variant="body2"
//                     color="text.primary"
//                   >
//                     to Scott, Alex, Jennifer
//                   </Typography>
//                   {" — Wish I could come, but I'm out of town this…"}
//                 </React.Fragment>
//               }
//             />
//           </ListItem>
//           <Divider variant="inset" component="li" />
//           <ListItem alignItems="flex-start">
//             <ListItemAvatar>
//               <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//             </ListItemAvatar>
//             <ListItemText
//               primary="Oui Oui"
//               secondary={
//                 <React.Fragment>
//                   <Typography
//                     sx={{ display: "inline" }}
//                     component="span"
//                     variant="body2"
//                     color="text.primary"
//                   >
//                     Sandra Adams
//                   </Typography>
//                   {" — Do you have Paris recommendations? Have you ever…"}
//                 </React.Fragment>
//               }
//             />
//           </ListItem>
//         </List>
//       </Box>
//     </Box>
//   );
// };

// export default Rightbar;
