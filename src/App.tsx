import { useState } from "react";
import heart from "./assets/images/heart.png";
import hug from "./assets/images/hug.png";
import one from "./assets/images/1.png";
import two from "./assets/images/2.png";
import three from "./assets/images/3.png";
import four from "./assets/images/4.png";
import lottieJson from "./assets/lottie/heart.json";
import Lottie from "react-lottie";

const IMG_ARRAY = [one, two, three, four];

function App() {
  const [count, setCount] = useState<number>(1);
  const [isComfort, setIsComfort] = useState<boolean>(false);
  const [imgOrder, setImgOrder] = useState<number>(0);
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClickNo = (): void => {
    if (!isClick) {
      setIsClick(true);
    }
    setImgOrder((prev) => prev + 1);
    setCount((prev) => prev * 1.3);
  };

  const handleClickYes = (): void => {
    setIsComfort(true);
  };

  return (
    <div className="w-screen relative flex flex-col overflow-hidden gap-4 h-dvh">
      {isComfort ? (
        <div className="w-full h-full flex flex-col items-center gap-8 pt-30">
          <img src={hug} alt="hug" className="size-60 animate-customAni " />
          <div className="text-4xl animate-bounce font-bold">{"( >᎑<)♡︎ᐝ"}</div>
          <div className="text-sm text-gray-400">有效期限：2075/12/31</div>
          <div className="absolute scale-120 top-0 left-1/2 transform -translate-x-1/2">
            <Lottie
              width={800}
              height={800}
              speed={1.5}
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: lottieJson,
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto mt-20 flex flex-col items-center gap-4">
            <img
              src={isClick ? IMG_ARRAY[imgOrder % 4] : heart}
              alt="heart"
              // style={imgOrder > 0 ? { transform: `scale(${imgOrder === 1 ? 1 : imgOrder * 0.6})` } : {}}
              className="size-60 transition"
            />
            <p className="text-center">可以牽你的手嗎？</p>
          </div>
          <div
            style={{ transform: `translateY(${count * 20}px)` }}
            className="flex top-[400px] transition flex-col justify-center items-center gap-4"
          >
            <button
              onClick={handleClickYes}
              className="w-30 bg-blue-500 text-white z-20 transition font-bold py-2 px-4 border-b-4 border-blue-700 rounded-md"
              style={{ transform: `scale(${count})` }}
            >
              可以
            </button>
            <button
              onClick={handleClickNo}
              className="w-30 bg-red-400 z-10 text-white transition font-bold py-2 px-4 border-b-4 border-red-700 rounded-md"
            >
              不可以
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
