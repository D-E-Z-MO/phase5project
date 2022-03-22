class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :response
  has_one :newIceBreaker
  has_one :user
end
