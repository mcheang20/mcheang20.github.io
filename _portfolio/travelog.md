---
layout: post
title: Travelog
thumbnail-path: "img/travelog.png"
short-description: Travel, share, explore.

---

{:.center}
![]({{ site.baseurl }}/img/travelog.png)

## Overview

Travelog is an application where users can record their travels, adventures, and vacations and share them with the whole world.  

## Problem and Challenges

Develop an application based on the Ruby on Rails platform that allows users to share content and interact with other users.  

<div class="checkbox col3">
  <dl class="row col-md-4">
      <dt class="info-col">User Authentication</dt>
        <dd>
          A proper authentication system was needed in order for users to securely create an account as well as sign in and out of the application.  
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Notification System</dt>
        <dd>
          User content interaction is a key feature of Travelog. A notification system had to be established to notify users of any actions on their posts such as liking and commenting. However issues with the notification functionality were present and had to be resolved.  
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Premium Service</dt>
        <dd>
          In order to restrict the amount of content that could be posted by users, posts were limited to a certain amount per day. To remove this restriction on users we wanted to add a premium service option where it would be a subscription based service.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Image and Video Upload</dt>
        <dd>
          Part of Travelog's content sharing experience was to allow users to upload images and videos. A problem arose with video uploading resulting in videos being uploaded however the video would not be playable.
        </dd>
  </dl>
</div>

## Solution

<div class="checkbox col3">
  <dl class="row col-md-4">
      <dt class="info-col">Devise Authentication</dt>
        <dd>
          Utilizing the Ruby on Rails framework, a simple solution for authentication was adding the Devise gem. With this gem we area able to handle account creation as well as handling user sessions.  
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Notification using Rails and jQuery</dt>
        <dd>
          A notification system was built and designed using Jquery, Ruby, Javascript, and AJAX. This ensured a proper way of creating and sending notifications consistently.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Stripe</dt>
        <dd>
          The answer to implementing a subscription payment service involved the use of Stripe. The Stripe platform's architecture and code allowed the secure handling of user payment and routing of money. Once a user has successfully made a payment they are automatically upgraded to a premium member.  
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Implementing Paperclip</dt>
        <dd>
          The Paperlcip gem was used to allow users to upload their images. Javascript code was added to enable the uploading of videos.  
        </dd>
  </dl>
</div>

## Results

A unique content-sharing application where users can share their travel experiences with the world.  Users can interact with others, explore, or learn more about different locations and plan their future trips.  
