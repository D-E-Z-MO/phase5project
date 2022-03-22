class NewIceBreakerSerializer < ActiveModel::Serializer
  attributes :id, :content, :tags, :flames
  has_many :responses
end
