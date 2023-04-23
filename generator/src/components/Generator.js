import { FiDownload, FiUpload } from 'react-icons/fi';
import React, { useState } from 'react';
import fileSaver from 'file-saver';
import '../components/Generator.css'
import { Uploader } from 'cloudinary-react';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { json } from 'react-router-dom';

function Generator() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [installation, setInstallation] = useState('');
  const [contributingGuidelines, setContributingGuidelines] = useState('');
  const [testInstruction, setTestInstructions] = useState('');
  const [license, setLicense] = useState('')
  const [usage, setUsage] = useState('');
  const [image, setImage] = useState()
  const [logoUrl, setLogoUrl] = useState('');
  const [preview, setPreview] = useState('');
  const [publicUrl, setPublicUrl] = useState('');
  const [logoPreviewUrl, setLogoPreviewUrl] = useState('');
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
<h1>${projectName}<hr/></h1>
<img src = "${publicUrl}" width="200" height="200"/>
</pre>
</div>
<div>
<h2>Description<hr/></h2>
<p><i>${description}</i></p>
</div>
<div>
<h2>Salient Features<hr/></h2>
<p><i>${features}</i></p>
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
<div>
<p><h2>Installation Guide</h2><hr/></h2></p>
<p>${installation}</p>
</div>
<div>
<p><h2>Usage<hr/></h2></p>
<p>${usage}</p>
</div>
<div>
<p><h2>Test Instructions<hr/></h2></p>
<p>${testInstruction}</p>
</div>
<div>
<p><h2>Contribution Guide<hr/></h2></p>
<p>${contributingGuidelines}</p>
</div>
<div>
<p><h2>License<hr/></h2></p>
<p>${license}</p>
</div>
<div>
<p align='center'>Thanks for visiting the project</p>
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer"/>
</p>
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
          <h1>Project Readme Generator<hr /></h1>
          <form>
            <label>
              <h2>Logo</h2>
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
              <h2>Project Name</h2>
              <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </label>
            <br />
            <label>
              <h2>Project Description</h2>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
              <h2>Salient Features</h2>
              <textarea value={features} onChange={(e) => setFeatures(e.target.value)} />
            </label>
            <br />
            <label>
              <h2> Tools and Technologies used</h2>
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
            <label>
              Installation Guide
              <textarea value={installation} onChange={(e) => setInstallation(e.target.value)} />
            </label>
            <br />
            <label>
              Usage
              <textarea value={usage} onChange={(e) => setUsage(e.target.value)} />
            </label>
            <br />
            <label>
              Contributing Guidelines
              <textarea value={contributingGuidelines} onChange={(e) => setContributingGuidelines(e.target.value)} />
            </label>
            <br />
            <label>
              Test Instructions
              <textarea value={testInstruction} onChange={(e) => setTestInstructions(e.target.value)} />
            </label>
            <br />
            <label>
              License
              <textarea value={license} onChange={(e) => setLicense(e.target.value)} />
            </label>
            <br />

            <br />
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
      {/* <pre>
        <div className="preview" align='center'>
          <h2>Preview</h2>
          <div dangerouslySetInnerHTML={{ __html: preview }}></div>
        </div>
      </pre> */}
    </div>
  );
}

export default Generator;
