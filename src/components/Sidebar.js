import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { ModeNight } from "@mui/icons-material";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

// import {
//   AccountBox,
//   Article,
//   Group,
//   Home,
//   ModeNight,
//   Person,
//   Settings,
//   Storefront,
// } from "@mui/icons-material";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Switch,
// } from "@mui/material";
// import React from "react";

// const Sidebar = ({ mode, setMode }) => {
//   return (
//     <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
//       <Box position="fixed">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <Home />
//               </ListItemIcon>
//               <ListItemText primary="Homepage" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <Article />
//               </ListItemIcon>
//               <ListItemText primary="Pages" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <Group />
//               </ListItemIcon>
//               <ListItemText primary="Groups" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <Storefront />
//               </ListItemIcon>
//               <ListItemText primary="Marketplace" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <Person />
//               </ListItemIcon>
//               <ListItemText primary="Friends" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <Settings />
//               </ListItemIcon>
//               <ListItemText primary="Settings" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <AccountBox />
//               </ListItemIcon>
//               <ListItemText primary="Profile" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <ModeNight />
//               </ListItemIcon>
//               <Switch
//                 onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
//               />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;
