# Sam's Portfolio Website
<p>With a combination of YouTube tutorials, Stack Overflow and many resources online, I designed and curated my own portfolio website. The goal of this project was to practice current, modern frameworks and languages that are frequently used in web development (I.e., HTML, CSS and JavaScript). All pages, sections and components were designed by me, in hopes of showcasing my personality, originality and character. </p>

## Tech Stack 
<p>My portfolio website was built entirely on the React + Vite framework.</p> 
<li>React is a well-known JavaScript library that aims to help build intuitive, creative user interfaces, streamlining processes towards web application development. Vite also assists in the application development process, supporting languages such as TypeScript, JSX, CSS and more.</li>
<li>HTML5, a common markup language, was used to structure and present the overall skeleton for each webpage designed in this portfolio website.</li>
<li>CSS3 was subseequently applied to all components and pages, enhancing the overall aesthetic and presentation for the application to better reflect my personal style.</li>
<li>JavaScript was then used to add more responsiveness to the website, thereby making it more dynamic and interactive to a regular visitor.</li>

## Relevant Dependencies
<li>React-Dom (General)</li>
<ul>For immediate rendering upon building components - React DOM was a useful package that assisted greatly in building my website as I could see in real-time how the page would look with certain code.</ul>
<li>React-Icons (General)</li>
<ul>Used across the entire website. I used the React-Icons library. This library features many common, high-quality icons. I integrated seamlessly into my website (Navigation Bar, buttons, tech stack list).</ul>
<li>React-Photo-Album (About Me - Hobbies & Interests photo gallery)</li>
<ul>Used to build my Hobbies & Interests photo gallery in my About Me page. It is a component library, permitting the creation of responsive photo galleries. It is easily customizable with 3 different layouts; as it was also designed with performance optimization in mind, I was able to smoothly render my large array of photos that I wished to be featured.</ul>
<li>React-router-dom (General - Routing)</li>
<ul>For dynamic routing in web applications, without requiring a full page refresh. I used this library for easy and smooth navigation between my different pages.</ul>
<li>Typed.js (Home - Typing Animation)</li>
<ul>Built by Matt Boldt, I used Typed.js to include a typing animation onto the Home Page. I used this to add uniqueness to an otherwise static page.</ul>
<li>EmailJS (Contact Me - Message Form)</li>
<ul>Used to handle the "client side" for sending emails without having to implement a backend - currently limited to only 200 e-mails per month, which I believe is sufficient for my current needs.</ul>

## Unique Features

### A Dynamic Typing Animation (Home)
<p>By employing the Typed.js library, I was able to create a unique typing animation on the Home page, welcoming the user with a welcome message and my name.</p>

### A Navigation Bar for Ease of Scrolling Between Sections (About Me)
<p>In my initial iteration for my About Me page, I noted the excessive amount of scrolling that the user was required to do in order to reach the bottom of the page. Thus, I was inspired to create an easier method of scrolling for the About Me page. With HTML, CSS and JavaScript, I crafted a Navigation Bar. Stationed just underneath the header of my website, this navigation bar allows the user to select which sub-section they would like to visit.</p>
<p>An animation (A smooth underline animation spanning the length of the sub-section) will appear upon cursor hovering. Upon clicking, it guides the user seamlessly and smoothly towards their section of choice.</p>
<p>For further improvements, I hope to implement a "Scroll to Top" button on the side of the page. This will improve the overall user experience and also limit the amount of scrolling required to return to the top of the page.</p>

### A Photo Album, Dedicated to Showcasing Hobbies & Interests Outside of Programming (About Me)
<p>On my About Me page, I aimed to create a subsection outside of my programming-related and professional experiences to showcase my hobbies and interests as a photo gallery.React-Photo-Album was the ideal choice for this for its freedom in customization. In order for the photographs to be rendered in its current layout, I created an array of photos (Photos.js) with pre-set sizes for width and height. Documentation from React-Photo-Album was followed, ensuring that all photos would be displayed within the album container. The Rows layout was selected for the aesthetic design.</p>
<p>For further improvements, I hope to refine the photo album by adding more user interactivity, such as: Hover/on-click effects for photos; display randomization.</p>

