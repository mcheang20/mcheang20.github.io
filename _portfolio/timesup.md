---
layout: post
title: TimesUp
thumbnail-path: "img/blocitoff.png"
short-description: A self-destructing to-do list application.

---

{:.center}
![]({{ site.baseurl }}/img/blocitoff.png)

## Overview

TimesUp is a self-destructing to-do list application that encourages users to perform weekly tasks. Users have a 7 day time period at which the tasks must be completed before it is automatically removed.   

## Problem and Challenges

 Using Ruby on Rails, develop an application that allows users to add and check off completed tasks. Tasks are then automatically removed after a certain period of time if not completed.

<div class="checkbox col2">
  <dl class="row col-md-6">
      <dt class="info-col">Creating and Displaying Tasks</dt>
        <dd>
          The main purpose of TimesUp is to be able to create and delete completed tasks. Therefore the ability to create and delete tasks had to be implemented in a way that allowed seamless user interaction.
        </dd>
  </dl>
  <dl class="row col-md-6">
      <dt class="info-col">Automatic Deletion</dt>
        <dd>
          Creating a system to automatically delete items after a certain time period has passed was the main challenge. Items upon creation should initiate a timer where, after a certain amount of time has passed, would be deleted if not yet completed by the user.
        </dd>
  </dl>
</div>

## Solution

<div class="col2">
  <dl class="row col-md-6">
      <dt class="info-col">Implementing AJAX</dt>
        <dd>
          Ajax was implemented to manage the create and delete functions of the application. This allowed the creation and deletion of tasks to be executed without having to refresh the page each time resulting in unobtrusive interaction.
        </dd>
  </dl>
  <dl class="row col-md-6">
      <dt class="info-col">Rake Automation</dt>
        <dd>
          In order to automate the deletion of items, Rake was incorporated. A custom rake tasks was created,  defining the moment an item is created. A specified time period was set in which the item will be deleted if not yet complete.  
        </dd>
  </dl>
</div>

## Results

A to-do list application where users can add timed tasks which are automatically deleted after the time period expires. This encourages users to complete tasks within that time period leading to increase productivity.  
