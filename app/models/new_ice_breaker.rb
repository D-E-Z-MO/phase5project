class NewIceBreaker < ApplicationRecord
  has_many :responses, dependent: :destroy
  has_many :users, through: :responses

  def avg_flame 
    self.average(:flames).round(2).to_f
  end
end
