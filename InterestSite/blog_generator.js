const fs = require('fs');
const ejs = require('ejs');

//blogs
let blogs = fs.readFileSync('data/content.json', 'utf8');
let blogPostTemplate = fs.readFileSync('views/blog_post.ejs', 'utf8');
var blogEntries = JSON.parse(blogs)

for (let i=0; i<blogEntries.length; i++) {
  let entry = blogEntries[i]

  let blogTitle = entry["title"]
  let name = "build/" + blogTitle.split(" ").join("_") + ".html"

  let blogPost = ejs.render(blogPostTemplate, {
    filename: __dirname + '/views/blog_post.ejs',
    data: entry,
    title: blogTitle
  });

  fs.writeFileSync(name, blogPost, 'utf8');
}

//about
let aboutTemplate = fs.readFileSync('views/about.ejs', 'utf8')
let about = ejs.render(aboutTemplate, {
  filename: __dirname + '/views/about.ejs',
  title: "About"
});
fs.writeFileSync("build/about.html", about, 'utf8');

//hackers
let hackersTemplate = fs.readFileSync('views/hackers.ejs', 'utf8')
let hackers = ejs.render(hackersTemplate, {
  filename: __dirname + '/views/hackers.ejs',
  title: "Hackers"
});
fs.writeFileSync("build/hackers.html", hackers, 'utf8');

//hacks
let hacksTemplate = fs.readFileSync('views/hacks.ejs', 'utf8')
let hacks = ejs.render(hacksTemplate, {
  filename: __dirname + '/views/hacks.ejs',
  title: "Hacks"
});
fs.writeFileSync("build/hacks.html", hacks, 'utf8');

//index
let indexTemplate = fs.readFileSync('views/index.ejs', 'utf8')
let index = ejs.render(indexTemplate, {
  filename: __dirname + '/views/index.ejs',
  title: "Home"
});
fs.writeFileSync("build/index.html", index, 'utf8');

//malware
let malwareTemplate = fs.readFileSync('views/malware.ejs', 'utf8')
let malware = ejs.render(malwareTemplate, {
  filename: __dirname + '/views/malware.ejs',
  title: "Malware"
});
fs.writeFileSync("build/malware.html", malware, 'utf8');

//software
let softwareTemplate = fs.readFileSync('views/software.ejs', 'utf8')
let software = ejs.render(softwareTemplate, {
  filename: __dirname + '/views/software.ejs',
  title: "Software"
});
fs.writeFileSync("build/software.html", software, 'utf8');

//blogsMain
let blogsMainTemplate = fs.readFileSync('views/blogs.ejs', 'utf8')
let blogsMain = ejs.render(blogsMainTemplate, {
  filename: __dirname + '/views/blogs.ejs',
  data: blogEntries,
  title: "Blogs"
});
fs.writeFileSync("build/blogs.html", blogsMain, 'utf8');
