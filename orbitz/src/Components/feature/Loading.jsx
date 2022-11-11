import react from "react";
import { Spinner } from "@chakra-ui/react";
import  Travel from "../../img/Travel.png"
import "./Loding.css"

export const Loading = () => {
  return (
    <div className="Loding">
       <img  src={"https://media.tenor.com/whis5JX19ycAAAAC/loading-load.gif"} />
       
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fbc00f81999693.5d10c08723f94.gif" />
      <img src ="https://i.pinimg.com/originals/bc/56/b3/bc56b31a50e519be2ed335a47e75bc62.gif" />
    </div>
  );
};
