class TodoReflex < ApplicationReflex
  def create
    Todo.create(todo_params)
  end

  def change
    @todo = Todo.new(title: element['value'])
    @todo.valid?
  end

  def destroy
    todo = Todo.find(element.dataset[:todo_id])
    todo.destroy
  end

  def toggle
    todo = Todo.find(element.dataset[:todo_id])
    todo.toggle
    morph dom_id(todo), ApplicationController.render(partial: 'todos/todo', locals: { todo: todo })
    morph '#completed', "Completed - #{Todo.completed}"
  end

  private

  def todo_params
    params.require(:todo).permit(:title)
  end
end
