class TodoReflex < ApplicationReflex
  def create
    Todo.create(todo_params)
  end

  def delete
    todo = Todo.find(element.dataset["todo_id"])

    todo.destroy
  end

  def toggle
    todo = Todo.find(element.dataset['todo_id'])
    
    todo.toggle
  end

  private

  def todo_params
    params.require(:todo).permit(:title)
  end
end