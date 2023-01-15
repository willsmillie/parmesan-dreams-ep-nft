import { useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { Box, ButtonBase } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";

const Cover = ({ count, style, children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  const sx = {
    ...style,
    transform: "scale(1.2)",
    position: "absolute",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const toggleAnimations = () => setIsAnimating(!isAnimating);
  const f = isAnimating ? 1 : 0;

  return (
    <AspectRatio ratio="1/1">
      <Box>
        <ButtonBase
          focusRipple
          onClick={toggleAnimations}
          style={{
            width: "100%",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              position: "absolute",
              height: "100%",
              width: "100%",
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
              <img height="100%" width="100%" src="cover.jpg" alt="" />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.1 * f}
              factorY={0.1 * f}
              style={{
                ...sx,
                opacity: 0.8,
              }}
            >
              <img height="100%" width="100%" src="cover.jpg" alt="" />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.3 * f}
              factorY={0.3 * f}
              style={{
                ...sx,
                opacity: 0.6,
              }}
            >
              <img height="100%" width="100%" src="cover.jpg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5 * f}
              factorY={0.5 * f}
              style={{
                ...sx,
                opacity: 0.4,
              }}
            >
              <img height="100%" width="100%" src="cover.jpg" alt="" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </ButtonBase>
        {children}
      </Box>
    </AspectRatio>
  );
};

export default Cover;
