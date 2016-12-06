---
layout: post
title: Chatter Box
thumbnail-path:
short-description: Chat with friends and others in realtime.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.jpg)

## Overview

Chatter Box is an application that allows users to send and receive messages in realtime.

## Problem and Challenges

Create an application that allows users to send and receive messages using a realtime database and backend service.

<div class="checkbox col3">
  <dl class="row col-md-4">
      <dt class="info-col">Database Storage</dt>
        <dd>
        Realtime exchange of messages between users were needed. A realtime database system had to be implemented to handle and synchronize the exchange of data for smooth application functionality.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Realtime Chat</dt>
        <dd>
          Chat rooms had to be designed in order to display list of messages. Users also needed to be able to send and be associated with messages they have sent. Chat rooms were needed to be associated with the correct list of messages and users.  
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Modal</dt>
        <dd>
          A simple interface had to be used to allow the interaction between users and the application.
        </dd>
  </dl>
</div>

## Solution

<div class="checkbox col3">
  <dl class="row col-md-4">
      <dt class="info-col">Firebase</dt>
        <dd>
          The solution for a database system was the use of the Firebase service. This provided a simple way for handling and syncing data with the backend allowing for realtime messaging capabilities.  
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Angular JS</dt>
        <dd>
          The application was built using Angular JS along with injecting the Firebase service. Using Angular allows for simple configuration of routes and controllers. In combination of using a simple backend service like Firebase, this allows for easy synchronization between data and user interaction.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Bootstrap</dt>
        <dd>
          To retrieve data input from the user, Bootstrap's $UIMdodal service was used allowing update of data in realtime.  
        </dd>
  </dl>
</div>

## Results
