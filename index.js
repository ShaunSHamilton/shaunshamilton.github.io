const ghpages = require("gh-pages");

function callback(a, b, c) {
  console.log(a, b, c);
}

ghpages.publish(
  "build",
  {
    dotfiles: true,
  },
  callback
);
