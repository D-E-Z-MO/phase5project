class CreateNewIceBreakers < ActiveRecord::Migration[7.0]
  def change
    create_table :new_ice_breakers do |t|
      t.string :content
      t.string :tags
      t.integer :flames

      t.timestamps
    end
  end
end
