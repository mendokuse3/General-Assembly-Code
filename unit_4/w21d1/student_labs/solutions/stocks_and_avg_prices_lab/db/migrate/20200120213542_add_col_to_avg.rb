class AddColToAvg < ActiveRecord::Migration[6.0]
  def change
    add_column :average_prices, :stock_id, :integer
  end
end
