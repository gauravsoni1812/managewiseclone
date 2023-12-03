import FAQ from "./components/FAQ";
import { Finals } from "./components/Finals";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import PricingPanel from "./components/PricingPanel";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#FDF2EC] h-full">
      <Navbar></Navbar>
      <Header></Header>
      <FAQ></FAQ>
      <PricingPanel></PricingPanel>
      <Testimonials></Testimonials>
      <Finals></Finals>
    </div>
  );
}

export default App;
