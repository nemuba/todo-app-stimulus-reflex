class Todo < ApplicationRecord
  validates :title, presence: true

  def self.completed
    where(active: true).count
  end

  def toggle
    self.active = !self.active
    self.save
  end
end
