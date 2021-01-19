---
# A²B
###### Where ya headed? 
---

## Table of Contents
* [Introduction](#introduction)
* [Setup](#setup)
* [Features](#features)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Authors](#authors)

## Introduction

A²B is here to help you track your travel. Keep track of trips past, present, and future!


#### Motivation

This app was made to practice using FetchAPI, Webpack, and SCSS and building responsive and accessible webpages.

## Setup

To get started on this project: 

1. clone down this repo 
2. run `npm install`
3. run `npm start`
4. go to http://localhost:8080/ in your browser
5. clone down [this](https://github.com/turingschool-examples/travel-tracker-api) repo
6. run `npm install` 
7. run`npm start`


## Features

<p align = "center">
 <img src="https://media.giphy.com/media/gAU2DWv2lSoiZcePeX/giphy.gif">
</p>

#### Login
When the page is opened, a user must login in order to see their info. The username is `traveler${id of the user that you would like to see}`. The password is `travel2020`.

#### Viewing Trips
When the user's credentials are verified, the login window is hidden and the rest of the page is enabled. The user can see their username displayed in the top right corner of the page. They can see all of their trips (past, presenet, future, and pending) displayed on the dashboard. 

#### Booking a Trip
In the sidebar, the user can see how much money they have spent on travel in the previous calendar year for tax purposes. The user can also book a new trip in the sidebar. They can enter a date, a number of travelers, a duration, and choose from a list of destinations. They can then see the estimated cost of their trip, which includes a 10% travel agent fee. Once they have seen their estimated cost, they can book the trip. The trip is then added to the trip data and populated on the screen with the existing trips. 


#### 

#### Continuous Improvement/Future Improvements
 In the next iteration we hope to add:
  * add an admin view of the page where a travel agent can see all travelers' info and approve/deny trips and destinations
---

## Technologies

1. Vanilla JavaScript
2. FetchAPI
3. CSS and Sass
4. HTML
5. Webpack
6. Normalize.css
 

## Deployment

The site can be reached at this [link](https://richardltyler.github.io/A2B/dist/index.html).

## Authors
<table>
    <tr>
        <td> Richard Tyler <a href="https://github.com/richardltyler">GH</td>
    </tr>
 <td><img src="https://avatars3.githubusercontent.com/u/70095063?s=460&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4" alt="Mr. Tyler"
 width="150" height="auto" /></td>
</table>



