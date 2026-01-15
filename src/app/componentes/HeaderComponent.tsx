'use client'
import Image from "next/image";
import logoLagartixa from "../res/images/tixinhaTropical.png"
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function HeaderComponente() {
  const [showMe, setShowMe] = useState(false);

  const showHandler = () => {
    setShowMe(!showMe)
  }

  return (
    <div className="bg-purpleCustom flex gap-8 relative w-full">
      <div>
        <h3 className="font-hagridRegular text-orangeCustom pl-8">Delivery</h3>
        <Image
          alt="Logo"
          src={logoLagartixa}
          width={100}
          height={100}
          priority
          className="-mt-2"
        />
      </div>
      <div className="text-center">
        <h1 className="font-hagridExtraBold">Lagartixa</h1>
        <h1 className="font-hagridExtraBold">tropical</h1>
      </div>
      <GiHamburgerMenu className="font-sm" size={40} onClick={showHandler} />
      <Hamburger show={showMe} />
    </div>
  )
};
