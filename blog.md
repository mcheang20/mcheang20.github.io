---
layout: page
title: Blog
permalink: /blog/
feature-img: "img/color.png"
---
<h1 class="blog-title-one"> My Coding Journey </h1>

![](/img/coding.jpg)

## How it started.

I never knew anything about writing code, wether its Ruby, or Javascript, until about 10 months ago. So how did a field that I knew very little of become something that I’m very passionate about?  It all started with some HTML and CSS.  

Like most people out there, if you happen to come across some HTML or Javascript code, you have not the slightest clue as to what it means or what it does. However, it has always fascinated me wondering how it all functions. How do lines and lines of code create a fully functioning application that we, the users, are able to see and interact with? I did a little research and stumbled upon a site called CodeAcademy, a free interactive program that teaches the basics of various programming languages. With this tool I was able to delve deeper into my coding curiosity and I was hooked!

Starting with HTML and CSS, then working my way to Javascript and Ruby I began to gain a better understanding of the design and concepts of code. Having worked through the CodeAcademy courses, I learned more and more but, most important, I was also having fun at the same time. Seeing it all come together and getting a little better understanding I wanted to learn more.  

Learning code was just a hobby at this point, but I wanted to expand my knowledge and have coding and programming mean more than just a side project. At this point I decided, leave the comfortable career path that I already had chosen, or start fresh and new and further develop my knowledge in a field that brought excitement, curiosity, and sense of accomplishment. Of course I chose the latter.

### Why web development?

My road to a new career started with Bloc's full stack web development program. Why web development? Though I like working on backend as much as the frontend, seeing your hard work appear on screen and being able to interact with it brings a big smile to my face every time. The Bloc program was designed to have each student assigned to a mentor/s.  The mentor would serve as the guide to each student's learning every step of the way. My program focused mainly on the Ruby and Javascript languages as well as the Ruby on Rails, AngularJS, and jQuery frameworks. I knew the next 10 to 11 months would be challenging but I was ready for it. With the help of my mentors I was able to grasp the concepts of each framework and soon started working on several projects to showcase what I’ve learned but also continue to teach me of what I still need to learn.  

Working on various projects was definitely the most challenging part of my program but it was also the part that I enjoyed the most. Creating an application from scratch, wether its an API, a music streaming service, or a content-sharing application, has showed me not just what lines of code can do but also what I can do. My coding journey has just started and I know I still have much to learn and that is what excites me the most.

---

<h1 class="blog-title"> A Challenge </h1>

Though my coding journey and experience at Bloc has been exciting and fun there have also been many challenges and moments that made me want to pull my hair out.

### API, What's That?

Starting out as a web developer I was first confused with the concept of API's. How do web applications able to connect to other sources and access or update data? However the more I became familiar working with them, the more I became fascinated. Having worked on a few projects I thought it would be interesting to be able connect them to a single application.  

The first step was to create a simple rails application. I wanted to add a simple authentication system, app registration, and to display data for applications that were connected. To keep it simple, I decided to just track user activity on registered applications. I then created the necessary controller and routes for event tracking. For the purpose of this project the CSRF protection was ignored.

The next step was to start tracking client-side events. In order to do this I decided to implement a snippet of Javascript code that applications would include. This would send an AJAX request to the server-side API creating an event on the server. However since were using cross-origin request to create the event, which browsers normally will not allow, a work around is needed. This is where cross-origin resource sharing(CORS) comes in.

The final step was to update the routes and setup the CORS response headers to allow POST requests to be made across servers.

#### API Controller and Routes
{% highlight ruby %}
class API::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_filter :set_access_control_headers

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = *
    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Content-Type'
  end

  def create
    registered_application = App.find_by(url: request.env['HTTP_ORIGIN'])
    @event = registered_application.events.new(name: params[:name])

    if @event.save
      render json: @event, status: :created
    else
      render json: {errors: @event.errors}, status: :unprocessable_entity
    end
  end

  def preflight
    head 200
  end

  private
  def event_params
    params.require(:event).permit(:name)
  end
end

# routes
  namespace :api, defaults: { format: :json } do
    resources :events, only: [:create]
  end

{% endhighlight %}

#### Client-Side Javascript

{% highlight js %}
var blocmetrics = {};
  blocmetrics.report = function(eventName){
   var event = {event: { name: eventName }};
   var request = new XMLHttpRequest();
   request.open("POST", "http://localhost:3000/api/events", true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify(event));
}
{% endhighlight %}

With the code the above, I'm able to link my projects within the application. Events can now be tracked and displayed in the API. This was a simple project that showcases one of the many ways an API can be created and used.  

<div class="border"></div>
