import React from "react";

function Home() {

  return (
    <div>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-text">
          <h1>
            We Have Everything <br /> Your <span>Jeep</span> Needs
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quisquam earum.
          </p>
          <a href="#" className="btn">Discover Now</a>
        </div>
      </section>

      {/* Jeeps Section */}
      <section className="cars" id="cars">
        <div className="heading">
          <span>All Jeeps</span>
          <h2>We have all types Jeeps</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cars-container container">

        <div className="box">
          <img src="images/home_image/jeep wrangler.jpg" alt="" />
          <h2>Jeep Wrangler</h2>
        </div>


        <div className="box">
          <img src="images/home_image/defender.jpg" alt="" />
          <h2>Land Rover Defender</h2>
        </div>


        <div className="box">
          <img src="images/home_image/hummer h1.jpg" alt="" />
          <h2>Hummer H1</h2>
        </div>


        <div className="box">
          <img src="images/home_image/Ford raptor.jpg" alt="" />
          <h2>Ford Raptor</h2>
        </div>


        <div className="box">
          <img src="images/home_image/pajero military.jpg" alt="" />
          <h2>Pajero Military</h2>
        </div>


        <div className="box">
          <img src="images/home_image/land rover discovery.jpg" alt="" />
          <h2>Land Rover Discovery</h2>
        </div>
      </div>
      </section>

      {/* About Section */}
      <section className="about container" id="about">
        <div className="about-img">
          <img src="images/home_image/about.png" alt="About Us" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>Cheap Prices With <br /> Quality Cars</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam
            quod mollitia ratione ut nobis quisquam excepturi, odio voluptate
            saepe veniam earum est asperiores, suscipit incidunt veritatis
            accusamus debitis dignissimos.
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </section>

      {/* Parts Section */}
      <section className="parts" id="parts">
        <div className="heading">
          <span>What we offer</span>
          <h2>Our Car Is Always Excellent</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="parts-container container">

        <div className="box">
          <img src="images/home_image/part1.png" alt="" />
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i className="bx bxs-star">(6 Reviews)</i>
          <a href="#" className="btn">Buy Now</a>
          <a href="#" className="details">View Details</a>
        </div>


        <div className="box">
          <img src="images/home_image/part2.png" alt="" />
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i className="bx bxs-star">(6 Reviews)</i>
          <a href="#" className="btn">Buy Now</a>
          <a href="#" className="details">View Details</a>
        </div>


        <div className="box">
          <img src="images/home_image/part3.png" alt="" />
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i className="bx bxs-star">(6 Reviews)</i>
          <a href="#" className="btn">Buy Now</a>
          <a href="#" className="details">View Details</a>
        </div>


        <div className="box">
          <img src="images/home_image/part4.png" alt="" />
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i className="bx bxs-star">(6 Reviews)</i>
          <a href="#" className="btn">Buy Now</a>
          <a href="#" className="details">View Details</a>
        </div>


        <div className="box">
          <img src="images/home_image/part5.png" alt="" />
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i className="bx bxs-star">(6 Reviews)</i>
          <a href="#" className="btn">Buy Now</a>
          <a href="#" className="details">View Details</a>
        </div>


        <div className="box">
          <img src="images/home_image/part6.png" alt="" />
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i className="bx bxs-star">(6 Reviews)</i>
          <a href="#" className="btn">Buy Now</a>
          <a href="#" className="details">View Details</a>
        </div>
      </div>
      </section>

      {/* Blog Section */}
      <section className="blog" id="blog">
        <div className="heading">
          <span>Blog & News</span>
          <h2>Our Blog Content</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="blog-container container">

        <div className="box">
          <img src="images/home_image/jeep wrangler.jpg" alt="" />
          <span>Feb 14 2021</span>
          <h3>How To Get Perfect Jeep At Low Price</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex temporibus ut asperiores iure voluptates itaque
            sed nobis soluta neque, dolore alias, praesentium assumenda dicta
            reiciendis delectus dolorem, modi nam.
          </p>
          <a href="#" className="blog-btn"
            >Read More <i className="bx bx-right-arrow-alt"></i
          ></a>
        </div>


        <div className="box">
          <img src="images/home_image/pajero military.jpg" alt="" />
          <span>Feb 14 2021</span>
          <h3>How To Get Perfect Pajero At Low Price</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex temporibus ut asperiores iure voluptates itaque
            sed nobis soluta neque, dolore alias, praesentium assumenda dicta
            reiciendis delectus dolorem, modi nam.
          </p>
          <a href="#" className="blog-btn"
            >Read More <i className="bx bx-right-arrow-alt"></i
          ></a>
        </div>


        <div className="box">
          <img src="images/home_image/land rover discovery.jpg" alt="" />
          <span>Feb 14 2021</span>
          <h3>How To Get Perfect Jeep At Low Price</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex temporibus ut asperiores iure voluptates itaque
            sed nobis soluta neque, dolore alias, praesentium assumenda dicta
            reiciendis delectus dolorem, modi nam.
          </p>
          <a href="#" className="blog-btn"
            >Read More <i className="bx bx-right-arrow-alt"></i
          ></a>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Home;