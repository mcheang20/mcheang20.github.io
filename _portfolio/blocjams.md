---
layout: post
title: BlocJams
thumbnail-path: "img/blocjams.jpg"
short-description: A digital music player.

---

{:.center}
![]({{ site.baseurl }}/img/blocjams.jpg)

## Overview

BlocJams is a digital web music player that allows users to stream their favorite music anytime, anywhere.  

## Problem and Challenges

Taking similar concepts from similar websites, design and develop an application from scratch using Javascript, Jquery, and AngularJS that enables users to stream and listen to music from all platforms.

<div class="col3">
  <dl class="row col-md-4">
      <dt class="info-col">User Control Bar Functionality</dt>
        <dd>
          The control bar gives users an interface to control the music they listen to. Therefore a proper control bar had to be designed that allowed users to play/pause a song, skip forwards or backwards and adjust volume settings.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Data Reference Consistency</dt>
        <dd>
          The application required the ability to hold song data consistently without interruption. This functionality was implemented to allow users to navigate to different pages without pausing or reloading the song if one is currently playing and to allow the updating and changing of data across components.
        </dd>
  </dl>
  <dl class="row col-md-4">
      <dt class="info-col">Playback Setting</dt
        <dd>
          One requirement needed was song playback functionality. Users could play/pause songs and skip forward or backwards but were unable to skip to any point in the song.   Song attribute changes had to be observed to properly determine the correct playback position of a song.  Users can continue listening to the point at which the song was stopped while the attributes are updated.  
        </dd>
  </dl>
</div>

## Solution

<div class="checkbox col3">
  <dl class="row col-md-3">
      <dt class="info-col">Developing a Custom Control Bar</dt>
        <dd>
          The architecture of the application was first created using Javascript, HTML, and Jquery. Custom methods were created to handle the logic of the functionality of the control bar.  This was then translated over to AngularJS. A controller was created for the control bar and the existing methods was updated or removed.
        </dd>
  </dl>
  <dl class="row col-md-3">
      <dt class="info-col">Angular Service</dt>
        <dd>
          An Angular service was used to handle data across the application's several components. This allowed the interaction between a user and any of the application's components to be seamless as data is changed.
        </dd>
  </dl>
  <dl class="row col-md-3">
      <dt class="info-col">Angular Directives</dt>
        <dd>
          A custom directive was created to handle playback functionality. In combination with jQlite methods, exiting functions were updated to handle and observe attribute changes. This allowed the selection of a specific time in a song updating the specific song's attributes.  
        </dd>
  </dl>
</div>


## Results

A simple web music player, built from the ground up allowing, users to listen to music anywhere anytime.
