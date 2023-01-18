import { useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const Cover = ({ track, count, children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  const sx = {
    transform: "scale(1.1)",
    height: "100%",
    width: "100%",
    position: "absolute",
  };

  const toggleAnimations = () => setIsAnimating(!isAnimating);
  const f = isAnimating ? 1 : 0;

  const parallax = ({ asset }) => {
    return (
      <div className="cover">
        <MouseParallaxContainer
          className="parallax"
          useWindowMouseEvents
          containerStyle={{
            ...sx,
            width: "100%",
            // display: "grid",
            // position: "absolute",
            gridTemplateColumns: "auto auto auto auto auto",
          }}
          globalFactorX={-0.3}
          globalFactorY={-0.3}
          resetOnLeave
        >
          <MouseParallaxChild
            factorX={-0.1 * f}
            factorY={-0.1 * f}
            style={{
              ...sx,
              opacity: 1,
            }}
          >
            <img src={`${asset}`} alt="" />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.1 * f}
            factorY={0.1 * f}
            style={{
              ...sx,
              opacity: 0.8,
            }}
          >
            <img src={`${asset}`} alt="" />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.3 * f}
            factorY={0.3 * f}
            style={{
              ...sx,
              opacity: 0.6,
            }}
          >
            <img src={`${asset}`} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.5 * f}
            factorY={0.5 * f}
            style={{
              ...sx,
              opacity: 0.4,
            }}
          >
            <img src={`${asset}`} alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    );
  };

  const getAssetFromTrack = (track) => {
    return track.covers[track.covers.length - 1];
  };

  return (
    <>
      {parallax({
        asset: track ? getAssetFromTrack(track) : "cover.jpg",
      })}
      <div>{children}</div>
    </>
  );
};

export default Cover;
