class FallbackController < ActionController::Base
  def index
    render file: '/Users/douglassmoss/Code/Flatiron/Phase5/project5/public/index.html'
  end
end
