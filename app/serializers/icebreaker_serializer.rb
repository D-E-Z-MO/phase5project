class IcebreakerSerializer < ActiveModel::Serializer
  attributes :id, :content, :tags, :flames
  has_one :user
end
