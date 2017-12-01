class ShowsController < ApplicationController

  def index
    render react_component: 'Header'

  end

end
