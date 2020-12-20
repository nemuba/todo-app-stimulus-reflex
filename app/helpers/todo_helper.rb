module TodoHelper
  def actived?(todo)
    todo.active? ? 'Complete' : 'Incomplete'
  end

  def action_form(todo)
    todo.title.present? ? 'click->todo#update' : 'click->todo#create'
  end
end
