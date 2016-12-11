---
layout: post
title: Chatter
thumbnail-path:
short-description: Chat with friends and others in realtime.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.jpg)

## Overview

Chatter is a messaging application that allows users to send and receive messages in realtime with friends or strangers.

## Problem and Challenges
The application had to feature the ability to send and receive messages in realtime. This meant including a database and backend service to manage the transfer of data between users and the database.

<div class="col-all-2">
  <dl>
      <dt class="heading">Database Storage</dt>
        <dd class="col-info">
        The application was aimed to handle large amounts of messages to be transferred between users. A realtime database system was a critical requirement to handle and synchronize the exchange of data for smooth application functionality.
        </dd>
  </dl>
  <dl>
      <dt class="heading">Realtime Chat</dt>
        <dd class="col-info">
         Chatter aimed to have the exchange of messages between users to be seamless. Chat rooms had to be designed to hold conversations between users. Users also needed to be able to send and be associated with messages they have sent. Chat rooms were needed to be associated with the correct list of messages and users.  
        </dd>
  </dl>
  <dl>
      <dt class="heading">Modal</dt>
        <dd class="col-info">
          A simple interface was required to allow the interaction between users and the application. This included the creation of chat rooms and setting usernames.
        </dd>
  </dl>
</div>

## Solution

<div class="col-all-2">
  <dl>
      <dt class="heading">Firebase</dt>
        <dd class="info-col">
          The solution for a database system was the use of the Firebase service. This provided a simple way for handling and syncing data with the backend allowing for realtime messaging capabilities.  
        </dd>
  </dl>
  <dl>
      <dt class="heading">AngularJS</dt>
        <dd class="info-col">
          The application was built using Angular JS along with injecting the Firebase service. Using Angular allows for simple configuration of routes and controllers. In combination of using a simple backend service like Firebase, this allows for easy synchronization between data and user interaction.
        </dd>
  </dl>
  <dl>
      <dt class="heading">Bootstrap</dt>
        <dd class="info-col">
          To retrieve data input from the user, Bootstrap's $UIMdodal service was used allowing update of data in realtime.  
        </dd>
  </dl>
</div>

## Results

A messaging application where users can chat in realtime without interference. 
