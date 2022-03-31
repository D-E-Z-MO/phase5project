class User < ApplicationRecord
  has_secure_password
  has_many :icebreakers, dependent: :destroy
  has_many :responses
  has_many :newIceBreakers, through: :responses

  validates :username, presence: true, uniqueness: true
end
