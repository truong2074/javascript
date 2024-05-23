import Anh1 from "../assets/images/anh1.webp";
import Anh2 from "../assets/images/anh2.webp";
import Anh3 from "../assets/images/anh3.webp";

const Slider = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Anh1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Anh2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Anh3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
