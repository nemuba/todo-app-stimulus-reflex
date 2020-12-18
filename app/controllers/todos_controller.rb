class TodosController < ApplicationController
  def index
    @todos = Todo.all.order(created_at: :desc)
    @todo ||= Todo.new
    @count ||= Todo.count
  end
end
