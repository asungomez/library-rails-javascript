class Book < ApplicationRecord
  validates :title, presence: true
  validates :author, presence: true
  validates :isbn, presence: true
  validates :publisher, presence: true

  def self.search(query)
    if(query)
      Book.all.where("lower(title) LIKE ?", "%#{query}%")
    else
      Book.all 
    end
  end
end
