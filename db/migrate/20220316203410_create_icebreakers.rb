class CreateIcebreakers < ActiveRecord::Migration[7.0]
  def change
    create_table :icebreakers do |t|
      t.string :content
      t.string :tags
      t.integer :flames
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
