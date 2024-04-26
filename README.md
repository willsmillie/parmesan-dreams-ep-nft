# NFT EP Music Player

This project is demonstration of how one can create an interactive NFT music player.

For a no-code solution, checkout [the interactive designer on designer.nfttoolk.it](https://designer.nfttoolk.it)

## Setup

In the project directory, you can run:

`yarn install`

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Customize

To add your own music, copy your desired mp3 files and album art into the public directory.

Update `src/data/tracks.json` to reflect the added mp3 files.

## Deploy

`yarn build`

Builds the app for production to the `build` folder.

You can then upload the folder content to IPFS, or if you're minting on a platform that requires .zip, select all of the files in the build directory, and compress into a zip archive.

## Metadata

There is a `metadata.json` which represents the NFT metadata. Replace the CIDs for `animation_url` and `image` with the CID of the uploaded folder to IPFS.
