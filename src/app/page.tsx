import Image from "next/image";
import Data from "./data/page";
import { Suspense } from "react";

export default function Home() {
  return ( 
    <>
   <div className="text-3xl font-bold my-3"> navbar</div>

    
    <Suspense fallback={<div> loading............</div>} > 
      
      <Data/>

    </Suspense>

   <div className="text-3xl font-bold my-3"> footer</div>
    </>
  );
}
