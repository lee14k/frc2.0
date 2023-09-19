import Image from "next/image";

function Midgrid() {
  return (
    <div className="container">
      <div className="grids">
        <div className="gridItemone"></div>

        <div className="one">
          <div className="oneframe">
            <h1 className="header1">Local Books</h1>
            <p>
              As a small business in the heart of the Upper Peninsula of Michiga, we are proud to carry and support the areas talented and diverse authors.
            </p>
            <button>Learn more</button>
          </div>
        </div>

        <div className="two">
          <div className="oneframe">
            <h1 className="header2">Fresh Squeezed Juice</h1>
            <p> Looking for some delicious orange juice? Look no further than the Falling Rock Cafe. Come try a delicious glass of our freshly squeezed juice</p>
            <button>Learn more</button>
          </div>
        </div>
                  <div className="gridItemtwo"></div>

      </div>
    </div>
  );
}

export default Midgrid;