### Dynamic Project Panels (Projects)
<p>Inspired by other portfolio websites, I wanted to display my current projects in a gallery-like format. A grid template was used to control the overall spacing between each card, as well as the number of elements per row. A reusable ProjectCard component was created to reduce code repetition. Each card component should contain information on the title, a relevant image, project type, brief description and the tech stack used to build the project. The tech stack container was created as an array, where I added the correct icon (Pulled from the React-Icons library). This permitted a seamless stack display. If the user wanted to learn more about the project, I also added a clickable button at the bottom of the project card. Clicking this will open a new tab for the user, linking them to the relevant GitHub repository.</p>  
<p>For further improvements, I would consider making the project cards into a flip card format to better organize the information (I.e., description in the front; relevant tech stacks to be displayed on the other side upon hovering). This would then improve overall readability.</p>

### A Functional Message Form (Contact Me)
<p>On my Contact Me page, I wanted to create a message form. As it was my first time implementing a contact form, I consulted many online resources to ensure that it would be functional. I created multiple input boxes to collect user inputs.</p>
<p>As I did not wish to integrate a backend server into this project currently, I made use of EmailJS. EmailJS is a JavaScript library that handles the client-side email sending, without the need for a backend. I found this sufficient and fairly easy to use, as the relevant code was pulled directly from the EmailJS documentation for React. As per EmailJS' documentation, the public API key is designated to be exposed in the frontend code.</p>
<p>For further improvements, I am hoping to create a corresponding "Thank You For Your Message!" page after the user presses "Send Message". Currently, there is no notification shown to the user as to whether their message was sent or not.</p>

## Sections

### Home

![HomePage](https://github.com/user-attachments/assets/c7e9a9d2-d3ce-4b44-91b3-a5efe3b11e79)

<p>The Home page features a type-like animation that displays a welcome message to the viewer. To the left of the Home page features my profile picture, alongside a summary card that describes what I currently do, my previous career and my motivations for joining the tech industry.</p>

### About Me 

![AboutMe-Education](https://github.com/user-attachments/assets/1cd489d9-01b5-464e-90fd-9b7ec04be069)

<p>The About Me page displays all relevant information pertaining to my education, my technical skills, prior professional experience in the healthcare sector, community service and hobbies and interests. Each sub-section was created separately in a resume-like format. Positioned at the top of the About Me page is a navigation bar for easier scrolling between sections.</p>

![AboutMe-PhotoAlbum](https://github.com/user-attachments/assets/836daf84-ab3b-4b9e-b9f0-f8593a58b2a7)
<p>The most unique aspect to the About Me page is the photo gallery, which features an assortment of my personal hobbies, such as photography, crochet, restaurant-hopping and travel.</p>

### Resume & GitHub
<p>Clicking on Resume will open up a new tab for the user. It links to a detailed PDF copy of my resume. It summarizes my education, more details pertaining to my technical projects, previous professional experiences and relevant responsibilities, community involvement and technical skills.</p>
<p>Clicking on GitHub will open up a new tab for the user, linking directly to my GitHub.</p>

### Projects
![Projects-RowOne](https://github.com/user-attachments/assets/e11504b4-190d-44e9-8a86-62c6f805ace6)

<p>The Projects page features a gallery view of the latest iterations for all of my technical projects that I have worked on so far. Each project features its own card, which includes a relevant photo to the starting menu or home page of the project. The card also contains information on the project type (Academic or hackathon-related). It also includes a section directly underneath the project description that includes logos of the relevant tech stacks being used. Finally, there is a button positioned at the bottom of each project card that links to the relevant GitHub repository.</p>

### Contact Me

![ContactMe-Top](https://github.com/user-attachments/assets/4479e0aa-dd24-42ea-ba30-d3b72a0ac7b1)

<p>The Contact Me page features a thank-you message to the user for visiting the website. Additional buttons were also created on the page, which links to my personal e-mail, my DevPost and my LinkedIn, respectively.</p> 

![ContactMe-ResizableMessageForm](https://github.com/user-attachments/assets/f7d1d99a-f976-4418-bf89-4c1ad72b4a8e)

<p>At the bottom of the page is a functional Message Form. Here, it prompts the user to enter their name, e-mail address and a message of their choosing. As mentioned, EmailJS was used to permit client-side email sending without the need for the development of a backend server and its seamless integration with React. It has been tested for functionality: any messages sent through the form will trigger a notification e-mail to be sent to my personal inbox.</p>

## Instructions for Running Locally

Install the latest version of node.js (JavaScript runtime server)
Check the version using the command
node --version
Install the latest version of npm (JavaScript package manager)
Check the version using the command
npm --version
Clone the repository from github by typing in the command line, either through HTTPS or SSH
Install any dependencies by using the command
npm install
The web application can be run on your local server by typing the command
npm run dev
