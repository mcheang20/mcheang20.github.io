---
layout: post
title: Metriks
thumbnail-path: "img/metriks.png"
short-description: Analytics service for tracking and reporting.

---
{:.center}
![]({{ site.baseurl }}/img/metriks.png)

## Overview

A web tool that allows activity tracking on registered web applications.

## Problems and Challenges

Designing and building an API from scratch posed some challenges. The biggest issue would be the management and communication of data between the server-side and the client-side.  

<div class="col-all">
  <dl>
      <dt class="heading">Receiving and Tracking Events</dt>
        <dd class="col-info">
          Our service had to feature the registry of various applications. Registered applications needed to be be able to manage, receive, and track events from the client-side.
        </dd>
  </dl>
  <dl>
      <dt class="heading">Display Analytics</dt>
        <dd class="col-info">
          Being an analytics platform, we wanted users to be able to see tracked events on their registered applications.  
        </dd>
  </dl>
</div>

## Solution

<div class="col-all">
  <dl>
      <dt class="heading">Designing a custom API</dt>
        <dd class="col-info">
          The entire service was constructed using Ruby on Rails. In order for the service to track events from registered applications, custom API routes and a controller were created. A Javascript snippet was created and would be included on the client side. This Javascript snippet tracks an event which then makes an AJAX request to the server-side API.
        </dd>
  </dl>
  <dl>
      <dt class="heading">Chartkick</dt>
        <dd class="col-info">
          To display tracked events so that users can visualize the data, graphs were used. The Chartkick gem was installed that allowed the creation of graphs with the number of tracked events on each application.
        </dd>
  </dl>
</div>

## Results

A custom API service tool that can be used on any web application to track and record user activity.
