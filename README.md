# Webpack Starter Kit

## Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

## Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo. 

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with some `h1` text, Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Where to Add Your Code

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



#### Motivation

This was made so that a user can see their data displayed in a readable and orderly fashion. The details of this project are outlined in [this project spec](http://frontend.turing.io/projects/fitlit.html). 

## Setup

To get started on this project: 

1. should fork this repo - on the top right corner of this page, click the **Fork** button.
2. Clone down the repo by opening your terminal and running `git clone [remote-address]`
3. Once you have cloned the repo, change into the directory and install the project dependencies by running `npm install` in your terminal.
4. Run `open src/index.html` in the terminal to see the page. 
5. _**Git Fit!**_

## Features

The current user is randomly chosen from a `UserRepository` class upon the opening of the page. So, everytime the page is refreshed a different user's information and logged health statistics are displayed. 

<p align = "center">
<img src="https://i.imgur.com/AeJJaLA.png">
</p>

The page displays 4 differenct sections: 
1. User's Information
* Displays a percentage of the user's personal info.
2. User's Activity
* Displays the user's Activity stats for the most recent day and week as well as their rank among all of the users
3. User's Hydration
* Displays how much water a user drank on the latest day, assuming that the goal is to drink 10 cups, and their hydration log entries from the latest week.
4. User's Sleep
* Displays the quality of a user's sleep on a scale of 1 to 5 and the hours of sleep they got, assuming that 8 hours is the goal. These are displayed for the latest day, the latest week, and the user's all time average. 

The small question marks in the corners of some widgets are to explain the information that is displayed when hovered over. For example, the sleep charts' question mark shows that sleep quality is judged based on a scale of 0 to 5. 

The current user's information is displayed from a `User` class that is instantiated within the `UserRepository` class as soon as the page loads. Then the each user is assigned a `WellnessLog` object instance that contains all of the user's documented activity, hydration, and sleep data. Then, all users' data is logged into a `SleepRepository`, `ActivityRepository`, and `HydrationRepository`, where methods calculate information about all users' wellness data. 

Charts are used to display some of the user's data. The charts were created using `Chart js`.

The User Info Area displays a percentage of the user's personal info.


#### 

#### Continuous Improvement/Future Improvements
 In the next iteration we hope to add:
  * Update the date formats to make them more readable
  * Make drag-and-drop widgets to display all of the information that is readily available in the code 
  * Allow users to begin making profiles
---

## Technologies

1. Vanilla JavaScript
2. CSS 
3. HTML
4. `Chart js`
5. `Moment js`

## Deployment

The site can be reached at this [link](https://richardltyler.github.io/GitFit/src/index.html).

## Authors
<table>
    <tr>
        <td> Kelly Dinneen <a href="https://github.com/kellydinneen">GH</td>
        <td> Richard Tyler <a href="https://github.com/richardltyler">GH</td>
    </tr>
<td><img src="https://avatars3.githubusercontent.com/u/70412553?s=400&u=6889ab0a2470a8c4d85c90de53761b160bb9fea6&v=4" alt="Ms. Dinneen"
 width="150" height="auto" /></td>
 <td><img src="https://avatars3.githubusercontent.com/u/70095063?s=460&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4" alt="Mr. Tyler"
 width="150" height="auto" /></td>
</table>



