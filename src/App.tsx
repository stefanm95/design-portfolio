import Atmosphere from "@/design/atmosphere/Atmosphere";
import GridOverlay from "@/design/atmosphere/GridOverlay";
import NoiseOverlay from "@/design/atmosphere/NoiseOverlay";
import ThemeSwitcher from "@/design/controls/ThemeSwitcher";
import CinematicExperience from "@/presentation/experiences/cinematic/CinematicExperience";
// import { Navigation } from "./presentation/navigation";

export default function App() {
  return (
    <>
      <Atmosphere />
      <NoiseOverlay />
      <GridOverlay />
      {/* <Navigation /> */}
      <ThemeSwitcher />

      <CinematicExperience />
    </>
  );
}
