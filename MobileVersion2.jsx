// import React from 'react'
// import { FaBagShopping, FaRegHeart } from 'react-icons/fa6'
// import { IoArrowBackSharp, IoSearch } from 'react-icons/io5'
// import { RiShoppingBag2Line } from 'react-icons/ri'
import { IoArrowBackSharp, IoSearch } from "react-icons/io5";
import "./MobileVersion2.css";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
import { RiArrowRightSLine, RiShoppingBag2Line } from "react-icons/ri";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { CiHeart } from 'react-icons/ci'
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
// import { BiSolidOffer } from 'react-icons/bi';
const MobileVersion2 = () => {
  let[state,setState]=useState(true);
  let[click,setClick]=useState(false);
  return (
    <>
      <div id="Main">
        {/* __________________Header____________________ */}
        <div className="Header">
          <div className="subhead">
            <div className="head1">
              <span className="Icon">
                <IoArrowBackSharp />
              </span>
              <h6 className="Text">Khushal K</h6>
            </div>
            <div className="head2">
              <ul>
                <li>
                  <svg width="20px" height="20px" viewBox="0 0 16 18">
                    <g fill="none" fillrule="evenodd">
                      <path d="M-4-3h24v24H-4z"></path>
                      <g fill="#3E4152">
                        <path d="M3.23 1.3c-.788 0-1.43.61-1.43 1.359V15.34c0 .75.642 1.359 1.43 1.359h9.54c.788 0 1.43-.61 1.43-1.359V2.66c0-.75-.642-1.359-1.43-1.359H3.23zM13 18H3C1.621 18 .5 16.937.5 15.632V2.368C.5 1.063 1.621 0 3 0h10c1.379 0 2.5 1.063 2.5 2.368v13.264C15.5 16.937 14.379 18 13 18z"></path>
                        <path d="M10.25 8.25h-1.5v-1.5a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v1.5a.75.75 0 001.5 0v-1.5h1.5a.75.75 0 000-1.5"></path>
                      </g>
                    </g>
                  </svg>
                </li>
                <li className="Icon1">
                  <IoSearch />
                </li>
                <li className="Icon1">
                  <FaRegHeart />
                </li>
                <li className="Icon1">
                  <RiShoppingBag2Line />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*_______________ imagepage____________________ */}
        <div className="Mainbody">
          <div className="Images">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/w_375,q_60,dpr_2,fl_progressive/assets/images/29418630/2024/5/8/6a7a3c0f-4e56-40ae-946a-7e7fbcd94a481715183213903KhushalKWomenrayonkurtaandpalazzowithdupattaset1.jpg"
                  alt="error"
                />
              </SwiperSlide>
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/fl_progressive/h_1440,q_70,w_1080/v1/assets/images/29418630/2024/5/8/d62ade22-cb6a-4fbf-a393-34d21d46518c1715183213936KhushalKWomenrayonkurtaandpalazzowithdupattaset2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/fl_progressive/h_1440,q_70,w_1080/v1/assets/images/29418630/2024/5/8/59f2a89a-f1a3-453c-b429-b3a374ce8a9c1715183213968KhushalKWomenrayonkurtaandpalazzowithdupattaset3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/fl_progressive/h_1440,q_70,w_1080/v1/assets/images/29418630/2024/5/8/f62546d7-3456-4789-8866-056082f4ed201715183213926KhushalKWomenrayonkurtaandpalazzowithdupattaset4.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/fl_progressive/h_1440,q_70,w_1080/v1/assets/images/29418630/2024/5/8/1693e580-a8a3-4cca-b26e-242f235d3dea1715183213957KhushalKWomenrayonkurtaandpalazzowithdupattaset5.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/fl_progressive/h_1440,q_70,w_1080/v1/assets/images/29418630/2024/5/8/bf84f2f6-65a9-4332-af3d-888884a0f44f1715183213947KhushalKWomenrayonkurtaandpalazzowithdupattaset6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="Dress">
                <img
                  src="https://assets.myntassets.com/fl_progressive/h_1440,q_70,w_1080/v1/assets/images/29418630/2024/5/8/e19df034-d240-41c3-9658-bde3f6afbf411715183213915KhushalKWomenrayonkurtaandpalazzowithdupattaset7.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="dressname">
              <div className="name">
                <span>
                  <b>Khushal K </b>Ethnic Motifs Printed Mandarin Collar
                  Three-Quarter Sleeves Kurta Set
                </span>
              </div>
              <div className="price">
                <span className="mrp">MRP</span> &nbsp;
                <span className="mrp1">₹5,899</span> &nbsp;
                <span id="rups">₹</span>
                <span className="cost"> 1,415</span> &nbsp;
                <span className="discount"> (76% OFF)</span>
              </div>
            </div>
            <div className="BestPrice">
              <div className="subpart">
                <div className="best-part1">
                  <div>
                    <span>Best price </span>
                    <span className="bold">₹1,065</span>
                    <span> with coupon </span>
                    <span className="offer">TOPBRANDOFFER</span>
                  </div>
                  <div className="rightarrow">
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
                <div className="best-part2">
                  <div>
                    <span className="save">Add to bag and save </span>
                  </div>
                  <div className="bag">
                    <span id="shoppingbag">
                      <HiOutlineShoppingBag />
                    </span>
                    <span id="zero">₹0</span>
                    <span id="costt"> / ₹1,199</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Offers">
              <div className="subOffer">
                <div className="off1">Offers</div>
                <div className="off2">
                  <div className="logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g id="offers">
                        <g id="icon">
                          <path
                            d="M8.5 9.5C8.5 10.05 8.95 10.5 9.5 10.5C10.05 10.5 10.5 10.05 10.5 9.5C10.5 8.95 10.05 8.5 9.5 8.5C8.95 8.5 8.5 8.95 8.5 9.5Z"
                            fill="#171A27"
                          ></path>
                          <path
                            d="M9.24994 15.4999C9.05994 15.4999 8.86994 15.4299 8.71994 15.2799C8.42994 14.9899 8.42994 14.5099 8.71994 14.2199L14.2199 8.71994C14.5099 8.42994 14.9899 8.42994 15.2799 8.71994C15.5699 9.00994 15.5699 9.48994 15.2799 9.77994L9.77994 15.2799C9.62994 15.4299 9.43994 15.4999 9.24994 15.4999Z"
                            fill="#171A27"
                          ></path>
                          <path
                            d="M13.5 14.5C13.5 15.05 13.95 15.5 14.5 15.5C15.05 15.5 15.5 15.05 15.5 14.5C15.5 13.95 15.05 13.5 14.5 13.5C13.95 13.5 13.5 13.95 13.5 14.5Z"
                            fill="#171A27"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.1882 21.7701C10.6562 22.3477 11.1848 23 12 23C12.82 23 13.35 22.34 13.83 21.74C13.8577 21.708 13.8877 21.6725 13.9193 21.6352C14.1046 21.4163 14.3448 21.1327 14.49 21.09C14.6783 21.09 15.0084 21.2141 15.3135 21.3288L15.37 21.35C16.1 21.63 16.94 21.86 17.52 21.52C18.22 21.12 18.35 20.29 18.46 19.56C18.5 19.26 18.58 18.77 18.68 18.66C18.7783 18.5706 19.1801 18.5052 19.4785 18.4566L19.6021 18.4364C20.3267 18.3173 21.144 18.183 21.54 17.5C21.9243 16.8201 21.6387 16.0626 21.3815 15.3805L21.37 15.35C21.26 15.06 21.08 14.58 21.11 14.44C21.16 14.31 21.53 14 21.76 13.82L21.7701 13.8118C22.3477 13.3438 23 12.8152 23 12C23 11.1848 22.3477 10.6562 21.7701 10.1882L21.76 10.18C21.53 10 21.15 9.7 21.09 9.54C21.0606 9.39283 21.2333 8.93764 21.3437 8.64662L21.35 8.63C21.62 7.94 21.92 7.17 21.52 6.48C21.12 5.78 20.29 5.65 19.56 5.54C19.27 5.5 18.77 5.42 18.66 5.32C18.5735 5.22486 18.5095 4.83795 18.4614 4.54752C18.4539 4.50218 18.4468 4.45916 18.44 4.42L18.4364 4.39786C18.3173 3.67329 18.183 2.85596 17.5 2.46C16.91 2.12 16.07 2.35 15.35 2.63C15.286 2.654 15.22 2.6804 15.1536 2.70696C14.888 2.8132 14.616 2.922 14.44 2.89C14.31 2.84 14 2.47 13.82 2.24L13.8118 2.22987C13.3438 1.65235 12.8152 1 12 1C11.1848 1 10.6562 1.65235 10.1882 2.22987L10.18 2.24C10 2.47 9.7 2.85 9.53 2.9C9.32 2.9 8.96 2.76 8.65 2.63C7.92 2.36 7.09 2.13 6.5 2.47C5.8 2.88 5.67 3.7 5.56 4.44C5.52 4.74 5.44 5.23 5.34 5.34C5.2417 5.42937 4.83992 5.49477 4.54147 5.54336L4.44 5.56C3.7 5.67 2.87 5.8 2.47 6.5C2.08 7.18 2.37 7.96 2.64 8.65L2.67269 8.73563C2.78351 9.02507 2.93626 9.42402 2.9 9.56C2.85 9.7 2.47 10 2.24 10.18L2.22987 10.1882C1.65235 10.6562 1 11.1848 1 12C1 12.8152 1.65235 13.3438 2.22987 13.8118L2.24 13.82C2.47 14 2.85 14.3 2.89 14.44C2.91943 14.5872 2.74672 15.0424 2.6363 15.3334L2.63 15.35L2.61869 15.38C2.36146 16.0623 2.07579 16.82 2.47 17.5C2.87 18.2 3.7 18.33 4.44 18.44C4.73 18.48 5.23 18.56 5.34 18.66C5.4265 18.7551 5.49055 19.1421 5.53862 19.4325C5.54613 19.4778 5.55325 19.5208 5.56 19.56L5.56364 19.5821C5.68268 20.3067 5.81696 21.124 6.5 21.52C7.09 21.87 7.92 21.64 8.65 21.36C8.69343 21.3437 8.73742 21.3269 8.78161 21.31C9.06298 21.2022 9.35258 21.0914 9.56 21.1C9.69 21.15 10 21.53 10.18 21.76L10.1882 21.7701ZM9.95 19.65C9.82 19.62 9.68 19.6 9.53 19.6C9.05543 19.6 8.58086 19.7857 8.12562 19.9639L8.11 19.97L8.09729 19.9749C7.79021 20.0938 7.43768 20.2303 7.27 20.25C7.17183 20.1518 7.10552 19.743 7.05685 19.443L7.04 19.34C6.95 18.71 6.84 18.05 6.4 17.61C5.96537 17.1655 5.31609 17.0625 4.6931 16.9637L4.67 16.96L4.60026 16.9484C4.2982 16.8983 3.86407 16.8263 3.79 16.78C3.75 16.63 3.93 16.17 4.04 15.89L4.04571 15.8749C4.26429 15.2988 4.50862 14.6547 4.35 14.05C4.19214 13.4679 3.6936 13.061 3.2097 12.6661L3.19 12.65C2.96 12.47 2.54 12.13 2.5 12.02C2.55 11.87 2.96 11.53 3.19 11.35C3.68 10.96 4.19 10.55 4.35 9.95C4.51 9.34 4.26 8.68 4.04 8.11C4.01756 8.04717 3.99109 7.97527 3.96353 7.90041C3.86828 7.64168 3.76 7.34756 3.76 7.27C3.85817 7.17183 4.26698 7.10552 4.56702 7.05685L4.67 7.04L4.686 7.03746C5.31099 6.93828 5.95381 6.83628 6.4 6.4C6.83628 5.95381 6.93828 5.31099 7.03746 4.686L7.04 4.67L7.04698 4.62802C7.09725 4.3255 7.17363 3.86592 7.25 3.78C7.43836 3.78 7.79381 3.9176 8.10198 4.03689L8.11 4.04C8.71 4.27 9.38 4.5 9.95 4.33C10.5321 4.17214 10.939 3.6736 11.3339 3.1897L11.35 3.17C11.53 2.94 11.87 2.52 11.98 2.48C12.13 2.52 12.47 2.94 12.65 3.17C13.04 3.66 13.45 4.17 14.05 4.33C14.61 4.48 15.29 4.25 15.89 4.02C16.2 3.9 16.56 3.77 16.73 3.74C16.8282 3.83817 16.8945 4.24699 16.9432 4.54703L16.96 4.65C17.05 5.28 17.16 5.94 17.6 6.38C18.0346 6.8245 18.6839 6.92751 19.3069 7.02634L19.33 7.03L19.3998 7.04159C19.7018 7.0917 20.1359 7.16371 20.21 7.21C20.24 7.36 20.07 7.82 19.96 8.1L19.9543 8.11507C19.7357 8.69124 19.4914 9.33528 19.65 9.94C19.8079 10.5221 20.3064 10.929 20.7903 11.3239L20.81 11.34C21.03 11.51 21.42 11.83 21.49 11.99C21.42 12.15 21.03 12.47 20.81 12.64C20.32 13.03 19.81 13.44 19.65 14.04C19.49 14.66 19.74 15.31 19.96 15.88C19.9824 15.9428 20.0089 16.0147 20.0365 16.0896C20.1317 16.3483 20.24 16.6424 20.24 16.72C20.1418 16.8182 19.733 16.8845 19.433 16.9331L19.33 16.95C18.7 17.05 18.04 17.16 17.6 17.6C17.1655 18.0345 17.0626 18.6835 16.9638 19.3063L16.96 19.33L16.953 19.372C16.9027 19.6745 16.8264 20.1341 16.75 20.22C16.5616 20.22 16.2062 20.0824 15.898 19.9631L15.89 19.96C15.29 19.73 14.62 19.5 14.05 19.65C13.4679 19.8079 13.061 20.3064 12.6661 20.7903L12.65 20.81C12.47 21.04 12.13 21.46 12.02 21.5C11.87 21.46 11.53 21.04 11.35 20.81C10.96 20.32 10.55 19.81 9.95 19.65Z"
                            fill="#171A27"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bankOffer">
                    <h5>Bank Offers</h5>
                    <span>
                      10% Instant Discount AU Credit Card. - Maximum Discount of
                      ₹1,000 during the offer period.
                    </span>
                    <h6>More Bank Offers</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="SelectSizes">
              <div className="subselect">
                <div className="sizes">Select Size</div>
                <div className="sizeChart">
                  <span className="chart"><Link to='/viewChart' style={{textDecoration:"none",color:"#ff3e6c"}}>Size Chart</Link></span>{" "}
                  <span className="rightarrow">
                    <RiArrowRightSLine />
                  </span>
                </div>
              </div>
              <div className="flow">
                <div className="sizeflow">
                  <div className="circle">
                    {" "}
                    <span className="choose-size">S</span>
                  </div>
                  <div className="circle">
                    <span className="choose-size">M</span>
                  </div>
                  <div className="circle">
                    <span className="choose-size">L</span>
                  </div>
                  <div className="circle">
                    <span className="choose-size">XL</span>
                  </div>
                  <div className="circle">
                    <span className="choose-size">XXL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="CheckDelivery">
              <div>
                <h4 id="check">Check Delivery</h4>
              </div>
              <div className="Input">
                <input type="text" placeholder="Enter Pin Code" />
              </div>
              <div className="delivery">
                <div className="expressdel">
                  <span className="icons">
                    <BsBoxSeam />
                  </span>
                  <h6 className="boldtext">
                    Express delivery{" "}
                    <span className="lighter">might be available</span>
                  </h6>
                </div>
                <div className="pay">
                  <span className="icons">
                    <GiTakeMyMoney />
                  </span>
                  <h6 className="boldtext">
                    Pay on delivery{" "}
                    <span className="lighter"> might be available</span>
                  </h6>
                </div>
                <div className="free7">
                  <span className="icons">
                    <PiArrowsCounterClockwise />
                  </span>
                  <h6 className="boldtext">
                    Hassle free 7, 15 and 30 days{" "}
                    <span className="lighter">
                      Return & Exchange might be available
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="Design">
              <div className="subdesign">
                <div className="designs">
                  <div className="design1">
                    <div className="des">
                      <h5>Neck</h5>
                      <p>Mandarin Collar</p>
                    </div>
                    <div className="des">
                      <h5>Top Design Styling</h5>
                      <p>Regular</p>
                    </div>
                    <div className="des">
                      <h5>Top Fabric</h5>
                      <p>Viscose Rayon</p>
                    </div>
                    <div className="des">
                      <h5>Print or Pattern T</h5>
                      <p>Ethnic Motifs</p>
                    </div>
                   {click?<div className="hidden">
                    <div className="des">
                      <h5>Ornamentation</h5>
                      <p>Thread Work</p>
                    </div>
                    <div className="des">
                      <h5>Weave Type</h5>
                      <p>Machine Weave</p>
                      </div>
                    </div>:" "} 
                  </div>
                  <div className="design2">
                    <div className="des">
                      <h5>Ornamentation</h5>
                      <p>Thread Work</p>
                    </div>
                    <div className="des">
                      <h5>Weave Type</h5>
                      <p>Machine Weave</p>
                    </div>
                    <div className="des">
                      <h5>Bottom Closure</h5>
                      <p>Slip On</p>
                    </div>
                    <div className="des">
                      <h5>Weave Pattern</h5>
                      <p>Regular</p>
                    </div>
                  {click?  <div className="hidden">
                    <div className="des">
                      <h5>Dupatta Fabric</h5>
                      <p>Poly Chiffon</p>
                    </div>
                    <div className="des">
                      <h5>Waistband</h5>
                      <p>Elasticated</p>
                      </div>
                    </div>:""}
                  </div>
                </div>
                <h5 id="more" onClick={()=>{setClick(true)}}>{click?"":"See more"}</h5>

                <div className="Productdetails">
                  <div className="product">
                    <h5>Product Details</h5>
                    <p>Blue printed kurta with plazzos with dupatta</p>
                  </div>
                  <div className="kurtadesign">
                    <h5>Kurta design:</h5>
                    <div className="list">
                      <ul>
                        <li>Ethnic motifs printed</li>
                        <li>Anarkali shape</li>
                        <li>Regular style</li>
                        <li>Mandarin collar, three-quarter regular sleeves</li>
                        <li>Na pockets thread work detail</li>
                        <li>Calf length with straight hem</li>
                        <li>Viscose rayon machine weaven fabric</li>
                      </ul>
                    </div>
                  </div>
                  <div className="palazzosdesign">
                    <h5>Palazzos design:</h5>
                    <div className="list">
                      <ul>
                        <li>Solid Palazzos</li>
                        <li>Elasticated waistband</li>
                        <li>Slip on closure</li>
                      </ul>
                    </div>
                  </div>
                  <div className="size-fit">
                    <h5>Size & Fit</h5>
                    <p>The model(height 5'8) is wearing a size S</p>
                  </div>
                  <div className="material">
                    <h5>Material & Care</h5>
                    <p>
                      Viscose Rayon <br />
                      Machine Wash
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Quality">
              <div className="subquality">
                <div className="genuineProduct">
                  <img src="/assests/img/Geninue product.png" alt="" />
                  <h5>Genuine Product</h5>
                </div>
                <div className="QualityChecked">
                  <img src="/assests/img/quality check.png" alt="quality check" />
                  <h5>Quality Checked</h5>
                </div>
              </div>
            </div>
            <div className="Accordian">
              <div className="Questions">
                <div className="que">
                  <h5>More Kurta Sets by Khushal K</h5>
                  <span className="rightarrow">
                    <RiArrowRightSLine />
                  </span>
                </div>
                <hr />
                <div className="que">
                <h5>More Blue Kurta Sets</h5>
                <span className="rightarrow">
                    <RiArrowRightSLine />
                  </span>
                </div>
                <hr />
                <div className="que">
                <h5>More Kurta Sets</h5>
                <span className="rightarrow">
                    <RiArrowRightSLine />
                  </span>
                </div>
              </div>
            </div>
            <div className="moreinfo">
          <div className="subinfo">
            <div className="info1">
              <h4>More Information</h4>
            </div>
            <div className="info2">
              <span>Product Code: <strong>29418630</strong></span> <br />
            </div>
            <div className="info3">
            <span className='view'>View More</span>
            </div>
          </div>
          <div className="info4">
              <span id='online'>More about Online Shopping at Myntra</span>
              <span id='arrow' onClick={()=>{setState(!state)}}>{state?<IoIosArrowUp />:<IoIosArrowDown />}</span>
            
            </div>
        </div>
          </div>
          {/* ____________reviews_________________ */}
          {/* <div className="Customers">
          <h5>What Customers Said</h5>
          <div className="review1">
            <p>Fit</p>
            <div className="Lines">
            <div className="line"><div className='review-bar'></div><span className='percentage'>Tight(0%)</span></div>
            <div className="line"><div className='review-bar'></div> <span className='percentage'>A Little Tight(0%)</span></div>
            <div className="line"><div className='review-bar1'></div> <span className='percentage1'>Just Right(100%)</span></div>
            <div className="line"><div className='review-bar'></div> <span className='percentage'>A Little Loose(0%)</span></div>
            <div className="line"><div className='review-bar'></div> <span className='percentage'>Loose(0%)</span></div>
            </div>
          </div>
          <div className="review2"></div>
          <div className="review3"></div>
        </div> */}
          {/* ................................. */}
        </div>
        <br /> <br />
        {/*___________________Footer______________________ */}
        <div className="Butns">
          <div className="Sub-btn">
            <div className="Fbtn">
              <button>
                <span className="Iconn">
                  <CiHeart />
                </span>
                <span className="Textt">WISHLIST</span>
              </button>
            </div>
            <div className="Sbtn">
              <button>
                <span className="iconn">
                  <FaBagShopping />
                </span>{" "}
                <span className="Textt">ADD TO BAG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVersion2;
