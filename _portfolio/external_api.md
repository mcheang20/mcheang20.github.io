---
layout: post
title: API Tracking Tool
thumbnail-path: "img/blocflix.png"
short-description: Analytics service for tracking and reporting.

---
{:.center}
![]({{ site.baseurl }}/img/blocflix.png)

## Overview

## Problems and Challenges

Build an API analytics service that enables users to track activity on registered web applications.  

<div class="col2">
  <dl class="row col-md-4">
      <dt class="info-col">Receiving and Tracking Events</dt>
        <dd>
          Our service had to feature the registry of various applications and be able to manage receiving and tracking of events from the client-side.
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
      <dt class="info-col">Custom API</dt>
        <dd>
        In order for the service to track events from registered applications, custom API routes and controller were created. Registered applications include a Javascript code that tracks an event which then makes an AJAX request to the server-side API.
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
