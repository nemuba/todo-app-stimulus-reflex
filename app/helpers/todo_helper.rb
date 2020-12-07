module TodoHelper
  def actived?(todo)
    todo.active? ? 'Active' : 'Inactive'
  end
end
