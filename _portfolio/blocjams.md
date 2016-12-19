---
layout: post
title: BlocJams
thumbnail-path: "img/blocjams.jpg"
short-description: Listen to music anytime, anywhere.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.jpg)

## Overview

BlocJams is a digital web music player that allows users to stream their favorite music anytime, anywhere.  

## Problem and Challenges

Taking similar concepts from other web applications, designing and developing a music streaming application from scratch using Javascript, jQuery, and AngularJS would pose some challenges.

<div class="col-all">
  <dl>
    <dt class="heading">User Control Bar Functionality</dt>
      <dd class="col-info">
        The control bar gives users an interface to control the music they listen to. A proper control bar had to be designed that allowed users to play/pause a song, skip forwards or backwards, and adjust volume settings.
      </dd>
  </dl>
  <dl>
      <dt class="heading">Data Reference Consistency</dt>
        <dd class="col-info">
          The application required the ability to hold song data consistently without any interruption. This functionality had to be implemented to allow users to navigate to different pages without pausing or reloading the song.
        </dd>
  </dl>
  </div>
  <div class="col-all">
  <dl>
      <dt class="heading">Playback Setting</dt>
        <dd class="col-info">
          One requirement needed was song playback functionality. Users could play/pause songs and skip forwards or backwards to then next song but were unable to skip to any point in the song. Song attribute changes had to be observed to properly determine the correct playback position of a song.  Users can continue listening to the point at which the song was stopped while the attributes are updated.  
        </dd>
  </dl>
  <dl>
      <dt class="heading">Track and Display Analytics</dt>
        <dd class="col-info">
          We wanted the ability to hold and track events captured within the application such as how many times an album has been viewed or the times a song has been played. The captured events then needed to be displayed aesthetically.
        </dd>
  </dl>
</div>

## Solution

<div class="col-all">
  <dl>
      <dt class="heading">Developing a Custom Control Bar</dt>
        <dd class="col-info">
          The architecture of the application was first designed using Javascript, HTML, CSS, and jQuery. Custom methods were created to handle the logic of the control bar.  This was then translated over to AngularJS. A custom controller was then added for the control bar and existing methods were updated or removed.
        </dd>
  </dl>
  <dl>
    <dt class="heading">Angular Service</dt>
      <dd class="col-info">
        An Angular service was used to handle data across the application's several components. This allowed the interaction between a user and any of the application's components to be seamless as data is updated. As a result a song does not get paused or reloaded if a user navigates to a different page.
      </dd>
  </dl>
  </div>
  <div class="col-all">
    <dl>
      <dt class="heading">Angular Directives</dt>
        <dd class="col-info">
          A custom directive was created to handle playback functionality. In combination with jQlite methods, existing functions were updated to handle and observe attribute changes. This enabled a user to select a specific time within the song and have the song play at that point.
        </dd>
    </dl>
  <dl>
    <dt class="heading">Angular-nvD3</dt>
      <dd class="col-info">
        Using MVC and MVMM patterns, a custom metrics service was used to capture and record events. To display the captured metrics, the Angular-nvD3 library was chosen to visualize the data over a period of time.  
      </dd>
  </dl>
</div>


## Results

A simple web music player, built from the ground up allowing, users to listen to music anywhere anytime.
