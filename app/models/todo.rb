class Todo < ApplicationRecord
  validates :title, presence: true

  def toggle
    self.active = !self.active
    self.save
  end
end
