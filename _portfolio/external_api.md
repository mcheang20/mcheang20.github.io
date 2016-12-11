---
layout: post
title: API Tracking Tool
thumbnail-path: "img/blocflix.png"
short-description: Analytics service for tracking and reporting.

---
{:.center}
![]({{ site.baseurl }}/img/blocflix.png)

## Overview

Create a web tool that allows activity tracking on registered web applications.

## Problems and Challenges

Designing and building an API from scratch poses some challenges. The biggest issue would be the management and communication of data between the server-side and the client-side.  

<div class="col2">
  <dl class="row col-md-4">
      <dt class="info-col">Receiving and Tracking Events</dt>
        <dd>
          Our service had to feature the registry of various applications. Registered applications needed to be be able to manage receiving and tracking of events from the client-side.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Display Analytics</dt>
        <dd>
          Being an analytics platform, we wanted users to be able to see tracked events on their registered applications.  
        </dd>
  </dl>
  </div>

## Solution

<div class="col2">
  <dl class="row col-md-4">
      <dt class="info-col">Designing Custom API</dt>
        <dd>
        The entire service was constructed using Ruby on Rails. In order for the service to track events from registered applications, custom API routes and a controller were created. A Javascript snippet was devised on the client side. This Javascript snippet tracks an event which then makes an AJAX request to the server-side API.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Chartkick</dt>
        <dd>
          To display tracked events so that users can visualize the data, graphs were used. The Chartkick gem was installed that allowed the creation of graphs with the number of tracked events on each application.
        </dd>
  </dl>
  </div>

## Results

A custom API service tool that can be used on any web application to track and record user activity.
