# Recipe Sharing Platform
Recipe Sharing Platform is a recipes & social media platform for home chefs and & food-lovers alike. Here, users can find recipes, along with upcoming cooking events both in their local cities and online, and find out about cookbooks suggested by other members of the community. Users are invited to interact with each other by sharing recipes, cookbooks and cooking experiences.
<br />

The repository for the DRF-API associated with this project is available [HERE](https://github.com/Yari-Carelli/Recipe-Sharing-Platform-DRF-API). The installation, set up, and deployment steps for this section of the project have also been included in the README linked to the DRF-API. 


#### DEPLOYED API HEROKU [LINK](https://recipe-sharing-platform-api.herokuapp.com/)
#### DEPLOYED FRONTEND HEROKU [LINK - LIVE SITE](https://recipe-sharing-platform-yc.herokuapp.com/)
#### DEPLOYED BACKEND GITHUB [REPOSITORY](https://github.com/Yari-Carelli/Recipe-Sharing-Platform-DRF-API)

![Site view across devices](src/assets/images-readme/.png)


## Table of Contents
+ [UX](#ux "UX")
  + [Site Purpose](#site-purpose "Site Purpose")l
  + [Site Goal](#site-goal "Site Goal")
  + [Audience](#audience "Audience")
  + [Communication](#communication "Communication")
  + [Current User Goals](#current-user-goals "Current User Goals")
  + [New User Goals](#new-user-goals "New User Goals")
+ [Design](#design "Design")
  + [Colour Scheme](#colour-scheme "Colour Scheme")
  + [Typography](#typography "Typography")
  + [Wireframes](#imagery "Wireframes")
+ [User Stories](#user-stories "User Stories")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
  + [C.R.U.D](#crud "C.R.U.D")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Technologies Used](#technologies-used "Technologies Used")
  + [Main Languages Used](#main-languages-used "Main Languages Used")
  + [Frameworks, Libraries & Programs Used](#frameworks-libraries-programs-used "Frameworks, Libraries & Programs Used")
+ [Components](#oomponents "Components")
+ [Deployment](#deployment "Deployment")
+ [Credits](#credits "Credits")
  + [Content](#content "Content")
  + [Media](#media "Media")
<br />

## UX

### Site Purpose:
To bring interactivity to the culinary community by sharing the recipes, cooking events, cookbooks, and feedback from other cooking enthusiasts.

### Site Goal:
Recipe Sharing Platform is intended to create an online recipe archive built upon the home recipes shared by the community, as well as bring people together by suggesting cooking experiences and cookbooks with each other.

### Audience:
Everyone with an interest in cooking, and the desire to reach out & connect with like-minded individuals.

### Communication:
The layout is intended to represent a basic social platform, whilst at the same time having a playful, interactive feel to it. With the navigation panel being present at all times, the users can quickly navigate through the site to arrive at their intended destination.

### Current User Goals:
To keep users coming back again and again to see what is new in terms of recipes, events, and books, as well as to follow up with other users that they follow.

### New User Goals:
To engage the user in a meaningful way, and encourage them to explore everything that the site has to offer.

### Future Goals:
- To provide different types of user accounts, so that access is restricted for who may publish specific types of content.
- Provide the ability for users to send private messages to either another user, or a group of users.
- To expand the events section and provide a google maps location for each event, so that users may understand in more detail where an event is to be hosted.
<br />

## Design

### Colour Scheme:
![Colour Palette](src/assets/color-palette.png)

### Typography:
The following font has been downloaded and used for the entire project: [Font](https://www.dafont.com/wild-hazelnut.font)
<br />

## User Stories
I have included links to the [GitHub Issues](https://github.com/Yari-Carelli/recipe-sharing-platform/issues) for this project, as well as the [KANBAN board](https://github.com/users/Yari-Carelli/projects/16).

A full list of the User Stories typed up can be also found here [HERE](src/assets/UserStories.md).
<br />

# Features

### Existing Features:

#### Navigation Bar - Desktop:

![Navbar desktop](src/assets/navbar.png)

#### Navigation Bar - Desktop:

![Logged-in Navbar desktop](src/assets/navbar_loggedin.png)

##### Navigation Bar - Mobile:

![Navbar mobile](src/assets/navbar_mini.png)

##### Homepage:

![Homepage](src/assets/homepage.png)

##### Search Bar:

![Searchbar](src/assets/searchbar.png)

#### About Page:

![About Page](src/assets/about_page.png.png)

#### Events Page:

![Events Page](src/assets/events_page.png)

#### Submission Form:

![Books Page](src/assets/books_page.png)

#### Popular Profiles:

![Popular Profiles](src/assets/popular_profiles.png)

#### Social Links:

![Social Links](src/assets/social_links.png)

##### Sign-in Page:

![Sign-in Page](src/assets/signin_page.png.png)

##### Sign-up Page:

![Sign-up](src/assets/signup_page.png.png)

##### Comment Form:

![Comment form](src/assets/comment_form.png.png)

### Features to Implement:
- The ability to like events and books.
- The ability to leave comments on events and books.
- Notifications when a user receives a new follower, comment, or like.
- Subscription to newsletter
- Email notification when a new recipe has been posted on the platform.
- Private messaging between users.
- Group messaging between users.
- Restrict profile and posts views to only an approved list of users, should a user wish.
- A contact form so that users can provide feedback.
<br />

## Testing

### Manual Testing:

- CRUD functionality has been tested for each of the following: Posts | Books | Events | Comments | Likes | Follow | Profile
 - Likes & Follow may only be created & deleted
 - Profile may only be updated
- All nav links open to the correct page.
- All external links open to a new browser window.
- Pages intended for logged-in users (e.g. feed and liked) only will redirect logged-out users back to the home page.
- Dropdown menu to allow users to edit/delete content only appears on content that they have created.
- Users are able to register a new account.
- Users with an existing account are able to sign in.
- Each user has the ability to sign out.

### Validator Testing
1. CSS files vave been validated by direct input and passed through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues found.

![Jigsaw validator message](src/assets/w3c.png)

2. a. Javascript files pass through [ESLint](https://eslint.org/). The following issues were raised, and have been intentionally ignored as they are in relation to code that was provided in the Moments Walkthrough project:
 - Props spreading is forbidden
 - Do not pass children as props. 
 - Do not use Array index in keys
 - 'a_name' is already declared in the upper scope
 - Expected an assignment or function call and instead saw an expression
 - Do not nest ternary expressions
 - Fragments should contain more than one child
2. b. Additionally, this error has also been ignored:
 - Identifier 'field_name' is not in camel case 
 - - relates to a database field in the API, case cannot be changed for this reason.
2. c. All instances of errors where a newline has been asked for within an opening & closing set of tags, eg:
 - `<p>{owner} doesn't like the {drink}</p>` should be written as:
```
<p>
  {owner}
  {' '}
  doesn't like this
  {' '}
  {drink}
</p>
```
 - This particular rule does not lend to the readability of the code, & instead hinders it (in my opinion).
2. d. All `console.log(err);` have been left in place & commented out, as it was suggested that this is also done in real-world scenarios.
2. e. Added all files affected by the above, unresolved warnings to `.eslintignore`, as well as added the following line to the top of each individual file, `/* eslint-disable */` to allow for a successful deployment on Heroku.

3. The page has an excellent Accessibility rating in Lighthouse:

![Accessibility score](src/assets/images-readme/readme-lighthouse.png)

4. Tested the site opens in Brave, Chrome, Safari & on a mobile device without issues.

5. All social links open to external pages as intended.

### Unfixed Bugs
Whilst it is not technically a bug, I would like to add that I am not entirely satisfied with the header of the site on mobile devices. Increasing the font size to make it stand out, causes the burger icon to shift onto a new line, which takes up too much real estate on the screen. I had attempted early on to separate out the components & have them be independent of each-other, however this then presented a new issue. When shrinking the size of the burger icon, this also shrank the expanding window, which cut off the navigation items. I was unable to ascertain how to target the exact style rule imposed by React-Bootstrap to over ride this and expand the display window, and instead compromised by implementing a smaller font-size into my heading.

## Technologies Used
### Main Languages Used
- HTML5
- CSS3
- Javascript
- Python
- SQL - Postgres

### Frameworks, Libraries & Programs Used
- Google Fonts : For the site fonts.
- Font Awesome : To add icons to the social links in the footer & navigation sections.
- GitPod : To build the project & create the JSX & CSS files before pushing the project to Github.
- GitHub : To store my repository for submission.
- Balsamiq : Was used to create mockups of the project prior to starting.
- Am I Responsive? : To ensure the project looked good across all devices.
- Favicon : To provide the code & image for the icon in the tab bar.
- Django : Used to build the backend database that serves as an API for the front-end project.
- React-Bootstrap : The styling library that has aided to the layout of the site, and which was introduced to us during the course of the program.
- DrawSQL : An interactive tool that allows for the creation of Database mock-ups so that we can visualise the relationships between models.
- ReactJS : To build the components that would collectively form the front-end application.
