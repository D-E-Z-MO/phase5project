
ActiveRecord::Schema[7.0].define(version: 2022_03_16_203528) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "icebreakers", force: :cascade do |t|
    t.string "content"
    t.string "tags"
    t.integer "flames"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_icebreakers_on_user_id"
  end

  create_table "new_ice_breakers", force: :cascade do |t|
    t.string "content"
    t.string "tags"
    t.integer "flames"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.string "response"
    t.bigint "new_ice_breaker_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["new_ice_breaker_id"], name: "index_responses_on_new_ice_breaker_id"
    t.index ["user_id"], name: "index_responses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "icebreakers", "users"
  add_foreign_key "responses", "new_ice_breakers"
  add_foreign_key "responses", "users"
end
