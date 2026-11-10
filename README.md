# Shyanne Hyacinth — Personal Website Redesign

## About
This is my personal website for my Computer Systems Technology course (CST2) at T. A. Marryshow Community College. It introduces me, shows student projects and skills I am learning, includes a learning video, and provides a contact form.

## Redesign summary
- Improved the page structure using semantic HTML5 elements.
- Updated the layout, colours, spacing, navigation and project cards.
- Added responsive layouts for mobile, tablet and desktop screens.
- Added one local image (`images/tech-workspace.svg`) and externally hosted project images.
- Added alt text, form labels, keyboard focus styles, code comments and a skills table.
- Organised the stylesheet in the `css` folder.

## Technologies
- HTML5
- CSS3 (Grid, Flexbox, media queries and custom properties)
- Google Fonts
- Unsplash images
- YouTube embedded video
- Git and GitHub Pages

## Folder structure
```text
shyanne-personal-website/
├── index.html
├── README.md
├── reflection.txt
├── css/
│   └── style.css
├── images/
│   └── tech-workspace.svg
└── Screenshots/
    ├── Desktop.png
    ├── Tablet.png
    └── phone.png
```

## How to view the website
Open `index.html` in a web browser. The local illustration and CSS are included in this folder. An internet connection is needed for the Google Fonts, externally hosted project images and embedded YouTube video. The contact form uses the visitor's email application; it is not connected to a server.

## Responsive design
CSS Grid and Flexbox arrange content on wider screens. Media queries at 900px and 640px adjust spacing and layout for tablets and phones. On small screens, the hero, project cards and content columns stack vertically, navigation wraps, and the video keeps its 16:9 ratio.

## Image and resource credits
- Local workspace illustration: created for this student website and stored in `images/tech-workspace.svg`.
- Project photographs: Unsplash image URLs are embedded in `index.html` and served by Unsplash. Check the image pages and current licence/attribution requirements before publishing.
- Learning video: YouTube video embed, `UB1O30fR-EE`.
- Fonts: DM Mono and Manrope from Google Fonts.

## Visual redesign update

The updated design uses a modern tech look: a deep navy background, purple and electric-blue highlights, glowing borders, glass-like navigation, larger typography, and project cards with hover effects. The content and required assignment sections are kept, but the visual styling is now noticeably different from the original gold-accent design.

## Reflection

For this redesign, I improved the layout and appearance of my personal website and organised the files into folders. I used semantic HTML elements such as header, nav, main, section, article and footer, moved my styling into an external stylesheet, and used Grid, Flexbox and media queries so the content adjusts to different screen sizes. I also added a local illustration, alt text and comments to explain the code.

One challenge was making the page fit smaller screens without making the text or navigation hard to use, so I stacked the main sections on mobile and adjusted the spacing and image heights. Another challenge was Git: my redesign folder was not connected to my repository, so I cloned it and copied my files in. The W3C validator also found errors, which I fixed until the page passed.

I learned that a branch lets me work on changes without touching the main version of my website. Small commits with clear messages show exactly what changed and why. A Pull Request let me review my work, check there were no conflicts, and merge it into main in a controlled way. I now feel more confident using Git and GitHub, and I know a website needs testing on phones and tablets, not just on desktop.

## JavaScript Enhancements

I added five interactive features using an external JavaScript file (`js/script.js`):

1. **Dynamic Welcome Message**: Greets the user with "Good morning", "Good afternoon", or "Good evening" based on their system time.
2. **Live Digital Clock**: Displays the current time in the hero section, updating every second.
3. **Interactive FAQ Accordion**: Allows users to click questions to reveal answers, with smooth CSS transitions.
4. **Character Counter**: Monitors the contact form textarea and displays the remaining characters in real time.
5. **Back-to-Top Button**: A floating button that appears after scrolling 300px down the page and smoothly scrolls back to the top when clicked.

### Reflection
For this assignment, I added five JavaScript features to improve the interactivity of my website. I learned how to use DOM manipulation to dynamically change HTML content (like the clock and welcome message) and toggle CSS classes to create an interactive accordion. I also practiced using event listeners for user input (the character counter) and scroll events (the back-to-top button). 

One challenge I encountered was debugging why my FAQ accordion wasn't opening. I learned how to use the browser's Developer Tools to inspect the elements and check for console errors. I discovered that duplicate HTML tags at the bottom of my page were preventing the JavaScript from running correctly. Fixing this taught me the importance of clean HTML structure. 

Using Git and GitHub made the process safer. Creating a separate branch (`feature/javascript-enhancements`) meant I could experiment without breaking my live site. Committing and merging via a Pull Request helped me review my changes before finalizing them.
