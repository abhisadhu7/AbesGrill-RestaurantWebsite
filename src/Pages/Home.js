import React from "react";
import HomeEnd from "../Components/HomeEnd";
import NavBar from "../Components/NavBar";
import Patio from "../Components/Patio";
import RestDesc from "../Components/RestDesc";
import RestDesc2 from "../Components/RestDesc2";
import SlideShow from "../Components/SlideShow";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SlideShow />

      <RestDesc
        header="ABE'S GRILL"
        restInfo="Nulla facilisi. Donec volutpat molestie quam, sit amet semper libero gravida id. Suspendisse quis purus eget nibh fringilla vehicula. Nulla facilisi. Phasellus nec imperdiet felis."
        Isource="/DescImages/ImageSec.jpg"
      />
      <RestDesc2
        header="THE KITCHEN"
        restInfo="Suspendisse potenti. Aliquam tincidunt placerat neque, eu eleifend elit porttitor sit amet. Proin varius orci diam, a finibus augue finibus rutrum. Ut interdum a nunc non dapibus. Nam sollicitudin cursus nibh in congue. Morbi cursus neque ligula, vitae ultricies mi venenatis eget. Sed sollicitudin libero neque, in faucibus lectus tristique quis. Suspendisse et iaculis neque, ac tempor justo. In cursus placerat accumsan. Etiam sed justo quis odio vulputate iaculis vel sed risus."
        Isource="/DescImages/Kitchen.jpg"
      />
      <RestDesc
        header="THE BAR"
        restInfo="Nullam neque metus, condimentum a urna ac, condimentum semper sem. Vivamus nibh mauris, scelerisque non nisi a, ultrices mollis nunc. Donec mollis at arcu eget placerat. Vivamus vel purus quis nulla venenatis tempus vel a elit. Curabitur sollicitudin pharetra risus, nec venenatis quam condimentum a. "
        Isource="/DescImages/bar.jpg"
      />
      <Patio />
      <HomeEnd />
    </div>
  );
};

export default Home;
