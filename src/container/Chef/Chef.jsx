import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim
            laboriosam quam, asperiores nostrum nulla.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          excepturi quos fugiat. Incidunt, odio molestias. Eius non asperiores
          magni obcaecati laudantium cupiditate beatae numquam accusantium!{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Noah Cho</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
