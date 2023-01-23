import { Box } from "@mui/material";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Search } from "./Components/Search";
import { Statistics } from "./Components/Statistics";

function App() {
  return (
    <Box>
      <NavBar /> <Banner />
      <Search />
      <Statistics />
      <Footer />
    </Box>
  );
}

export default App;
