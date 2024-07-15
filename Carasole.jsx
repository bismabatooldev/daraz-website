import "../Style/Carasole.css"
import List from "../Components/List"

const Carasole = () => {
  return (
    <div>
      {/* Dropdown */}
      <div className="row">
        <div className="col-md-2">
          <List/>

        </div>
        {/* Carasole */}
        <div className="col-md-2">
        <div id="carouselExampleIndicators" className="carousel slide small" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={6} aria-label="Slide 7" />
  </div>
  <div className="carousel-inner loop">
    <div className="carousel-item active">
    <img src="/Images/2a88aec7-79eb-41a8-a099-764ae08cd9eb.png" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src="/Images/5cd99540-0284-4a25-9527-f9a38d838985.jpeg" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src="/Images/8a33d606-6447-48c9-bea7-eb8427986c68.jpg" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src="/Images/9e8d0520-9f24-48e4-a762-2026c8ace8db.jpg" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src="/Images/1641105b-44a9-48a9-8c3c-1b377cb824ee.png" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src="/Images/d2cfcc6c-fa70-4569-b19b-783a55e44993.png" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src="/Images/d79d257d-5069-4918-b235-2d440dabcbdb.png_1200x1200.jpg" className="d-block w-100" alt="..." />
</div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>








    


    </div>
  )
}

export default Carasole


