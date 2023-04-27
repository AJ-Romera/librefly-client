# Librefly - Bookstore (FullStack Portfolio Project)

:star: Star this project, it motivates me to make better projects!

[Librefly](https://librefly-client.onrender.com/) is a portfolio project to show you my MERN + TypeScript + Redux Toolkit + tailwind skills. The web is an online bookstore where you can publish books, see and search a list of books, books details, etc

![librefly-frontcover](https://user-images.githubusercontent.com/71382951/234852062-9c0d9e91-be13-46f8-bbca-f0d7df730aff.png)

## Table Of Content

- [Features](#features)
- [Tech I used and Why](#tech-i-used-and-why)
- [Links](#links)
- [Screenshots](#screenshots)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
    
## Features

* Navbar with logo, working searchbar, menu, light/dark theme toggle and publish book button
* Banner warning that it´s a portfolio project, not a real bookstore
* Hero section with call-to-action
* List of books fetched from my [REST Api](https://github.com/AJ-Romera/librefly-api)
* From the list you can edit, delete or click the cover to get full details of the book
* Footer (The links are not working as they are fake)
* Form to publish/edit a book, with basic validation
* Full responsive
* 404 page when you click the "example" route in the menu

## Tech i Used And Why

* Vite - To jumpstart a single page application easier, faster, lighter, etc, than Create React App
* MERN - Mongodb atlas, as I use the free tier, it´s easy to use. Express is good NodeJS framework for making APIs. React it´s my favourite JS library, and it´s widely used worldwide. Node completes this famous stack.
* Typescript - To be honest, I just started learning TS. It´s a pain sometimes, but it can be more secure than JS. I used TSX, types and interfaces.
* Redux Toolkit - Because I needed a global context for the search system, to take data from the navbar to the home booklist.
* Tailwind - I like vanilla CSS overall, but with Tailwind I´m able to make the UI quickly. This project was built from zero, so I spent a lot of time on it, tailwind saves a lot of time. It has premade components and the light/dark mode is easy to integrate.
* Axios - To fetch data from the API URLs
* React Router Dom V6.10 - I made the router and routes with this.
* React Icons - To get some icons.
* React Toastify - When you publish, edit or delete a book, you´ll see a message on the right top corner, that´s a toast, it´s premade and configured with that dependencie.
* Form Validation - Just a basic validation to prevent wrong information and bad patterns to be submitted (without dependencies. Manual validation)
* API Rest - You can post, get, put and delete books from/to the database thanks to the API (I made it myself too, you can find the code [here](https://github.com/AJ-Romera/librefly-api))
* Helper - I made a function to bring the user to the top of the page instantly when he/she goes to another route/page. Normally, when you go to another route/page, the scroll
* LocalStorage - The web remembers the theme you used last time, so if you are on dark mode and refresh the page, you´ll see the dark mode. The theme persists

## Links
* [Website Live](https://librefly-client.onrender.com/)
* [API Rest](https://github.com/AJ-Romera/librefly-api)
* [Linkedin](https://es.linkedin.com/in/aj-romera)
* Email: ajromeraalfonso@gmail.com
* [Portfolio]() TBA

## Screenshots

### Desktop

![librefly-desktop-dark](https://user-images.githubusercontent.com/71382951/234944969-10ece4c9-dead-47be-b10d-db452df6ea6f.png)

![librefly-desktop-light](https://user-images.githubusercontent.com/71382951/234945077-df28616c-49c4-4c4b-b4af-5a0b111db3cd.png)

![librefly-desktop-light-bookdetails](https://user-images.githubusercontent.com/71382951/234945360-260b7a0a-7020-47ba-9264-84e0ddab9115.png)

![librefly-desktop-light-publishbookform](https://user-images.githubusercontent.com/71382951/234945416-87d993de-3504-4d6b-b6f3-46fb8a000a1b.png)

![librefly-desktop-light-404](https://user-images.githubusercontent.com/71382951/234945626-e00fe377-cca6-4ada-bf35-e0075db78007.png)

### Mobile

![librefly-mobile-light](https://user-images.githubusercontent.com/71382951/234945869-6b870e84-ce18-44c1-8b42-99ef8519d0d3.png)

![librefly-mobile-light-bookdetails](https://user-images.githubusercontent.com/71382951/234945952-86f2f8cd-8031-432b-9820-ba4103fd804e.png)

![librefly-mobile-dark](https://user-images.githubusercontent.com/71382951/234945997-ad304de1-e8be-4a15-b276-0cb512d2ca60.png)
