class Response < ApplicationRecord
  belongs_to :newIceBreaker
  belongs_to :user, through: :newIceBreaker
end
