<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
<img style="width:100px; height:100px; margin:0px auto;border-radius:25px" src=".github/5S5.png" />
<h1 style="width:100%; text-align:center">Skip 5 Seconds</h1>
</div>

> Hello world, this is my first proper Google Chrome extension!

It injects a Skip 5s Ads button just below the video's title that, when clicked on, will skip the currently playing 5 second ad.
Unfortunately it doesn't work with. unskippable ads.

## Tech

I made the extension using TypeScript (obviously) and the building process involves webpack and ts-loader.

The extension is comprised of:
- A content script (content.js), which is injected in every YouTube page and listens for YouTube's client-side navigation events in order to add the Skip 5s Ads button to the /watch page;
- A browser action that basically just mimics the functioning of the Skip 5s Ads button, but is located in the extension toolbar.
Support

The extension is free and open-source.

If you want to contribute please fork the repository and open a pull request

If you want to support me you can do so on ko-fi. No need to, but appreciated.

## What does it do?

The extension injects a button under the video player that when pressed will skip the currently playing 5 second ad

![screenshot](.github/screenshot.png)

## Usage

- In the project directory

  - Install dependencies

```
    $ npm install
```

- Build the extension

```
  $ npm run build
```

> this will create a `dist` directory in the same folder

- Go to [Manage Extenstions](chrome://extensions/) on Chrome and press the `Load Unpacked` button

- Select the `dist` directory that was generated when building the extension
