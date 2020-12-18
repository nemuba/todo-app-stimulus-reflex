module TodoHelper
  def actived?(todo)
    todo.active? ? 'Complete' : 'Incomplete'
  end
end
