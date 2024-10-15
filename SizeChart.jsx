import React, { useState } from "react";
import "./SizeChart.css";
import { Link } from "react-router-dom";
const SizeChart = () => {
  const [incm, setInCm] = useState(true);
  const [line, setLine] = useState(true);
  const [lineColor, setLineColor] = useState( );
  return (
    // const handleColorChange = (color) => {
    //     setLineColor(color);
    //   };
    <>
      <div className="Size-Main">
        <div className="sub-main">
          <div className="top-part">
            <div className="crossicon">
             <Link to='/'> <svg width="24" height="24" viewBox="0 0 24 24" fill="">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z" opacity="0.05"></path>
                  <path
                    fill="#282C3F"
                    d="M12.967 12L19.3 5.666a.685.685 0 000-.967.686.686 0 00-.967 0L12 11.033 5.666 4.7a.686.686 0 00-.967 0 .685.685 0 000 .967L11.033 12 4.7 18.334a.685.685 0 000 .967.686.686 0 00.967 0L12 12.967l6.334 6.334a.686.686 0 00.967 0 .685.685 0 000-.967L12.967 12z"
                  ></path>
                </g>
              </svg></Link>
            </div>
            <div className="Dress-size">
              <div className="pic">
                <img
                  src="https://assets.myntassets.com/h_120,q_20,w_80/v1/assets/images/29418630/2024/5/8/6a7a3c0f-4e56-40ae-946a-7e7fbcd94a481715183213903KhushalKWomenrayonkurtaandpalazzowithdupattaset1.jpg"
                  alt=""
                />
              </div>
              <div className="pic-desc">
                <h5>Khushal K</h5>
                <p>
                  Khushal K Ethnic Motifs Printed Mandarin Collar Three-Quarter
                  Sleeves Kurta Set
                </p>
                <div className="costs">
                  <span id="Actualprice">₹1415</span>
                  <span id="Mrp-Price">₹5899</span>
                  <span id="Discount-Price">(76% OFF)</span>
                </div>
              </div>
            </div>
            <div className="Size-charts">
              <div className="charts">
                <div className="size1" onClick={() => setLine(true)}>
                  <h4 id="sct"  style={line?{color:"#ff3f6c"}:{color:"#282c3f",fontWeight:"600"}}>Size Chart</h4>
                  {line ? <div className="underline"></div> : ""}
                </div>
                <div className="size2" onClick={() => setLine(false)}>
                  <h4 id="htm" style={line?{color:"black"}:{color:"#ff3f6c"}}>How to measure</h4>
                  {line ? "" : <div className="underline"></div>}
                </div>
              </div>
            </div>

            {/* <div className='containersub'>
                <div className='subconatinerborder'>
                    Size Chart
                </div>
                <div className='subconatinerborder2'>
                    How to Measure
                </div>
            </div> */}
            <div className="Btns">
              <button>
                <span
                  id="In"
                  className={incm ? "democolor" : ""}
                  onClick={() => {
                    setInCm(true);
                  }}
                >
                  in
                </span>
                &nbsp;
                <span
                  className={incm ? "" : "democolor"}
                  id="Cm"
                  onClick={() => {
                    setInCm(false);
                  }}
                >
                  cm
                </span>
              </button>
            </div>

            {incm ? (
              <div className="Table1">
                <table className="table">
                  <tr className="size-heading">
                    <th>Size</th>
                    <th>To Fit Bust</th>
                    <th>Font Length</th>
                    <th>To Fit Waist</th>
                    <th>Outseam Length</th>
                    <th>Inseam Length</th>
                  </tr>
                  <tr className="size-heading1" onClick={()=>{setLineColor("S")}}>
                 <td className="dispalyradio" >
                      <input type="radio"     
                    //    value="red" name="color"
                    //   onChange={() => handleColorChange('red')}
                    />
                      <span> S</span>
                    </td>
                    <td>36.0</td>
                    <td>46.0</td>
                    <td>27.0</td>
                    <td>38.0</td>
                    <td>26.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> M</span>
                    </td>
                    <td>38.0</td>
                    <td>46.0</td>
                    <td>29.0</td>
                    <td>38.0</td>
                    <td>26.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> L</span>
                    </td>
                    <td>40.0</td>
                    <td>46.0</td>
                    <td>31.0</td>
                    <td>38.0</td>
                    <td>26.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> XL</span>
                    </td>
                    <td>42.0</td>
                    <td>46.0</td>
                    <td>31.0</td>
                    <td>38.0</td>
                    <td>26.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> XXL</span>
                    </td>
                    <td>44.0</td>
                    <td>46.0</td>
                    <td>31.0</td>
                    <td>38.0</td>
                    <td>26.0</td>
                  </tr>
                </table>
              </div>
            ) : (
              <div className="Table2">
                <table className="table">
                  <tr className="size-heading">
                    <th>Size</th>
                    <th>To Fit Bust</th>
                    <th>Font Length</th>
                    <th>To Fit Waist</th>
                    <th>Outseam Length</th>
                    <th>Inseam Length</th>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> S</span>
                    </td>
                    <td>91.4</td>
                    <td>116.8</td>
                    <td>68.6</td>
                    <td>96.5</td>
                    <td>66.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> M</span>
                    </td>
                    <td>96.5</td>
                    <td>116.8</td>
                    <td>78.7</td>
                    <td>96.6</td>
                    <td>66.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> L</span>
                    </td>
                    <td>40.0</td>
                    <td>116.8</td>
                    <td>83.8</td>
                    <td>96.6</td>
                    <td>66.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> XL</span>
                    </td>
                    <td>42.0</td>
                    <td>116.8</td>
                    <td>88.9</td>
                    <td>96.6</td>
                    <td>66.0</td>
                  </tr>
                  <tr className="size-heading1">
                    <td className="dispalyradio">
                      {" "}
                      <input type="radio" />
                      <span> XXL</span>
                    </td>
                    <td>44.0</td>
                    <td>116.8</td>
                    <td>31.0</td>
                    <td>96.6</td>
                    <td>66.0</td>
                  </tr>
                </table>
              </div>
            )}
          </div>

          <div className="Seller">
            <h5>
              Seller:<span className="colorpink">Khushal K(M Direct)</span>
            </h5>
          </div>
          <div className="Measure">
            <h5>How to measure yourself</h5>
            <img
              src="https://assets.myntassets.com/assets/images/sizechart/2016/10/28/11477640000694-Body_Measurements_size-chart_Image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeChart;
