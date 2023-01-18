import * as React from "react";
import { Box, Stack, Button, Typography, Modal } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ReactMarkdown from "react-markdown";
import Confetti from "./Confetti";

const Widget = styled("Box")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  minWidth: 200,
  maxWidth: 400,
  margin: "auto",
  position: "relative",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
  backdropFilter: "blur(40px)",
}));

const Secrets = ({ show, onClose, children }) => {
  const modalStyle = {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "block",
    overflow: "scroll",
  };

  // const style = {
  //   position: "relative",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   align: "center",
  //   display: "flex",
  //   width: "80%",
  //   bgcolor: "background.paper",
  //   boxShadow: 24,
  //   p: 4,
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      style={modalStyle}
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack direction="column" alignItems="center" padding={8}>
        <Confetti trigger={open} />

        <Widget>
          {/* <Box sx={style}> */}
          <article class="markdown-body">
            <h1 id="parmesan-dreams---parmesan-dreams">
              Parmesan Dreams - Parmesan Dreams
            </h1>
            <h3 id="1-im-just-a-dog-408">1) i’m just a dog (4:08)</h3>
            <blockquote>
              <p>
                I’m just a dog <br />
                I’ll do anything for your love <br />
                I sit at the door <br />
                And wait for your arrival <br />
                Thinking about where you’ve gone <br />
                Wondering who is it that you want <br />
                You’re keeping me calm <br />
                But who am I when you’re gone <br />
                <br />
                Is it just me I’m waiting on <br />
                Is there somewhere I went wrong <br />
                Because I feel the same as I was <br />
                But all fucked up <br />
                <br />
                I’m just a dog <br />
                I’ll do anything for your love <br />
                I keep by your side
                <br />
                And wash your tears when you cry
                <br />
                Thinking about where’ve been
                <br />
                Wondering what it is that I mean
                <br />
                I’m feeling let down
                <br />
                But you know I’ll stick around
                <br />
                <br />
                Is it just me I’m waiting on
                <br />
                Is there somewhere I went wrong
                <br />
                Because I feel the same as I was
                <br />
                But all fucked up
                <br />
                <br />
                When I start to go
                <br />
                Will I be on my own
                <br />
                When the lights go down
                <br />
                Will you still be around
                <br />
                <br />
                Is it just me I’m waiting on
                <br />
                Is there somewhere I went wrong
                <br />
                Because I feel the same as I was
                <br />
                But all fucked up
                <br />
                <br />
                I’m just a dog
              </p>
            </blockquote>
            <h3 id="2-once-in-a-while-323">2) once in a while (3:23)</h3>
            <blockquote>
              <p>
                Feeling outgrown
                <br />
                I should’ve known
                <br />
                That once in a while
                <br />
                You’d light up my phone
                <br />
                <br />
                Feeling left out
                <br />
                Casting self doubt
                <br />
                But once in a while
                <br />
                I figure it out
                <br />
                <br />
                Felling let down
                <br />
                Drop into the ground
                <br />
                But Once in a while
                <br />
                You carry me out
                <br />
                <br />
                Wandering around
                <br />
                This labyrinth unfound
                <br />
                But once in a while
                <br />I find my way out
              </p>
            </blockquote>
            <h3 id="3-idk-what-im-looking-for-345">
              3) idk what i’m looking for (3:45)
            </h3>
            <blockquote>
              <p>
                I don’t know what I’m looking for
                <br />
                Some days I stand at the door
                <br />
                Thinking about all the things
                <br />
                That could’ve been
                <br />
                And even more
                <br />
                Some days I stand near the light
                <br />
                Feel the heat on my skin <br />
                Something nice <br />
                It’s keeping me up at night I don’t know why
                <br />
                <br />
                Maybe I’m caving in
                <br />
                To my soul from my skin
                <br />
                And right back out again
                <br />
                Maybe I’m losing it
                <br />
                <br />
                I don’t know what I’m looking for
                <br />
                Some days I stare at the floor
                <br />
                Thinking of all the ways
                <br />
                For it to cave
                <br />
                Swallow me whole
                <br />
                Some days I open the blinds
                <br />
                Listen close for a voice
                <br />
                No replies
                <br />
                It’s keeping me up at night I don’t know why
                <br />
                <br />
                Maybe I’m caving in
                <br />
                To my soul from my skin
                <br />
                And right back out again
                <br />
                Maybe I’m losing it
                <br />
                <br />
                In the morning
                <br />
                It will begin again
                <br />
                But right now it’s different
                <br />
                It all falls to place
              </p>
            </blockquote>
            <h3 id="4-dont-feed-the-wolves-426">
              4) don’t feed the wolves (4:26)
            </h3>
            <blockquote>
              <p>
                Don’t feed the wolves
                <br />
                They’re lying to you
                <br />
                <br />
                Don’t give them hope
                <br />
                They’re right before you
                <br />
                <br />
                Strangers are always the strangest at night
                <br />
                And out goes the light
                <br />
                <br />
                And I’m gonna love you with all of my might
                <br />
                It’s too late to fight
              </p>
            </blockquote>
            <h2 id="credits">Credits</h2>
            <p>
              Thank you to Abe and Andrew for their valuable time and incredible
              playing.
            </p>
            <p>
              Thank you to my dear friends, who listened to demos a hundred
              times with me, providing crucial feedback and support.
            </p>
            <p>
              Lastly a very special, heartfelt, thank you to my parents for
              their continued love and support. I love you!
            </p>
            <p>
              Lilly, you were best dog a family could have asked for, we love
              and miss you every day!
            </p>
            <p>
              Parmesan Dreams was recorded pre-pandemic with Andrew Tachine
              (drums, percussion), Abe Nouri (keys), Will Smillie (vocals,
              guitar, bass). The band worked remotely over the course of several
              months, sending tracks back and forth, late at night, wring,
              getting feedback, iterating, the culmination leading to Parmesan
              Dreams’ self-titled EP.
            </p>
            <p>Released June 21, 2021</p>
          </article>
          {/* </Box> */}
          {children}
          <Button
            justify="flex-end"
            variant="contained"
            fullWidth
            onClick={onClose}
          >
            Close
          </Button>
        </Widget>
      </Stack>
    </Modal>
  );
};
export default Secrets;
