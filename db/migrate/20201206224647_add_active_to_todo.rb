class AddActiveToTodo < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :active, :boolean, default: false
  end
end
