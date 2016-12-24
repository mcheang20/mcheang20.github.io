---
layout: post
title: A Challenge 
---

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
