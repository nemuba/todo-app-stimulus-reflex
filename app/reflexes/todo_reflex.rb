class TodoReflex < ApplicationReflex

  def submit
    if todo_params[:id].present?
      todo = Todo.find(todo_params[:id])
      todo.update(title: todo_params[:title])
    else
      Todo.create(todo_params)
    end
  end

  def edit
    todo = Todo.find(element.dataset[:todo_id])
    morph "#todo_form", ApplicationController.render(partial: 'todos/form', locals: { todo: todo })
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
    params.require(:todo).permit(:title, :id)
  end
end
