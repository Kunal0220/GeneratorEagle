import { FiDownload, FiUpload } from 'react-icons/fi';
import React, { Profiler, useState } from 'react';
import fileSaver from 'file-saver';
import './Generator.css'
import { Uploader } from 'cloudinary-react';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { json } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Profile() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [workExperience, setworkExperience] = useState('');
  const [technologies, setTechnologies] = useState([]);

  const [usage, setUsage] = useState('');
  const [image, setImage] = useState()
  const [logoUrl, setLogoUrl] = useState('');
  const [preview, setPreview] = useState('');
  const [publicUrl, setPublicUrl] = useState('');
  const [logoPreviewUrl, setLogoPreviewUrl] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [twitterUsername, setTwitterUsername] = useState('');
  const [linkedinUsername, setLinkedinUsername] = useState('');
  const [gmail, setGmail] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');
  const techOptions = [
    { name: "Ableton", value: "ableton" },
    { name: "Activity Pub", value: "activitypub" },
    { name: "Actix", value: "actix" },
    { name: "Adonis", value: "adonis" },
    { name: "Adobe Express", value: "ae" },
    { name: "AI Script", value: "aiscript" },
    { name: "Alpine JS", value: "alpinejs" },
    { name: "Android Studio", value: "androidstudio" },
    { name: "Angular JS", value: "angular" },
    { name: "Ansible", value: "ansible" },
    { name: "Apollo", value: "apollo" },
    { name: "Appwrite", value: "appwrite" },
    { name: "Astro", value: "astro" },
    { name: "Atom", value: "atom" },
    { name: "Audition ", value: "au" },
    { name: "Autocad", value: "autocad" },
    { name: "AWS", value: "aws" },
    { name: "Azul", value: "azul" },
    { name: "Azure", value: "azure" },
    { name: "Babel", value: "babel" },
    { name: "Bash", value: "bash" },
    { name: "Bevy", value: "bevy" },
    { name: "Blender", value: "blender" },
    { name: "Bootstrap", value: "bootstrap" },
    { name: "BSD", value: "bsd" },
    { name: "C", value: "c" },
    { name: "C Sharp", value: "cs" },
    { name: "C++", value: "cpp" },
    { name: "Crystal", value: "crystal" },
    { name: "Cloudflare", value: "cloudflare" },
    { name: "CMake", value: "cmake" },
    { name: "Codepen", value: "codepen" },
    { name: "Coffee Script", value: "coffeescript" },
    { name: "d3", value: "d3" },
    { name: "CSS", value: "css" },
    { name: "Dart", value: "dart" },
    { name: "Deno", value: "deno" },
    { name: "Devto", value: "devto" },
    { name: "Discord", value: "discord" },
    { name: "Bots", value: "bots" },
    { name: "Django", value: "django" },
    { name: "Docker", value: "docker" },
    { name: "Dotnet", value: "dotnet" },
    { name: "Dynamo DB", value: "dynamodb" },
    { name: "Eclipse", value: "eclipse" },
    { name: "Electron", value: "electron" },
    { name: "Elixir", value: "elixir" },
    { name: "Emacs", value: "emacs" },
    { name: "Ember", value: "ember" },
    { name: "Emotion", value: "emotion" },
    { name: "Express", value: "express" },
    { name: "Fast API", value: "fastapi" },
    { name: "Fediverse", value: "fediverse" },
    { name: "Figma", value: "figma" },
    { name: "Firebase", value: "firebase" },
    { name: "Flask", value: "flask" },
    { name: "Flutter", value: "flutter" },
    { name: "Forth", value: "forth" },
    { name: "Fortran", value: "fortran" },
    { name: "Game Maker Studio", value: "gamemakerstudio" },
    { name: "Gatsby", value: "gatsby" },
    { name: "GCP", value: "gcp" },
    { name: "Git", value: "git" },
    { name: "Github", value: "github" },
    { name: "Github Actions", value: "githubactions" },
    { name: "Gitlab", value: "gitlab" },
    { name: "Gherkin", value: "gherkin" },
    { name: "Go", value: "go" },
    { name: "Gradle", value: "gradle" },
    { name: "Godot", value: "godot" },
    { name: "Grafna", value: "grafana" },
    { name: "Graphql", value: "graphql" },
    { name: "GTK", value: "gtk" },
    { name: "Gulp", value: "gulp" },
    { name: "Haskell", value: "haskell" },
    { name: "Haxe", value: "haxe" },
    { name: "Haxeflixel", value: "haxeflixel" },
    { name: "Heroku", value: "heroku" },
    { name: "Hibernate", value: "hibernate" },
    { name: "HTML", value: "html" },
    { name: "Idea", value: "idea" },
    { name: "AI", value: "ai" },
    { name: "Instagram", value: "instagram" },
    { name: "IPFS", value: "ipfs" },
    { name: "Java", value: "java" },
    { name: "Javascript", value: "js" },
    { name: "Jenkins", value: "jenkins" },
    { name: "Jest", value: "jest" },
    { name: "JQuery", value: "jquery" },
    { name: "Kafka", value: "kafka" },
    { name: "Kotlin", value: "kotlin" },
    { name: "Ktor", value: "ktor" },
    { name: "Kubernetes", value: "kubernetes" },
    { name: "Larvel", value: "laravel" },
    { name: "Latex", value: "latex" },
    { name: "Linkedin", value: "linkedin" },
    { name: "Linux", value: "linux" },
    { name: "Lit", value: "lit" },
    { name: "Lua", value: "lua" },
    { name: "md", value: "md" },
    { name: "Mastodon", value: "mastodon" },
    { name: "Material UI", value: "materialui" },
    { name: "Matlab", value: "matlab" },
    { name: "Maven", value: "maven" },
    { name: "Misskey", value: "misskey" },
    { name: "Mongo DB", value: "mongodb" },
    { name: "MySQL", value: "mysql" },
    { name: "Neo Vim", value: "neovim" },
    { name: "Nest JS", value: "nestjs" },
    { name: "Netlify", value: "netlify" },
    { name: "Next JS", value: "nextjs" },
    { name: "Nginx", value: "nginx" },
    { name: "Nim", value: "nim" },
    { name: "Node JS", value: "nodejs" },
    { name: "Next JS", value: "nextjs" },
    { name: "Ocaml", value: "ocaml" },
    { name: "Octave", value: "octave" },
    { name: "Open Shift", value: "openshift" },
    { name: "Open Stack", value: "openstack" },
    { name: "Perl", value: "perl" },
    { name: "Photoshop", value: "ps" },
    { name: "PHP", value: "php" },
    { name: "Plan9", value: "plan9" },
    { name: "Planet Scale", value: "planetscale" },
    { name: "PostGreSql", value: "postgres" },
    { name: "Powershell", value: "powershell" },
    { name: "PR", value: "pr" },
    { name: "Prisma", value: "prisma" },
    { name: "Processing", value: "processing" },
    { name: "Prometheus", value: "prometheus" },
    { name: "Pug", value: "pug" },
    { name: "Python", value: "py" },
    { name: "QT", value: "qt" },
    { name: "R", value: "r" },
    { name: "Rabbitmq", value: "rabbitmq" },
    { name: "Rails", value: "rails" },
    { name: "React JS", value: "react" },
    { name: "React Native", value: "reactivex" },
    { name: "Redis", value: "redis" },
    { name: "Redux", value: "redux" },
    { name: "Regex", value: "regex" },
    { name: "Remix", value: "remix" },
    { name: "Replit", value: "replit" },
    { name: "Rocket", value: "rocket" },
    { name: "Rollup JS", value: "rollupjs" },
    { name: "Ros", value: "ros" },
    { name: "Ruby", value: "ruby" },
    { name: "Rust", value: "rust" },
    { name: "SASS", value: "sass" },
    { name: "Spring", value: "spring" },
    { name: "SQLite", value: "sqlite" },
    { name: "Stack Overflow", value: "stackoverflow" },
    { name: "Styled Components", value: "styledcomponents" },
    { name: "Supabase", value: "supabase" },
    { name: "Scala", value: "scala" },
    { name: "Selenium", value: "selenium" },
    { name: "Sentry", value: "sentry" },
    { name: "Sequelize", value: "sequelize" },
    { name: "Sketchup", value: "sketchup" },
    { name: "Solidity", value: "solidity" },
    { name: "Solid JS", value: "solidjs" },
    { name: "Svelte", value: "svelte" },
    { name: "SVG", value: "svg" },
    { name: "Swift", value: "swift" },
    { name: "Symfony", value: "symfony" },
    { name: "Tailwind", value: "tailwind" },
    { name: "Tauri", value: "tauri" },
    { name: "Tensorflow", value: "tensorflow" },
    { name: "Three JS", value: "threejs" },
    { name: "Twitter", value: "twitter" },
    { name: "TypeScript", value: "ts" },
    { name: "Unity", value: "unity" },
    { name: "Unreal", value: "unreal" },
    { name: "V", value: "v" },
    { name: "Vala", value: "vala" },
    { name: "Vercel", value: "vercel" },
    { name: "Vim", value: "vim" },
    { name: "Visual Studio", value: "visualstudio" },
    { name: "Vite", value: "vite" },
    { name: "VS Code", value: "vscode" },
    { name: "Vue", value: "vue" },
    { name: "Wasm", value: "wasm" },
    { name: "Webflow", value: "webflow" },
    { name: "Webpack", value: "webpack" },
    { name: "Windi CSS", value: "windicss" },
    { name: "Wordpress", value: "wordpress" },
    { name: "Workers", value: "workers" },
    { name: "XD", value: "xd" },
    { name: "Zig", value: "zig" },
  ];
  const api_key = "876867246251347"
  const cloud_name = "dqorldalg"
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // let publicUrl = "";
  const handleGenerate = () => {
    const techList = technologies.map(tech => tech.value).join(",");

    const readme = `
<div align='center'>
<pre>
<h1><span class="wave">👋 Hey, I'm </span>${projectName}<hr/></h1>
<img src = "${publicUrl}" width="200" height="200"/>
</pre>
</div>
<div>
<p align='center'>
 <img src="https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=monokai" alt="${githubUsername}" />
</p>
</div>
<div align='center>
<p>QOTD</p>
<img src = "https://quotes-github-readme.vercel.app/api?type=horizontal&theme=catppuccin_mocha">
</p>
</div>
<div>
<h1><img src= "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDc1NTAyOGU3MzE5YzZhNzVjYTlmZGQxMmY5MmU3MDg5MDhjZDliNyZjdD1z/SA0bQNKtlZOxOiKuV9/giphy.gif" width="60px" height="40px">About Me</h1>
<h2>Description<hr/></h2>
<p><i>${description}</i></p>
</div>
<div>
<h2>Work Experience<hr/></h2>
<p><i>${workExperience}</i></p>
</div>
<div>
<p><h2>Tech stack of the project<hr/></h2></p>
<p align="center">
<a href="/">
<img src="https://skillicons.dev/icons?i=${techList}" />
</a>
</p>
</p>
</div>
<div align='center'>
<h1><img src= "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjM5YmI1MTkzNzM2MzkwZTYwOGMwNGRlMzJkNDg0N2Y0NWUyN2UwOSZjdD1z/afn6ts3eRHxQ5pZtZ9/giphy.gif" width="60" height="60px">Connect with Me<h1>
<p><a href="https://github.com/${githubUsername}"><img src="https://skillicons.dev/icons?i=github" style={{width:"20px", height:"20px"}} alt='github'/></a>
<a href = "${twitterUsername}"><img src="https://skillicons.dev/icons?i=twitter" style={{width:"20px", height:"20px"}} alt='github'/></a>
<a href = "${linkedinUsername}"><img src="https://skillicons.dev/icons?i=linkedin" style={{width:"20px", height:"20px"}} alt='github'/></a>
<h4>Discord Username: ${discordUsername}</h4>
<h4>Email: *${gmail}*</h4>
</p>
</div>
<div>
<p><h1><img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30px" height="30px">Stats</h1></p>
<br/>
 <p align="center">
 <img src = 'https://github-readme-activity-graph.cyclic.app/graph?username=${githubUsername}&theme=react-dark'/>
 <a href="https://github.com/${githubUsername}/github-readme-stats"><img alt="${githubUsername} Github Stats" src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=000000" /></a>
  <a href="https://github.com/${githubUsername}/github-readme-stats"><img alt="${githubUsername}s Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&langs_count=20&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=000000" /></a>
  </p>
  <p><h1><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWEwZDZmMTdhZGEzMWQ3ZDlmNGFmZGEwZGJjMDQ1NzAzODg3ZmRmZCZjdD1z/LM7mVNy0iAZpTBAkIH/giphy.gif" width="50px" height="50px"> Streak Stats</h1></p>
  <p align="center">
    <p align="center">
      <a href="https://github.com/${githubUsername}/github-readme-streak-stats">
          <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt=" streak" src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=black-ice&hide_border=true&stroke=0000&background=000000"/>
      </a>
    </p>
</div>
<br/><br/>
<div align='center'>
<img src = "https://img.shields.io/github/repo-size/${githubUsername}/${githubUsername}?label=Repo%20Size&style=for-the-badge&labelColor=black&color=20bf6b"/>
<img src = "https://img.shields.io/github/forks/${githubUsername}/${githubUsername}?&labelColor=black&color=0fb9b1&style=for-the-badge"/>
<img src = "https://img.shields.io/github/stars/${githubUsername}/${githubUsername}?&labelColor=black&color=f7b731&style=for-the-badge"/>
<img src = "https://img.shields.io/github/last-commit/${githubUsername}/${githubUsername}?logo=github&labelColor=black&color=d1d8e0&style=for-the-badge"/>
<img src = "https://img.shields.io/github/issues/${githubUsername}/${githubUsername}?&labelColor=black&color=eb3b5a&style=for-the-badge"/>
<img src = "https://img.shields.io/github/license/${githubUsername}/${githubUsername}?&labelColor=black&color=0fb9b1&style=for-the-badge"/>
<img src = "https://visitor-badge.glitch.me/badge?page_id=${githubUsername}&left_color=green&right_color=red"/>
<img src = "https://img.shields.io/github/followers/${githubUsername}?label=Follow&style=social"/>
</div>
<br/>
<p align ='center'>
<h2> Thanks for visiting my profile. Have a nice day  <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="30"></h2>
 </p>
 <br/>
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer"/>
</p>
</div>

</div>
${usage}`;
    setPreview(readme);
    const blob = new Blob([readme], { type: 'text/plain;charset=utf-8' });
    fileSaver.saveAs(blob, 'README.md');
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imageUrl = 'https://example.com/image.jpg';
      setLogoUrl(imageUrl);
      setLogoPreviewUrl(reader.result);
    };
    setImage(e.target.files[0])
  };

  const handleTechChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTechnologies([...technologies, { name: value, value }]);
    } else {
      setTechnologies(technologies.filter(tech => tech.value !== value));
    }
  };
  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    fetch("https://api.cloudinary.com/v1_1/dqorldalg/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPublicUrl(data.secure_url);
        alert("Logo Uploaded successfully!");
        console.log(data.secure_url);
      })
      .catch((err) => {
        
        console.log(err);
      });
  };


  return (
    <div className='main'>
      <br /><br />
      <pre>
        <div className="container" align='center'>
          <span class="wave">👋 Let's get started with....</span>
          <h1>Profile Readme Profile<hr /></h1>
          <p>Want to try Project Readme Generator? <Link id='link' to='/generator' > Try Here</Link></p>
          <form>
            <label>
              <h2>Update Avatar/Your favorite Image</h2>
              <input type="file" accept="image/*" onChange={handleLogoUpload} />
            </label>
            <button id='upload-logo'
              type="button"
              onClick={submitImage}
              className={`button-animate ${isHovered ? 'hovered' : ''}`}
            >
              Upload
            </button>
            <p>(Don't forget to press this button)</p>
            {logoPreviewUrl && (
              <img src={logoPreviewUrl} alt="Logo Preview" width="200" height="200" />
            )}
            <br />
            <label>
              <h2>Your name</h2>
              <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </label>
            <br />
            <label>
              <h2>About Yourself</h2>
              <p>(eg. I'm currenly working on ...,</p>
              <p>I'm looking to collaborate on...,</p>
              <p>I'm looking for help with..., </p>
              <p>I'm currently learning.... etc.)</p>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
              <h2>Work Experience</h2>
              <textarea value={workExperience} onChange={(e) => setworkExperience(e.target.value)} />
            </label>
            <br />
            <label>
              <h2> Tools and Technologies you are familiar with</h2>
              <div class="tech-grid">
                {techOptions.map((tech, index) => (
                  <div class="tech-item" key={index}>
                    <input
                      type="checkbox"
                      value={tech.value}
                      checked={technologies.some(item => item.value === tech.value)}
                      onChange={handleTechChange}
                    />
                    <img src={`https://skillicons.dev/icons?i=${tech.value}`} alt={tech.value} width="40" height="40" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </label>
            <br />
            <h3>Social Media Links</h3>
            <label>
             <i><img src="https://skillicons.dev/icons?i=github" style={{width:"20px", height:"20px"}} alt='github'/> Github Username</i>
              <input type='text' value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)}/>
            </label>
            <br/>
            <label>
             <i><img src="https://skillicons.dev/icons?i=twitter" style={{width:"20px", height:"20px"}} alt='twitter'/> Twitter Link</i>
              <input type='text' value={twitterUsername} onChange={(e) => setTwitterUsername(e.target.value)}/>
            </label>
            <br/>
            <label>
             <i><img src="https://skillicons.dev/icons?i=linkedin" style={{width:"20px", height:"20px"}} alt='linkedin'/> Linkedin Link</i>
              <input type='text' value={linkedinUsername} onChange={(e) => setLinkedinUsername(e.target.value)}/>
            </label>
            <br/>
            <label>
             <i><img src="https://skillicons.dev/icons?i=discord" style={{width:"20px", height:"20px"}} alt='discord'/> Discord Username</i>
              <input type='text' value={discordUsername} onChange={(e) => setDiscordUsername(e.target.value)}/>
            </label>
            <br />
            <label>
             <i><img src="https://skillicons.dev/icons?i=gmail" style={{width:"20px", height:"20px"}} alt='email'/> Email</i>
              <input type='text' value={gmail} onChange={(e) => setGmail(e.target.value)}/>
            </label>
            <br />
            <button
              type="button"
              className={`button-animate ${isHovered ? 'hovered' : ''}`}
              onClick={handleGenerate}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FiDownload /> Generate README
            </button>

            <button onclick="sendReadmeToEmail()">Send README to Email</button>

          </form>
        </div>
      </pre>
      <br />
      {/* <pre> */}
      {/* <div align='center' width='900px' height='auto'>
        <div className="preview" align='center'>
          <h2>Preview</h2>
          <div dangerouslySetInnerHTML={{ __html: preview }}></div>
        </div>
        </div> */}
      {/* </pre> */}
    </div>
  );
}

export default Profile;
