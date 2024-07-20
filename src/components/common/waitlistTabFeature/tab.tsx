import { ReactNode } from "react";

import Database from "./SVGs/Database";
import DollarSign from "./SVGs/DollarSign";
import Lock from "./SVGs/Lock";
import Message from "./SVGs/Message";

type tabArray = {
  svg: ReactNode;
  svgTitle: string;
  image: string;
  imageTitle: string;
  imageContent: string;
};

const Tab: tabArray[] = [
  {
    svg: <DollarSign />,
    svgTitle: `Payments`,
    image: `/images/payments.png`,
    imageTitle: `Easy Payment`,
    imageContent: `Here you can handle projects together with team virtually`,
  },
  {
    svg: <Lock />,
    svgTitle: `Safety`,
    image: `/images/payments.png`,
    imageTitle: `Easy Safety`,
    imageContent: `Here you can handle projects together with team virtually`,
  },
  {
    svg: <Database />,
    svgTitle: `Database`,
    image: `/images/payments.png`,
    imageTitle: `Easy Database`,
    imageContent: `Here you can projects together with team virtually`,
  },
  {
    svg: <Message />,
    svgTitle: `Email Management`,
    image: `/images/payments.png`,
    imageTitle: `Easy Management`,
    imageContent: `Here you can handle projects together with team virtually`,
  },
];
export default Tab;
