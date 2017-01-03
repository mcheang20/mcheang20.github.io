---
layout: post
title: Chatter
thumbnail-path: "img/chatter.png"
short-description: Chat with your team, friends, or group.

---

{:.center}
![]({{ site.baseurl }}/img/chatter.png)

## Overview

Chatter is a quick and simple messaging client that allows users to send and receive messages in realtime with their group or team.  

## Problem and Challenges

The focus was to develop an application with the ability to send and receive messages in realtime. This meant including a database and backend service to manage the transfer of data between users and the database.

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
         Chatter aimed to have the exchange of messages between users to be seamless. Chat rooms had to be designed to hold conversations between users. These rooms needed to be able to allow users to send messages back and forth without any interruptions.  
        </dd>
  </dl>
  <dl>
      <dt class="heading">Keeping It Simple</dt>
        <dd class="col-info">
          We wanted users to be able to access the application without the requirement of creating an account and  signing in and out for quick and simple usage.     
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
      <dt class="heading">Cookies Service</dt>
        <dd class="info-col">
          To efficiently store a users information, the ngCookies module was injected. To retrieve data input from the user, Bootstrap's $UIMdodal service was used allowing the creation of data in realtime. Users would then only need to create a username to access the application.
        </dd>
  </dl>
</div>

## Results

A quick and easy messaging application where users can message in realtime with their group or team.
