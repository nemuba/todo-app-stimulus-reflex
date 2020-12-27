class Todo < ApplicationRecord
  validates :title, presence: true

  def self.completed
    where(active: true).count
  end

  def toggle
    self.active = !active
    save
  end
end
