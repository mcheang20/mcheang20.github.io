---
layout: post
title: Bulletin
thumbnail-path: "img/blocflix.png"
short-description: Discuss and share topics with friends and others.

---

{:.center}
![]({{ site.baseurl }}/img/blocflix.png)

## Overview

Reddit is one of the most popular sharing and web applications in the world. Replicating an application like Reddit using Ruby on Rails brings a set of challenges but also allows the one to discover how the application functions.

## Problem and Challenges

The project required the design and development based on already existing web applications. Highlighting key features and aspects which had to be built from the ground up included creation of topic and posts models, user authentication, and user interactions.

<div class="col2">
  <dl class="row col-md-6">
      <dt class="info-col">Voting Issues</dt>
        <dd>
          Implementing a voting feature for users posed some problems. Interaction with the vote model were not generating a change in value of the votes total or the total count of votes would be incremented by the wrong amount.
        </dd>
  </dl>
  <dl class="row col-md-6">
      <dt class="info-col">User Features</dt>
        <dd>
          Being a social centered web application, we wanted users to have interactions with other users and their content. Features such as commenting, labeling, favoriting, and voting had to be included. Establishing relationships with each model posed to be a challenge.
        </dd>
  </dl>
</div>

## Solution

<div class="col2">
  <dl class="row col-md-6">
      <dt class="info-col">Custom Vote Model and UI</dt>
        <dd>
          A custom voting system was designed on the backend. This provided the ability for users to increase or decrease the vote count of a particular post. The customization also allowed us to pinpoint any issues with registering vote counts and resolve them.  
        </dd>
  </dl>
  <dl class="row col-md-6">
      <dt class="info-col">User Features</dt>
        <dd>

        </dd>
  </dl>
</div>


## Results
