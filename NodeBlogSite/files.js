const fs = require("fs");

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("created Folder");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("deleted Folder");
  });
}

if (fs.existsSync("./posts/deleteme.txt")) {
  fs.unlink("./posts/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("delete posts");
  });
}
